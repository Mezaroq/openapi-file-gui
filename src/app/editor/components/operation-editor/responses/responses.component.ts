import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpStatusCodeService} from "../../../service/http-status-code.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {ResponseObject} from "../../../shared/interface/open-api/response-object";
import {FormControl, FormGroup} from "@angular/forms";
import {ResponseBuilder} from "../../../shared/model/response";
import {ActivatedRoute} from "@angular/router";
import {OperationEditorService} from "../../../service/operation-editor.service";
import {OperationService} from "../../../service/operation.service";
import {OperationObject} from "../../../shared/interface/open-api/operation-object";

@Component({
  selector: 'operation-editor-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.sass']
})
export class ResponsesComponent implements OnInit, OnDestroy {
  availableResponses: Observable<[string, [string, string][]][]>;
  responseForm: FormGroup;
  responses: [string, ResponseObject][];
  responseMap: Map<string, ResponseObject> = new Map<string, ResponseObject>();
  operationObject: OperationObject;
  selectedPath: string;
  operationType: string;

  constructor(private httpStatusCodesService: HttpStatusCodeService,
              private activatedRoute: ActivatedRoute,
              private operationService: OperationService,
              private operationEditorService: OperationEditorService) {
    this.operationType = activatedRoute.snapshot.paramMap.get('type');
    this.selectedPath = operationEditorService.getPathItemPath();
    this.initAvailableResponses();
  }

  ngOnDestroy(): void {
    if (this.responseMap.size !== 0) {
      this.operationObject.responses = this.operationService.mapResponses(this.responseMap);
      this.operationEditorService.updateOperationObject(this.operationObject);
    }
  }

  initAvailableResponses() {
    this.availableResponses = this.httpStatusCodesService.getFullCodes().pipe(
      map(codes => [
          ['Default', [['default', 'Default response']]],
          ['100', codes.filter(code => parseInt(code[0]) < 200)],
          ['200', codes.filter(code => parseInt(code[0]) >= 200 && parseInt(code[0]) < 300)],
          ['300', codes.filter(code => parseInt(code[0]) >= 300 && parseInt(code[0]) < 400)],
          ['400', codes.filter(code => parseInt(code[0]) >= 400 && parseInt(code[0]) < 500)],
          ['500', codes.filter(code => parseInt(code[0]) >= 500)]
        ]
      )
    )
  }

  ngOnInit(): void {
    this.responseForm = new FormGroup({
      response: new FormControl(null),
      description: new FormControl(null),
      responseSchema: new FormControl(null),
      responseExample: new FormControl(null)
    });

    this.operationObject = this.operationEditorService.getOperationObject();
    this.responseMap = this.operationService.getOperationResponses(this.operationObject);
    this.updateResponses();
  }

  updateResponses() {
    this.responses = Array.from(this.responseMap).sort();
  }

  onResponseChanged($event: { response: string; isDeleted: boolean }) {
    if ($event.isDeleted) {
      this.responseMap.delete($event.response);
      this.updateResponses();
    } else {
      this.responseForm.controls['response'].setValue($event.response);
      this.responseForm.patchValue(this.responseMap.get($event.response));
    }
  }

  onResponseModify() {
    if (this.responseForm.valid) {
      const values = this.responseForm.value;
      this.responseMap.set(values.response, new ResponseBuilder().description(values.description).build());
      this.responseForm.reset();
      this.updateResponses();
    }
  }
}
