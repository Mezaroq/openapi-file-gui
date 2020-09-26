import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpCode} from "../enum/http-code.enum";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable()
export class HttpStatusCodeService {
  private codes$: Observable<Map<number, string>>;

  constructor(httpClient: HttpClient) {
    this.codes$ = httpClient.get<Map<number, string>>('assets/files/http_status_codes.json')
      .pipe(
        map(json => new Map<number, string>(json))
      );
  }

  getCodes(): Observable<number[]> {
    return this.codes$.pipe(
      map(map => Array.from(map.keys()))
    )
  }

  getDescriptions(): Observable<string[]> {
    return this.codes$.pipe(
      map(map => Array.from(map.values()))
    )
  }

  getDescription(code: HttpCode | number): Observable<string> {
    return this.codes$.pipe(
      map(map => map.get(code))
    )
  }
}
