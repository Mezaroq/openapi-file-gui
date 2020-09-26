import {Injectable} from '@angular/core';
import {OpenApiObject} from "../interface/open-api/open-api-object";
import {BehaviorSubject, Observable} from "rxjs";
import {OpenApiVersion} from "../enum/open-api-version.enum";
import {OpenApiBuilder} from "../model/open-api";
import {InfoObject} from "../interface/open-api/info-object";
import {InfoService} from "./info.service";
import {ExternalDocsObject} from "../interface/open-api/external-docs-object";
import {ExternalDocsService} from "./external-docs.service";
import {ServerObject} from "../interface/open-api/server-object";
import {TagObject} from "../interface/open-api/tag-object";

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

  updateServers(serversObject: ServerObject[]) {
    this.openApi.servers = serversObject;
    this.next();
  }

  updateTags(tagsObject: TagObject[]) {
    if (tagsObject.length !== 0)
      this.openApi.tags = tagsObject;
    else
      delete this.openApi.tags;
  }

  removeExternalDocs() {
    delete this.openApi.externalDocs;
  }

  removeServers() {
    delete this.openApi.servers;
  }
}
