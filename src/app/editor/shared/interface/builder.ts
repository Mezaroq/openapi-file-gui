export interface Builder<T> {
  checkArray?(array: Array<any>): boolean,
  checkObject?(object: Object): boolean
  build(): T
}

export abstract class BuilderValidator {
  checkArray(array: Array<any>): boolean {
    return array && array.length !== 0;
  }

  checkObject(object: Object): boolean {
    return object && Object.keys(object).length !== 0;
  }

  checkValue(value: number | string | boolean | null | undefined): boolean {
    return !!value;
  }
}
