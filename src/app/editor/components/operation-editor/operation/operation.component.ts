import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PathsService} from "../../../service/paths.service";
import {OperationService} from "../../../service/operation.service";
import {OperationEditorService} from "../../../service/operation-editor.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {debounceTime} from "rxjs/operators";

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.sass']
})
export class OperationComponent implements OnInit {
  operationType: string;
  operationForm: FormGroup;
  availableOperations: string[];
  selectedPath: string;

  constructor(private activatedRoute: ActivatedRoute,
              private pathsService: PathsService,
              private operationService: OperationService,
              private operationEditorService: OperationEditorService,
              private router: Router) {
    this.operationType = activatedRoute.snapshot.paramMap.get('type');
    this.selectedPath = operationEditorService.getPathItemPath();
  }

  ngOnInit(): void {
    this.operationForm = new FormGroup({
      operation: new FormControl(null, this.operationType === 'new' ? Validators.required : null),
      summary: new FormControl(null, Validators.required),
      description: new FormControl(null),
      operationId: new FormControl(null),
      deprecated: new FormControl(false)
    });

    if (this.operationType === 'new')
      this.availableOperations = this.operationService.getAvailableOperations(
        this.pathsService.getPath(this.operationEditorService.getPathItemPath())
      );

    this.operationForm.patchValue(this.operationEditorService.getOperationObject());

    this.operationForm.valueChanges
      .pipe(debounceTime(400))
      .subscribe(values => {
        if (this.operationForm.valid) {
          const operation = this.operationEditorService.getOperationObject();
          values.summary ? operation.summary = values.summary : delete operation.summary;
          values.description ? operation.description = values.description : delete operation.description;
          values.operationId ? operation.operationId = values.operationId : delete operation.operationId;
          typeof values.deprecated === "boolean" ? operation.deprecated = values.deprecated : delete operation.deprecated;
          this.operationEditorService.updateOperationObject(operation);
        }
      });
  }

  onSaveAll() {
    if (this.operationForm.valid) {
      const editedPathItem = this.pathsService.getPath(this.operationEditorService.getPathItemPath());
      if (this.operationType === 'new') {
        editedPathItem[this.operationForm.value.operation] = this.operationEditorService.getEditedOperationAndClearEditedData();
      } else {
        editedPathItem[this.operationType] = this.operationEditorService.getEditedOperationAndClearEditedData();
      }
      //todo switch to /editor/paths
      this.router.navigate(['/editor/paths']);
    } else
      this.operationForm.markAllAsTouched();
  }
}
