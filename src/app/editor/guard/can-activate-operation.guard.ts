import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {OperationEditorService} from "../service/operation-editor.service";

@Injectable({
  providedIn: 'root'
})
export class CanActivateOperationGuard implements CanActivate {

  constructor(private operationEditorService: OperationEditorService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!!this.operationEditorService.getPathItemPath() && !!this.operationEditorService.getOperationType())
      return true;
    else
      this.router.navigate(['/editor/paths'])
  }
}
