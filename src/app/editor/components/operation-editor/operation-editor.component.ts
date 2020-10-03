import { Component, OnInit } from '@angular/core';
import {OperationEditorService} from "../../service/operation-editor.service";

@Component({
  selector: 'app-operation-editor',
  templateUrl: './operation-editor.component.html',
  styleUrls: ['./operation-editor.component.sass']
})
export class OperationEditorComponent implements OnInit {
  operation: string;
  constructor(private operationEditorService: OperationEditorService) {
    this.operation = operationEditorService.getOperationType();
  }

  ngOnInit(): void {
  }

}
