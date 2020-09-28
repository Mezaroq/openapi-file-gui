import {PathItemObject} from "./path-item-object";

export interface CallbackObject {
  [expression: string]: PathItemObject //key is {expression}
}
