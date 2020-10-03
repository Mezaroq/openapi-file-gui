import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {OpenApiService} from "../../service/open-api.service";
import {ServerObject} from "../../shared/interface/open-api/server-object";
import {ServerService} from "../../service/server.service";
import {SubscriptionLike} from "rxjs";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ServerVariableObject} from "../../shared/interface/open-api/server-variable-object";
import {ApiMap} from "../../shared/interface/api-map";
import {OpenApiObject} from "../../shared/interface/open-api/open-api-object";

@Component({
  selector: 'editor-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServersComponent implements OnInit, OnDestroy {
  servers: ServerObject[];
  serversForm: FormGroup;
  serversArray: FormArray;
  openApiSub: SubscriptionLike;

  constructor(private _snackBar: MatSnackBar,
              private openApiService: OpenApiService,
              private serverService: ServerService,
              private router: Router,
              private fb: FormBuilder) {
    this.serversArray = new FormArray([]);
    this.serversForm = fb.group({
      servers: this.serversArray
    });
  }

  ngOnInit(): void {
    this.openApiSub = this.openApiService.observable().subscribe((api: OpenApiObject) => {
      this.servers = api.servers ? api.servers : [];

      for (let server of this.servers) {
        const serverGroup = this.fb.group({
          url: server?.url,
          description: server?.description,
          variables: this.getVariablesGroup(server?.variables)
        });
        this.serversArray.push(serverGroup);
      }
    });
  }

  getVariablesGroup(variables: ApiMap<ServerVariableObject>): FormGroup {
    const variablesGroup = this.fb.group({});
    if (variables)
      for (let [k, v] of Object.entries(variables)) {
        variablesGroup.setControl(k, this.fb.group({
          default: v?.default,
          description: v?.description,
          enum: this.getVariableEnum(v?.enum)
        }))
      }
    return variablesGroup;
  }

  getVariableEnum(enums: string[]): FormArray {
    const variableEnum = this.fb.array([]);
    if (enums)
      for (let _enum of enums) {
        variableEnum.push(new FormControl(_enum))
      }
    return variableEnum;
  }

  addServer() {
    this.serversArray.push(this.fb.group({
      url: null,
      description: null,
      variables: this.getVariablesGroup(null)
    }));
  }

  removeServer($event: number) {
    this.serversArray.removeAt($event);
  }

  onSubmit() {
    if (this.serversForm.invalid)
      this.serversForm.markAllAsTouched();
    else if (this.serversArray.length === 0) {
      this.openApiService.removeServers();
      this.router.navigate(['/editor'])
    } else {
      console.log(this.serversArray.getRawValue());
      this.openApiService.updateServers(this.serverService.mapObject(this.serversArray.getRawValue()));
      this.router.navigate(['/editor'])
    }
  }

  ngOnDestroy(): void {
    this.openApiSub.unsubscribe();
  }
}
