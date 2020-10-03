import {Injectable} from '@angular/core';
import {ApiMock} from "../../shared/interface/apiMock";
import {ServerObject} from "../../shared/interface/open-api/server-object";
import {ServerBuilder} from "../../shared/model/server";
import {ServerVariableBuilder} from "../../shared/model/server-variable";

@Injectable({
  providedIn: 'root'
})
export class ServersMockService implements ApiMock<ServerObject[]> {
  private servers: ServerObject[];

  constructor() {
  }

  getData(): ServerObject[] {
    this.loadData();
    return this.servers;
  }

  loadData(): void {
    this.servers = [
      new ServerBuilder()
        .url('http://example.{domain}.com')
        .description('First Example server')
        .variables({
          domain: new ServerVariableBuilder()
            .default('domain1')
            .description('Main server')
            .enum(["domain1", "domain2", "domain3"])
            .build()
        }).build(),

      new ServerBuilder()
        .url('http://example.com:{port}')
        .description('Second Example server')
        .variables({
          port: new ServerVariableBuilder()
            .default('1010')
            .description('App port')
            .enum(["1010", "2020", "3030"])
            .build()
        }).build(),

      new ServerBuilder()
        .url('http://example.{cloud}.{user}.com')
        .description('Third Example server')
        .variables({
          cloud: new ServerVariableBuilder()
            .default('cloud1')
            .description('Main Cloud')
            .enum(["cloud1", "cloud2", "cloud3"])
            .build(),
          user: new ServerVariableBuilder()
            .default('example_user')
            .description('Example user')
            .enum(["example_user", "second_example_user"])
            .build()
        }).build()
    ]
  }
}
