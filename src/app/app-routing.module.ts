import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoaderComponent} from "./loader/loader.component";

const routes: Routes = [
  {path: '', component: LoaderComponent},
  {path: 'editor', loadChildren: () => import('./editor/editor.module').then(m => m.EditorModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
