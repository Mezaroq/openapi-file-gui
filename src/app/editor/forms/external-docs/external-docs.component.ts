import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OpenApiService} from "../../shared/api-base/service/open-api.service";
import {Router} from "@angular/router";
import {SubscriptionLike} from "rxjs";

@Component({
  selector: 'app-external-docs',
  templateUrl: './external-docs.component.html',
  styleUrls: ['./external-docs.component.sass']
})
export class ExternalDocsComponent implements OnInit, OnDestroy {
  externalDocsForm: FormGroup;
  private openApiSub: SubscriptionLike;

  constructor(fb: FormBuilder, private openApiService: OpenApiService, private router: Router) {
    this.externalDocsForm = fb.group({
      url: [null, Validators.required],
      description: null
    })
  }

  ngOnInit(): void {
    this.openApiSub = this.openApiService.observable().subscribe(api => {
        if (api.externalDocs)
          this.externalDocsForm.patchValue(api.externalDocs);
      }
    )
  }

  onSubmit(): void {
    if (this.externalDocsForm.valid) {
      this.openApiService.updateExternalDocs(this.externalDocsForm.getRawValue());
      this.router.navigate(['editor']);
    }
  }

  ngOnDestroy(): void {
    this.openApiSub.unsubscribe();
  }

  onDelete(): void {
    this.openApiService.removeExternalDocs();
    this.router.navigate(['editor']);
  }
}
