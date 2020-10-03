import {SchemaObject} from "./schema-object";
import {ReferenceObject} from "./reference-object";
import {EncodingObject} from "./encoding-object";
import {ExampleObject} from "./example-object";
import {ApiMap} from "../api-map";

export interface MediaTypeObject {
  schema: SchemaObject | ReferenceObject,
  example?: any,
  examples?: ApiMap<ExampleObject | ReferenceObject>,
  encoding?: ApiMap<EncodingObject>
}
