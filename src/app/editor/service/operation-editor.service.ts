import {Injectable} from '@angular/core';
import {OperationObject} from "../shared/interface/open-api/operation-object";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable()
//@ts-ignore
export class OperationEditorService {
  private editedPath: string;
  private editedOperation: OperationObject;
  private editedOperation$: BehaviorSubject<OperationObject>;
  private editedOperationType: string;

  constructor() {
  }

  setOperationObject(type: string, operation: OperationObject) {
    this.editedOperationType = type;
    this.editedOperation = operation;
    this.editedOperation$ = new BehaviorSubject<OperationObject>(operation);
  }

  setPathItemPath(path: string) {
    this.editedPath = path;
  }

  getPathItemPath(): string {
    return this.editedPath;
  }

  getOperationType(): string {
    return this.editedOperationType;
  }

  getOperationObject(): OperationObject {
    return JSON.parse(JSON.stringify(this.editedOperation));
  }

  getEditedOperationAndClearEditedData() {
    const operation = Object.assign({}, this.editedOperation);
    this.editedOperation$.unsubscribe();
    delete this.editedOperationType;
    delete this.editedOperation;
    delete this.editedOperation$;
    return operation;
  }

  updateOperationObject(operation: OperationObject): void {
    this.editedOperation = operation;
    this.next();
  }

  getEditedOperationObservable(): Observable<OperationObject> {
    return this.editedOperation$.asObservable();
  }

  private next() {
    this.editedOperation$.next(this.editedOperation);
  }
}
