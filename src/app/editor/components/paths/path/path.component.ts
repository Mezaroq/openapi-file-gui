import {Component, Input, OnInit} from '@angular/core';
import {PathItemObject} from "../../../shared/interface/open-api/path-item-object";
import {PathsService} from "../../../service/paths.service";
import {OperationObject} from "../../../shared/interface/open-api/operation-object";
import {Router} from "@angular/router";
import {OperationService} from "../../../service/operation.service";
import {OperationEditorService} from "../../../service/operation-editor.service";
import {OperationBuilder} from "../../../shared/model/operation";

enum PathMap {
  PATH,
  ITEM
}

@Component({
  selector: 'editor-path',
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.sass']
})
export class PathComponent implements OnInit {
  @Input() pathItem: [string, PathItemObject];
  operations: [string, OperationObject][];
  pathMap = PathMap;

  constructor(private pathsService: PathsService,
              private router: Router,
              private operationService: OperationService,
              private operationEditorService: OperationEditorService) {
  }

  ngOnInit(): void {
    this.operations = Array.from(this.operationService.getOperations(this.pathItem[PathMap.ITEM]));
  }

  onPathDelete() {
    this.pathsService.removePath(this.pathItem[PathMap.PATH]);
  }

  onOperationRemove(operation: string) {
    delete this.pathItem[PathMap.ITEM][operation];
    this.pathsService.updatePath(this.pathItem[PathMap.PATH], this.pathItem[PathMap.ITEM]);
  }

  onOperationEdit(operation: [string, OperationObject]) {
    this.operationEditorService.setPathItemPath(this.pathItem[PathMap.PATH]);
    this.operationEditorService.setOperationObject(operation[0], operation[1]);
    this.router.navigate([`editor/operation/${operation[0]}`]);
  }

  onAddOperation() {
    this.operationEditorService.setPathItemPath(this.pathItem[PathMap.PATH]);
    this.operationEditorService.setOperationObject('new', new OperationBuilder().build());
    this.router.navigate([`editor/operation/new`]);
  }
}
