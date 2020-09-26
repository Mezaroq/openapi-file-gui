import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditorComponent} from './editor.component';
import {OpenApiService} from "./shared/service/open-api.service";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatSelectModule} from "@angular/material/select";
import {MatDividerModule} from "@angular/material/divider";
import {HttpClientModule} from "@angular/common/http";
import {HttpStatusCodeService} from "./shared/service/http-status-code.service";
import {PreviewComponent} from './panels/preview/preview.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {InfoComponent} from './forms/info/info.component';
import {CreateApiDocsComponent} from './create-api-docs/create-api-docs.component';
import {OpenApiDocsComponent} from './open-api-docs/open-api-docs.component';
import {CanActivateEditorGuard} from "./guard/editor/can-activate-editor-guard.service";
import {InfoService} from "./shared/service/info.service";
import {ContactService} from "./shared/service/contact.service";
import {LicenseService} from "./shared/service/license.service";
import {InfoDetailsComponent} from './panels/info-details/info-details.component';
import {EditorRoutingModule} from "./editor-routing.module";
import {MatChipsModule} from "@angular/material/chips";
import {MatTreeModule} from "@angular/material/tree";
import {MatTabsModule} from "@angular/material/tabs";
import { PathsComponent } from './forms/paths/paths.component';
import { ServersComponent } from './forms/servers/servers.component';
import { ComponentsComponent } from './forms/components/components.component';
import { SecurityComponent } from './forms/security/security.component';
import { TagsComponent } from './forms/tags/tags.component';
import { ExternalDocsComponent } from './forms/external-docs/external-docs.component';
import {ExternalDocsService} from "./shared/service/external-docs.service";
import {ServerService} from "./shared/service/server.service";
import { ServerComponent } from './forms/servers/server/server.component';
import {ServerVariableService} from "./shared/service/server-variable.service";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { TagComponent } from './forms/tags/tag/tag.component';

@NgModule({
  declarations: [
    EditorComponent,
    PreviewComponent,
    InfoComponent,
    CreateApiDocsComponent,
    OpenApiDocsComponent,
    InfoDetailsComponent,
    PathsComponent,
    ServersComponent,
    ComponentsComponent,
    SecurityComponent,
    TagsComponent,
    ExternalDocsComponent,
    ServerComponent,
    TagComponent
  ],
  imports: [
    CommonModule,
    EditorRoutingModule,
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
    MatListModule,
    MatChipsModule,
    MatTreeModule,
    MatTabsModule,
    MatSnackBarModule
  ],
  providers: [
    OpenApiService,
    InfoService,
    ContactService,
    LicenseService,
    ExternalDocsService,
    ServerService,
    ServerVariableService,
    HttpStatusCodeService,
    CanActivateEditorGuard
  ]
})
export class EditorModule {}
