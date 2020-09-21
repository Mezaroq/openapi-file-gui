import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditorComponent} from './editor.component';
import {RouterModule, Routes} from "@angular/router";
import {OpenApiService} from "./shared/api-base/service/open-api.service";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatSelectModule} from "@angular/material/select";
import {MatDividerModule} from "@angular/material/divider";
import {UtilService} from "./shared/util/util.service";
import {HttpClientModule} from "@angular/common/http";
import {HttpStatusCodeService} from "./shared/http-status-code/http-status-code.service";
import {EditorDetailComponent} from './editor-detail/editor-detail.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {InfoComponent} from './info/info.component';
import {CreateApiDocsComponent} from './create-api-docs/create-api-docs.component';
import {OpenApiDocsComponent} from './open-api-docs/open-api-docs.component';
import {CanActivateEditorGuard} from "./guard/editor/can-activate-editor-guard.service";
import {InfoService} from "./shared/api-info/service/info.service";
import {ContactService} from "./shared/api-contact/service/contact.service";
import {LicenseService} from "./shared/api-license/service/license.service";

const routes: Routes = [
  {
    path: '', component: EditorComponent, canActivate: [CanActivateEditorGuard], children: [
      {path: '', component: EditorDetailComponent},
      {path: 'info', component: InfoComponent}
    ]
  },
  {path: 'create', component: CreateApiDocsComponent},
  {path: 'open', component: OpenApiDocsComponent}
];

@NgModule({
  declarations: [
    EditorComponent,
    EditorDetailComponent,
    InfoComponent,
    CreateApiDocsComponent,
    OpenApiDocsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    MatSelectModule,
    MatDividerModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [
    UtilService,
    OpenApiService,
    InfoService,
    ContactService,
    LicenseService,
    HttpStatusCodeService,
    CanActivateEditorGuard
  ]
})
export class EditorModule {}
