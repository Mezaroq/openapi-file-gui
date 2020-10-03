import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpCode} from "../shared/enum/http-code.enum";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable()
export class HttpStatusCodeService {
  private codes$: Observable<Map<string, string>>;

  constructor(httpClient: HttpClient) {
    this.codes$ = httpClient.get<Map<string, string>>('assets/files/http_status_codes.json')
      .pipe(
        map(json => new Map<string, string>(json))
      );
  }

  getFullCodes(): Observable<[string, string][]> {
    return this.codes$.pipe(
      map(codes => Array.from(codes))
    )
  }

  getCodes(): Observable<string[]> {
    return this.codes$.pipe(
      map(map => Array.from(map.keys()))
    )
  }

  getDescriptions(): Observable<string[]> {
    return this.codes$.pipe(
      map(map => Array.from(map.values()))
    )
  }

  getDescription(code: HttpCode | string | number): Observable<string> {
    return this.codes$.pipe(
      map(map => map.get(code as string))
    )
  }
}
