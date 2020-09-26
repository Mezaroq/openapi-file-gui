import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {EditorComponent} from "./editor.component";
import {CanActivateEditorGuard} from "./guard/editor/can-activate-editor-guard.service";
import {PreviewComponent} from "./panels/preview/preview.component";
import {InfoComponent} from "./forms/info/info.component";
import {CreateApiDocsComponent} from "./create-api-docs/create-api-docs.component";
import {OpenApiDocsComponent} from "./open-api-docs/open-api-docs.component";
import {PathsComponent} from "./forms/paths/paths.component";
import {ServersComponent} from "./forms/servers/servers.component";
import {ComponentsComponent} from "./forms/components/components.component";
import {SecurityComponent} from "./forms/security/security.component";
import {ExternalDocsComponent} from "./forms/external-docs/external-docs.component";
import {TagsComponent} from "./forms/tags/tags.component";

const routes: Routes = [
  {
    path: '', component: EditorComponent, canActivate: [CanActivateEditorGuard], children: [
      {path: '', component: PreviewComponent},
      {path: 'info', component: InfoComponent},
      {path: 'paths', component: PathsComponent},
      {path: 'servers', component: ServersComponent},
      {path: 'components', component: ComponentsComponent},
      {path: 'security', component: SecurityComponent},
      {path: 'tags', component: TagsComponent},
      {path: 'external-docs', component: ExternalDocsComponent},
    ]
  },
  {path: 'create', component: CreateApiDocsComponent},
  {path: 'open', component: OpenApiDocsComponent},
  {path: 'test', component: TagsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
//@ts-ignore
export class EditorRoutingModule {}
