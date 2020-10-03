import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {OpenApiService} from "../../service/open-api.service";

@Injectable()
export class CanActivateEditorGuard implements CanActivate {
  constructor(private openApiService: OpenApiService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    if (this.openApiService.isCreated())
      return true;
    return this.router.parseUrl('/editor/create')
  }
}
