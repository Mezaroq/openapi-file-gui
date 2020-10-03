import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditorComponent} from './editor.component';
import {OpenApiService} from "./service/open-api.service";
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
import {HttpStatusCodeService} from "./service/http-status-code.service";
import {PreviewComponent} from './components/preview/preview.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {InfoComponent} from './components/info/info.component';
import {CreateApiDocsComponent} from './components/create-api-docs/create-api-docs.component';
import {OpenApiDocsComponent} from './components/open-api-docs/open-api-docs.component';
import {CanActivateEditorGuard} from "./guard/editor/can-activate-editor-guard.service";
import {InfoService} from "./service/info.service";
import {ContactService} from "./service/contact.service";
import {LicenseService} from "./service/license.service";
import {EditorRoutingModule} from "./editor-routing.module";
import {MatChipsModule} from "@angular/material/chips";
import {MatTreeModule} from "@angular/material/tree";
import {MatTabsModule} from "@angular/material/tabs";
import {PathsComponent} from './components/paths/paths.component';
import {ServersComponent} from './components/servers/servers.component';
import {SecurityComponent} from './components/security/security.component';
import {TagsComponent} from './components/tags/tags.component';
import {ExternalDocsComponent} from './components/external-docs/external-docs.component';
import {ExternalDocsService} from "./service/external-docs.service";
import {ServerService} from "./service/server.service";
import {ServerComponent} from './components/servers/server/server.component';
import {ServerVariableService} from "./service/server-variable.service";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {TagComponent} from './components/tags/tag/tag.component';
import {VariablesComponent} from './components/servers/server/variables/variables.component';
import {PathComponent} from './components/paths/path/path.component';
import {PathsService} from "./service/paths.service";
import {MatTooltipModule} from "@angular/material/tooltip";
import {OperationComponent} from './components/operation-editor/operation/operation.component';
import {OperationService} from "./service/operation.service";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {ResponsesComponent} from './components/operation-editor/responses/responses.component';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {OperationEditorComponent} from './components/operation-editor/operation-editor.component';
import {OperationEditorService} from "./service/operation-editor.service";
import {ParametersComponent} from './components/operation-editor/parameters/parameters.component';
import {RequestBodyComponent} from './components/operation-editor/request-body/request-body.component';
import {ResponseComponent} from './components/operation-editor/responses/response/response.component';
import {OpenApiMockService} from "./service/mock/open-api-mock.service";
import {InfoMockService} from "./service/mock/info-mock.service";
import {ServersMockService} from "./service/mock/servers-mock.service";
import {TagsMockService} from "./service/mock/tags-mock.service";
import {PathsMockService} from "./service/mock/paths-mock.service";
import {CanActivateOperationGuard} from "./guard/can-activate-operation.guard";

@NgModule({
  declarations: [
    EditorComponent,
    PreviewComponent,
    InfoComponent,
    CreateApiDocsComponent,
    OpenApiDocsComponent,
    PathsComponent,
    ServersComponent,
    SecurityComponent,
    TagsComponent,
    ExternalDocsComponent,
    ServerComponent,
    TagComponent,
    VariablesComponent,
    PathComponent,
    OperationComponent,
    ResponsesComponent,
    OperationEditorComponent,
    ParametersComponent,
    RequestBodyComponent,
    ResponseComponent
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
    MatSnackBarModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatAutocompleteModule
  ],
  providers: [
    OpenApiService,
    InfoService,
    ContactService,
    LicenseService,
    ExternalDocsService,
    ServerService,
    ServerVariableService,
    PathsService,
    OperationService,
    OperationEditorService,
    HttpStatusCodeService,
    CanActivateEditorGuard,
    CanActivateOperationGuard,
    OpenApiMockService,
    InfoMockService,
    ServersMockService,
    TagsMockService,
    PathsMockService,
    {provide: 'MOCK', useValue: true}
  ]
})
export class EditorModule {
}
