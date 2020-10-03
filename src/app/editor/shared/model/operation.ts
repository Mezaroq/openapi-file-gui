import {OperationObject} from "../interface/open-api/operation-object";
import {Builder, BuilderValidator} from "../interface/builder";
import {ResponsesObject} from "../interface/open-api/responses-object";
import {ParameterObject} from "../interface/open-api/parameter-object";
import {RequestBodyObject} from "../interface/open-api/request-body-object";
import {SecurityRequirementObject} from "../interface/open-api/security-requirement-object";


export class OperationBuilder implements Builder<OperationObject> {
  private readonly operation: OperationObject | any;

  constructor() {
    this.operation = {};
  }

  summary(summary: string): OperationBuilder {
    if (summary) this.operation.summary = summary;
    return this;
  }

  description(description: string): OperationBuilder {
    if (description) this.operation.description = description;
    return this;
  }

  responses(responses: ResponsesObject): OperationBuilder {
    if (BuilderValidator.checkObject(responses)) this.operation.responses = responses;
    return this;
  }
  tags(tags: string[]): OperationBuilder {
    if (BuilderValidator.checkArray(tags)) this.operation.tags = tags;
    return this;
  }
  operationId(operationId: string): OperationBuilder {
    if (operationId) this.operation.operationId = operationId;
    return this;
  }
  parameters(parameters: ParameterObject[]): OperationBuilder {
    if (BuilderValidator.checkObject(parameters)) this.operation.parameters = parameters;
    return this;
  }
  requestBody(requestBody: RequestBodyObject): OperationBuilder {
    if (BuilderValidator.checkObject(requestBody)) this.operation.requestBody = requestBody;
    return this;
  }
  deprecated(deprecated: boolean): OperationBuilder {
    if (typeof deprecated === "boolean") this.operation.deprecated = deprecated;
    return this;
  }
  security(security: SecurityRequirementObject[]): OperationBuilder {
    if (BuilderValidator.checkObject(security)) this.operation.security = security;
    return this;
  }

  build(): OperationObject {
    return this.operation;
  }

}
