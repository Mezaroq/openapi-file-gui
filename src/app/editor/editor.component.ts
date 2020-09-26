import {Component, OnDestroy, OnInit} from '@angular/core';
import {OpenApiService} from "./shared/service/open-api.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.sass']
})
export class EditorComponent implements OnInit, OnDestroy {
  documentation: Observable<any>;

  constructor(openApiService: OpenApiService) {
    this.documentation = openApiService.observable();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
