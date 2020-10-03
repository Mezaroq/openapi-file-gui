export interface Builder<T> {
  build(): T
}

export abstract class BuilderValidator {
  static checkArray(array: Array<any>): boolean {
    return array && array.length !== 0;
  }

  static checkObject(object: Object): boolean {
    return object && Object.keys(object).length !== 0;
  }

  static checkValue(value: number | string | boolean | null | undefined): boolean {
    return !!value;
  }
}
