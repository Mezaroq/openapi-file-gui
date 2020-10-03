import {Builder} from "../interface/builder";
import {ResponseObject} from "../interface/open-api/response-object";

export class ResponseBuilder implements Builder<ResponseObject> {
  private readonly response: ResponseObject | any;

  constructor() {
    this.response = {};
  }

  description(description: string): ResponseBuilder {
    if (description) this.response.description = description;
    return this;
  }

  //todo this is bad, make it latter
  // content(type: ContentType, content: MediaTypeObject) {
  //   if (BuilderValidator.checkObject(content)) this.response.content[type] = content;
  // }

  build(): ResponseObject {
    return this.response;
  }

}
