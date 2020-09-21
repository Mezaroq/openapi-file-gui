import {Component, OnDestroy, OnInit} from '@angular/core';
import {OpenApiService} from "./shared/api-base/service/open-api.service";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.sass']
})
export class EditorComponent implements OnInit, OnDestroy {
  documentation: Observable<any>;

  constructor(openApiService: OpenApiService) {
    this.documentation = openApiService.observable().pipe(tap(value => console.log(value)));
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
