import {Injectable} from '@angular/core';
import {OpenApiObject} from "../interface/open-api-object";
import {BehaviorSubject, Observable} from "rxjs";
import {OpenApiVersion} from "../interface/open-api-version.enum";
import {OpenApiBuilder} from "../class/open-api";
import {InfoObject} from "../../api-info/interface/info-object";
import {InfoService} from "../../api-info/service/info.service";

@Injectable()
export class OpenApiService {
  private openApi$: BehaviorSubject<OpenApiObject>;
  private openApi: OpenApiObject;

  constructor(private infoService: InfoService) {
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
}
