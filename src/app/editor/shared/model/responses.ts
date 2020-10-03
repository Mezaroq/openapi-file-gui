import {Builder, BuilderValidator} from "../interface/builder";
import {ResponsesObject} from "../interface/open-api/responses-object";
import {ResponseObject} from "../interface/open-api/response-object";
import {HttpCode} from "../enum/http-code.enum";

export class ResponsesBuilder implements Builder<ResponsesObject> {
  private readonly responses: ResponsesObject | any;

  constructor() {
    this.responses = {};
  }

  default(_default: ResponseObject): ResponsesBuilder {
    if (BuilderValidator.checkObject(_default)) this.responses.default = _default;
    return this;
  }

  statusCode(code: HttpCode, response: ResponseObject): ResponsesBuilder {
    if (code && BuilderValidator.checkObject(response)) this.responses[code] = response;
    return this;
  }

  build(): ResponsesObject {
    return this.responses;
  }
}
