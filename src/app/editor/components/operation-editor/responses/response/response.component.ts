import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ResponseObject} from "../../../../shared/interface/open-api/response-object";

@Component({
  selector: 'operation-editor-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.sass']
})
export class ResponseComponent implements OnInit {
  @Input() response: [string, ResponseObject];
  @Output() responseChanged: EventEmitter<{ response: string, isDeleted: boolean }>
    = new EventEmitter<{ response: string, isDeleted: boolean }>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onDelete() {
    this.responseChanged.emit({response: this.response[0], isDeleted: true});
  }

  onEdit() {
    this.responseChanged.emit({response: this.response[0], isDeleted: false});
  }
}
