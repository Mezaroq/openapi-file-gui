export interface ApiMock<T> {
  loadData(): void;
  getData(): T;
}
