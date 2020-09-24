import {PathItemObject} from "../../api-path-item/path-item-object";

export interface CallbackObject {
  [expression: string]: PathItemObject //key is {expression}
}
