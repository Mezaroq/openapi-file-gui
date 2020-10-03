import {Injectable} from '@angular/core';
import {ApiMock} from "../../shared/interface/apiMock";
import {PathsObject} from "../../shared/interface/open-api/paths-object";
import {PathsBuilder} from "../../shared/model/paths";
import {PathItemBuilder} from "../../shared/model/path-item";
import {OperationBuilder} from "../../shared/model/operation";
import {ResponsesBuilder} from "../../shared/model/responses";
import {HttpCode} from "../../shared/enum/http-code.enum";
import {ResponseBuilder} from "../../shared/model/response";

@Injectable({
  providedIn: 'root'
})
export class PathsMockService implements ApiMock<PathsObject> {
  private paths: PathsObject;

  constructor() {
  }

  getData(): PathsObject {
    this.loadData();
    return this.paths;
  }

  loadData(): void {
    this.paths = new PathsBuilder()
      .path('/users', new PathItemBuilder()
        .get(new OperationBuilder()
          .summary('Get all users')
          .description('Basic user data')
          .operationId('getUsers()')
          .deprecated(false)
          .responses(new ResponsesBuilder()
            .statusCode(HttpCode._200, new ResponseBuilder()
              .description('OK')
              .build())
            .build())
          .build())
        .post(new OperationBuilder()
          .summary('Save user')
          .description('Send user to server')
          .operationId('saveUser()')
          .deprecated(false)
          .responses(new ResponsesBuilder()
            .statusCode(HttpCode._201, new ResponseBuilder()
              .description('Created')
              .build())
            .statusCode(HttpCode._500, new ResponseBuilder()
              .description('Internal server error')
              .build())
            .build())
          .build())
        .build())

      .path('/users/{id}', new PathItemBuilder()
        .delete(new OperationBuilder()
          .summary('Delete user')
          .description('Remove user from server')
          .operationId('deleteUsers()')
          .deprecated(false)
          .responses(new ResponsesBuilder()
            .statusCode(HttpCode._200, new ResponseBuilder()
              .description('OK')
              .build())
            .statusCode(HttpCode._404, new ResponseBuilder()
              .description('User not found')
              .build())
            .statusCode(HttpCode._500, new ResponseBuilder()
              .description('Internal server error')
              .build())
            .build())
          .build())
        .put(new OperationBuilder()
          .summary('Update user')
          .description('Update user settings')
          .operationId('updateUser()')
          .deprecated(false)
          .responses(new ResponsesBuilder()
            .statusCode(HttpCode._200, new ResponseBuilder()
              .description('OK')
              .build())
            .statusCode(HttpCode._404, new ResponseBuilder()
              .description('User not found')
              .build())
            .statusCode(HttpCode._400, new ResponseBuilder()
              .description('Bad Request')
              .build())
            .build())
          .build())
        .build())

      .build()
  }
}
