import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {EditorComponent} from "./editor.component";
import {CanActivateEditorGuard} from "./guard/editor/can-activate-editor-guard.service";
import {PreviewComponent} from "./components/preview/preview.component";
import {InfoComponent} from "./components/info/info.component";
import {CreateApiDocsComponent} from "./components/create-api-docs/create-api-docs.component";
import {OpenApiDocsComponent} from "./components/open-api-docs/open-api-docs.component";
import {PathsComponent} from "./components/paths/paths.component";
import {ServersComponent} from "./components/servers/servers.component";
import {SecurityComponent} from "./components/security/security.component";
import {ExternalDocsComponent} from "./components/external-docs/external-docs.component";
import {TagsComponent} from "./components/tags/tags.component";
import {OperationComponent} from "./components/operation-editor/operation/operation.component";
import {OperationEditorComponent} from "./components/operation-editor/operation-editor.component";
import {ResponsesComponent} from "./components/operation-editor/responses/responses.component";
import {ParametersComponent} from "./components/operation-editor/parameters/parameters.component";
import {RequestBodyComponent} from "./components/operation-editor/request-body/request-body.component";
import {CanActivateOperationGuard} from "./guard/can-activate-operation.guard";

const routes: Routes = [
  {
    path: '', component: EditorComponent, canActivate: [CanActivateEditorGuard], children: [
      {path: '', component: PreviewComponent},
      {path: 'info', component: InfoComponent},
      {path: 'paths', component: PathsComponent},
      {path: 'servers', component: ServersComponent},
      {path: 'security', component: SecurityComponent},
      {path: 'tags', component: TagsComponent},
      {path: 'external-docs', component: ExternalDocsComponent}
    ]
  },
  {
    path: 'operation', component: OperationEditorComponent, canActivate: [CanActivateOperationGuard], children: [
      {path: ':type', component: OperationComponent},
      {path: ':type/responses', component: ResponsesComponent},
      {path: ':type/parameters', component: ParametersComponent},
      {path: ':type/request-body', component: RequestBodyComponent}
    ]
  },
  {path: 'create', component: CreateApiDocsComponent},
  {path: 'open', component: OpenApiDocsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
//@ts-ignore
export class EditorRoutingModule {
}
