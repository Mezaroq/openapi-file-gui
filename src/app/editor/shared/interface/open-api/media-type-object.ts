import {SchemaObject} from "./schema-object";
import {ReferenceObject} from "./reference-object";
import {EncodingObject} from "./encoding-object";
import {ExampleObject} from "./example-object";

export interface MediaTypeObject {
  schema: SchemaObject | ReferenceObject,
  example?: any,
  examples?: Map<string, ExampleObject | ReferenceObject>,
  encoding?: Map<string, EncodingObject>
}
