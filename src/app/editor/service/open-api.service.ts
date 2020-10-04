import {Inject, Injectable} from '@angular/core';
import {OpenApiObject} from "../shared/interface/open-api/open-api-object";
import {BehaviorSubject, Observable} from "rxjs";
import {OpenApiVersion} from "../shared/enum/open-api-version.enum";
import {OpenApiBuilder} from "../shared/model/open-api";
import {InfoObject} from "../shared/interface/open-api/info-object";
import {InfoService} from "./info.service";
import {ExternalDocsObject} from "../shared/interface/open-api/external-docs-object";
import {ExternalDocsService} from "./external-docs.service";
import {ServerObject} from "../shared/interface/open-api/server-object";
import {TagObject} from "../shared/interface/open-api/tag-object";
import {OpenApiMockService} from "./mock/open-api-mock.service";
import {PathsObject} from "../shared/interface/open-api/paths-object";

@Injectable()
export class OpenApiService {
  private openApi$: BehaviorSubject<OpenApiObject>;
  private openApi: OpenApiObject;

  constructor(private infoService: InfoService,
              private externalDocsService: ExternalDocsService,
              private openApiMockService: OpenApiMockService,
              @Inject('MOCK') private mock: boolean) {
    if (mock) {
      this.openApi = openApiMockService.getData();
      this.openApi$ = new BehaviorSubject<OpenApiObject>(this.openApi);
    } else {
      this.openApi$ = null;
    }
  }

  getPaths(): PathsObject {
    return JSON.parse(JSON.stringify(this.openApi.paths));
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

  updatePaths(paths: PathsObject) {
    this.openApi.paths = paths;
    this.next();
  }
}
