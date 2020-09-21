import {Component, OnInit} from '@angular/core';
import {OpenApiVersion} from "../shared/api-base/interface/open-api-version.enum";
import {FormControl, Validators} from "@angular/forms";
import {OpenApiService} from "../shared/api-base/service/open-api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-api-docs',
  templateUrl: './create-api-docs.component.html',
  styleUrls: ['./create-api-docs.component.sass']
})
export class CreateApiDocsComponent implements OnInit {
  versions: OpenApiVersion[];
  version: FormControl;


  constructor(private openApiService: OpenApiService, private router: Router) {
    this.versions = Object.values(OpenApiVersion);
    this.version = new FormControl(null, Validators.required);
  }

  ngOnInit(): void {
  }

  createApi() {
    this.openApiService.createApi(this.version.value);
    this.router.navigate(['/editor'])
  }
}
