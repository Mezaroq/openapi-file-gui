export interface FormToObjectMapper<T> {
  mapObject(form: T): T;
}
