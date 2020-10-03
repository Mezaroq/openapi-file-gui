import { Component, OnInit } from '@angular/core';
import {OpenApiService} from "../../service/open-api.service";
import {Observable} from "rxjs";
import {OpenApiObject} from "../../shared/interface/open-api/open-api-object";

@Component({
  selector: 'app-editor-detail',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.sass']
})
export class PreviewComponent implements OnInit {
  openApiDocs$: Observable<OpenApiObject>;

  constructor(private openApiService: OpenApiService) {
    this.openApiDocs$ = openApiService.observable();
  }

  ngOnInit(): void {
  }

}
