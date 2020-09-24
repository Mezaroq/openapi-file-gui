import {Component, Input, OnInit} from '@angular/core';
import {ServerObject} from "../../shared/api-server/interface/server-object";
import {ApiMap} from "../../shared/interface/api-map";

@Component({
  selector: 'editor-servers-details',
  templateUrl: './servers-details.component.html',
  styleUrls: ['./servers-details.component.sass']
})
export class ServersDetailsComponent implements OnInit {
  @Input() servers: ApiMap<ServerObject>;
  serversArray: ServerObject[] = [];

  constructor() {
  }

  ngOnInit(): void {
    if (this.servers)
      Object.values(this.servers).forEach((v) => {
        this.serversArray.push(v);
      })
  }
}
