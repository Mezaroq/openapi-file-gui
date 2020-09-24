import {Component, Input, OnInit} from '@angular/core';
import {InfoObject} from "../../shared/api-info/interface/info-object";
import {InfoService} from "../../shared/api-info/service/info.service";
import {ExternalDocsObject} from "../../shared/api-external-documentation/interface/external-docs-object";

@Component({
  selector: 'editor-info-details',
  templateUrl: './info-details.component.html',
  styleUrls: ['./info-details.component.sass']
})
export class InfoDetailsComponent implements OnInit {
  @Input() info: InfoObject;
  @Input() externalDocs: ExternalDocsObject;

  constructor(public infoService: InfoService) {  }

  ngOnInit(): void {}
}
