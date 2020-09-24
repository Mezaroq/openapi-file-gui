import {SchemaObject} from "../../api-schema/interface/schema-object";
import {ReferenceObject} from "../../api-reference/interface/reference-object";
import {EncodingObject} from "../../api-encoding/interface/encoding-object";
import {ExampleObject} from "../../api-example/interface/example-object";

export interface MediaTypeObject {
  schema: SchemaObject | ReferenceObject,
  example?: any,
  examples?: Map<string, ExampleObject | ReferenceObject>,
  encoding?: Map<string, EncodingObject>
}
