import {Injectable} from '@angular/core';
import {OpenApiObject} from "../interface/open-api-object";
import {BehaviorSubject, Observable} from "rxjs";
import {OpenApiVersion} from "../interface/open-api-version.enum";
import {OpenApiBuilder} from "../class/open-api";
import {InfoObject} from "../../api-info/interface/info-object";
import {InfoService} from "../../api-info/service/info.service";
import {ExternalDocsObject} from "../../api-external-documentation/interface/external-docs-object";
import {ExternalDocsService} from "../../api-external-documentation/service/external-docs.service";
import {ServerObject} from "../../api-server/interface/server-object";

@Injectable()
export class OpenApiService {
  private openApi$: BehaviorSubject<OpenApiObject>;
  private openApi: OpenApiObject;

  constructor(private infoService: InfoService, private externalDocsService: ExternalDocsService) {
    this.openApi$ = null;
  }

  createApi(version: OpenApiVersion) {
    if (!this.openApi$) {
      this.openApi = new OpenApiBuilder().openapi(version).build();
      this.openApi$ = new BehaviorSubject<OpenApiObject>(this.openApi);
    }
  }

  isCreated(): boolean {
    return !!this.openApi$;
  }

  updateInfo(info: InfoObject): void {
    this.openApi.info = this.infoService.mapObject(info);
    this.next();
  }

  observable(): Observable<OpenApiObject> {
    return this.openApi$.asObservable()
  }

  private next(): void {
    this.openApi$.next(this.openApi);
  }

  updateExternalDocs(externalDocs: ExternalDocsObject) {
    this.openApi.externalDocs = this.externalDocsService.mapObject(externalDocs);
    this.next();
  }

  updateServers(serverObjects: ServerObject[]) {
    this.openApi.servers = serverObjects;
    this.next();
  }

  removeExternalDocs() {
    delete this.openApi.externalDocs;
  }

  removeServers() {
    delete this.openApi.servers;
  }
}
