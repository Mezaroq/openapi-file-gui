import {Injectable} from '@angular/core';
import {PathItemObject} from "../shared/interface/open-api/path-item-object";
import {OperationObject} from "../shared/interface/open-api/operation-object";
import {ResponseObject} from "../shared/interface/open-api/response-object";
import {ResponsesObject} from "../shared/interface/open-api/responses-object";

@Injectable()
export class OperationService {
  operationsType = [
    'get',
    'post',
    'put',
    'delete',
    'head',
    'options',
    'patch',
    'trace'
  ];

  constructor() {
  }

  getAvailableOperations(path: PathItemObject): string[] {
    const includedOperations = this.getOperations(path);
    return this.operationsType.filter(
      operation => !includedOperations.has(operation)
    )
  }

  getOperations(path: PathItemObject): Map<string, OperationObject> {
    return Object.entries(path)
      .filter(obj => this.operationsType.includes(obj[0]))
      .reduce((prev, curr) => prev.set(curr[0], curr[1]), new Map<string, OperationObject>())
  }

  getOperation(path: PathItemObject, operation: string): OperationObject | any {
    return this.getOperations(path).get(operation);
  }

  getOperationResponses(operation: OperationObject): Map<string, ResponseObject> {
    if (!!operation.responses)
      return new Map(Object.entries(operation.responses));
    return new Map<string, ResponseObject>();
  }

  mapResponses(responsesMap: Map<string, ResponseObject>): ResponsesObject {
    const responses: ResponsesObject = {};
    for (let [k,v] of responsesMap.entries()) {
      responses[k] = v;
    }
    return responses;
  }
}
