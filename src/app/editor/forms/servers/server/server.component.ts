import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'editor-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.sass']
})
export class ServerComponent implements OnInit {
  @Input() server: FormGroup;
  @Input() index: number;
  @Output() removed: EventEmitter<number> = new EventEmitter<number>();
  variables: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.variables = this.server.get('variables') as FormGroup;
  }
}
