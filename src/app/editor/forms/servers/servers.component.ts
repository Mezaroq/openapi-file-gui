import {Component, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {OpenApiService} from "../../shared/service/open-api.service";
import {ServerObject} from "../../shared/interface/open-api/server-object";
import {ServerService} from "../../shared/service/server.service";
import {SubscriptionLike} from "rxjs";
import {ServerForms} from "../../shared/model/server-forms";
import {OpenApiObject} from "../../shared/interface/open-api/open-api-object";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'editor-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.sass']
})
export class ServersComponent implements OnInit, OnDestroy {
  servers: ServerObject[] = [];
  openApiSub: SubscriptionLike;
  forms: ServerForms;
  @ViewChild('snackBarError') errorMsg: TemplateRef<any>;

  constructor(private _snackBar: MatSnackBar,
              private openApiService: OpenApiService,
              private serverService: ServerService,
              private router: Router) {
    this.forms = new ServerForms();
  }

  ngOnInit(): void {
    this.openApiSub = this.openApiService.observable().subscribe((api: OpenApiObject) => {
      api.servers ? this.servers = api.servers : [];
    });
  }

  addServer() {
    this.servers.push(this.serverService.emptyServer())
  }

  removeServer($event: number) {
    this.servers.splice($event, 1)
  }

  onSave() {
    if (!this.forms.forms.includes(null) && this.forms.forms.length === 0) {
      this.openApiService.removeServers();
      this.router.navigate(['/editor']);
    } else if (!this.forms.forms.includes(null)) {
      this.openApiService.updateServers(this.serverService.mapObject(this.forms.forms));
      this.router.navigate(['/editor']);
    } else {
      this._snackBar.openFromTemplate(this.errorMsg, {duration: 1000});
    }
  }

  ngOnDestroy(): void {
    this.openApiSub.unsubscribe();
  }
}
