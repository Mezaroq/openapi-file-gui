import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {InfoObject} from "../shared/api-info/interface/info-object";
import {ContactObject} from "../shared/api-contact/interface/contact-object";
import {distinctUntilChanged} from "rxjs/operators";
import {LicenseObject} from "../shared/api-license/interface/license-object";
import {MatExpansionPanel} from "@angular/material/expansion";
import {OpenApiService} from "../shared/api-base/service/open-api.service";
import {SubscriptionLike} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'editor-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.sass']
})
export class InfoComponent implements OnInit, AfterViewInit, OnDestroy {
  infoForm: FormGroup;
  info: InfoObject;
  openApiSub: SubscriptionLike;
  @ViewChild('contact') contact: MatExpansionPanel;
  @ViewChild('license') license: MatExpansionPanel;
  contactReq: boolean = false;
  licenseReq: boolean = false;

  constructor(private fb: FormBuilder, private openApiService: OpenApiService, private router: Router) {
    this.initForm();
  }

  ngOnInit(): void {
    this.openApiSub = this.openApiService.observable().subscribe(api => {
      this.info = api.info;
    });

    if (!!this.info)
      this.infoForm.patchValue(this.info);
  }

  ngAfterViewInit(): void {
    this.infoForm.get('contact').valueChanges.pipe(
      distinctUntilChanged((prev: ContactObject, curr: ContactObject) => {
        return prev.email === curr.email && prev.name === curr.name && prev.url === curr.url;
      })
    ).subscribe((contact: ContactObject) => {
      if (contact.email || contact.url || contact.name) {
        this.infoForm.get(['contact', 'email']).setValidators(Validators.required);
        this.contactReq = true;
      } else {
        this.infoForm.get(['contact', 'email']).clearValidators();
        this.contactReq = false;
      }
      this.infoForm.get(['contact', 'email']).updateValueAndValidity();
    });

    this.infoForm.get('license').valueChanges.pipe(
      distinctUntilChanged((prev: LicenseObject, curr: LicenseObject) => {
        return prev.name === curr.name && prev.url === curr.url;
      })
    ).subscribe((contact: LicenseObject) => {
      if (contact.url || contact.name) {
        this.infoForm.get(['license', 'name']).setValidators(Validators.required);
        this.licenseReq = true;
      } else {
        this.infoForm.get(['license', 'name']).clearValidators();
        this.licenseReq = false;
      }
      this.infoForm.get(['license', 'name']).updateValueAndValidity();
    })
  }

  initForm() {
    this.infoForm = this.fb.group({
      title: [null, Validators.required],
      version: [null, [Validators.required, Validators.pattern(/[0-9]\.[0-9]\.[0-9]/)]],
      description: [null],
      termsOfService: null,
      contact: this.fb.group({
        email: null,
        name: null,
        url: null
      }),
      license: this.fb.group({
        name: null,
        url: null
      })
    });
  }

  onSubmit() {
    if (this.infoForm.valid) {
      this.openApiService.updateInfo(this.infoForm.getRawValue());
      this.router.navigate(['/editor'])
    } else {
      if (this.contactReq)
        this.contact.open();
      if (this.licenseReq)
        this.license.open();
    }
  }

  ngOnDestroy(): void {
    this.openApiSub.unsubscribe();
  }
}
