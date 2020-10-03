import {Injectable} from '@angular/core';
import {OpenApiObject} from "../../shared/interface/open-api/open-api-object";
import {ApiMock} from "../../shared/interface/apiMock";
import {OpenApiBuilder} from "../../shared/model/open-api";
import {InfoMockService} from "./info-mock.service";
import {OpenApiVersion} from "../../shared/enum/open-api-version.enum";
import {ServersMockService} from "./servers-mock.service";
import {TagsMockService} from "./tags-mock.service";
import {ExternalDocsBuilder} from "../../shared/model/external-documentation";
import {PathsMockService} from "./paths-mock.service";

@Injectable({
  providedIn: 'root'
})
export class OpenApiMockService implements ApiMock<OpenApiObject> {
  private openapi: OpenApiObject;

  constructor(private infoMockService: InfoMockService,
              private serversMockService: ServersMockService,
              private tagsMockService: TagsMockService,
              private pathsMockService: PathsMockService) {
  }

  getData(): OpenApiObject {
    this.loadData();
    return this.openapi;
  }

  loadData(): void {
    this.openapi = new OpenApiBuilder()
      .openapi(OpenApiVersion.v3_0_0)
      .info(this.infoMockService.getData())
      .servers(this.serversMockService.getData())
      .tags(this.tagsMockService.getData())
      .paths(this.pathsMockService.getData())
      .externalDocs(new ExternalDocsBuilder().url('http://example.docs.com').description('Online doc extension').build())
      .build();
  }
}
