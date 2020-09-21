import { Component, OnInit } from '@angular/core';
import {OpenApiService} from "../shared/api-base/service/open-api.service";
import {Observable} from "rxjs";
import {OpenApiObject} from "../shared/api-base/interface/open-api-object";

@Component({
  selector: 'app-editor-detail',
  templateUrl: './editor-detail.component.html',
  styleUrls: ['./editor-detail.component.sass']
})
export class EditorDetailComponent implements OnInit {
  openApiDocs$: Observable<OpenApiObject>;

  constructor(private openApiService: OpenApiService) {
    this.openApiDocs$ = openApiService.observable();
  }

  ngOnInit(): void {
  }

}
