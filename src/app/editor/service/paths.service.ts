import {Injectable} from '@angular/core';
import {PathsObject} from "../shared/interface/open-api/paths-object";
import {PathItemObject} from "../shared/interface/open-api/path-item-object";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable()
export class PathsService {
  private pathsMap: Map<string, PathItemObject | any>;
  private paths$: BehaviorSubject<Map<string, PathItemObject | any>>;

  constructor() {
  }

  isEditMode() {
    return !!this.pathsMap;
  }

  setPaths(paths: PathsObject) {
    this.pathsMap = PathsService.mapPaths(paths);
    this.paths$ = new BehaviorSubject<Map<string, PathItemObject | any>>(this.pathsMap);
  }

  addPath(path: string, pathItem: PathItemObject) {
    this.pathsMap.set(path, pathItem);
    this.next();
  }

  removePath(path: string) {
    this.pathsMap.delete(path);
    this.next();
  }

  updatePath(path: string, pathItem: PathItemObject) {
    this.pathsMap.set(path, pathItem);
    this.next();
  }

  next() {
    this.paths$.next(this.pathsMap);
  }

  getPaths(): PathsObject {
    const pathsObject = {};
    for (let [k, v] of this.pathsMap.entries()) {
      pathsObject[k] = v;
    }
    this.paths$.complete();
    delete this.paths$;
    delete this.pathsMap;
    return pathsObject;
  }

  getPath(path: string) {
    return this.pathsMap.get(path);
  }

  getPathsObservable(): Observable<Map<string, PathItemObject | any>> {
    return this.paths$.asObservable();
  }

  private static mapPaths(paths: PathsObject): Map<string, PathItemObject> {
    if (!!paths)
      return Object.entries(paths)
        .reduce((previousValue, currentValue) => previousValue.set(currentValue[0], currentValue[1]), new Map<string, PathItemObject>());
    return new Map<string, PathItemObject>();
  }
}
