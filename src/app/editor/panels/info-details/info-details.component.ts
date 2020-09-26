import {Component, Input, OnInit} from '@angular/core';
import {InfoObject} from "../../shared/interface/open-api/info-object";
import {InfoService} from "../../shared/service/info.service";
import {ExternalDocsObject} from "../../shared/interface/open-api/external-docs-object";
import {ServerObject} from "../../shared/interface/open-api/server-object";
import {TagObject} from "../../shared/interface/open-api/tag-object";

@Component({
  selector: 'editor-info-details',
  templateUrl: './info-details.component.html',
  styleUrls: ['./info-details.component.sass']
})
export class InfoDetailsComponent implements OnInit {
  @Input() info: InfoObject;
  @Input() externalDocs: ExternalDocsObject;
  @Input() servers: ServerObject[];
  @Input() tags: TagObject[];

  constructor(public infoService: InfoService) {  }

  ngOnInit(): void {}
}
