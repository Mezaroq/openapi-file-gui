import {Component, OnDestroy, OnInit} from '@angular/core';
import {OpenApiService} from "../../shared/api-base/service/open-api.service";
import {ServerObject} from "../../shared/api-server/interface/server-object";
import {ServerService} from "../../shared/api-server/service/server.service";
import {SubscriptionLike} from "rxjs";
import {ServerForms} from "../../shared/api-server/class/server-forms";
import {OpenApiObject} from "../../shared/api-base/interface/open-api-object";
import {Router} from "@angular/router";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.sass']
})
export class ServersComponent implements OnInit, OnDestroy {
  servers: ServerObject[] = [];
  openApiSub: SubscriptionLike;
  forms: ServerForms;

  constructor(private openApiService: OpenApiService, private serverService: ServerService, private router: Router) {
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
    }
  }

  ngOnDestroy(): void {
    this.openApiSub.unsubscribe();
  }
}
