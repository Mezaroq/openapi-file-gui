import { Injectable } from '@angular/core';
import {TagObject} from "../../shared/interface/open-api/tag-object";
import {ApiMock} from "../../shared/interface/apiMock";
import {TagBuilder} from "../../shared/model/tag";

@Injectable({
  providedIn: 'root'
})
export class TagsMockService implements ApiMock<TagObject[]>{
  private tags: TagObject[];

  constructor() { }

  getData(): TagObject[] {
    this.loadData();
    return this.tags;
  }

  loadData(): void {
    this.tags = [
      new TagBuilder()
        .name('users')
        .description('User data')
        .build(),
      new TagBuilder()
        .name('books')
        .description('Online library')
        .build(),
      new TagBuilder()
        .name('animals')
        .description('Everything about animals')
        .build()
    ]
  }
}
