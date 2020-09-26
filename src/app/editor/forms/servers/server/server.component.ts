import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ServerObject} from "../../../shared/interface/open-api/server-object";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {MatChipInputEvent} from "@angular/material/chips";
import {ServerForms} from "../../../shared/model/server-forms";

@Component({
  selector: 'editor-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.sass']
})
export class ServerComponent implements OnInit, OnDestroy {
  @Input() server: ServerObject;
  @Input() index: number;
  @Input() forms: ServerForms;
  @Output() removed: EventEmitter<number> = new EventEmitter<number>();
  form: FormGroup;
  variablesForm: FormArray;
  separators: number[] = [ENTER, COMMA];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.prependForm();
  }

  ngOnDestroy(): void {
    this.forms.remove(this.index);
  }

  prependForm() {
    if (this.server) {
      this.variablesForm = this.fb.array([]);

      if (this.server.variables)
        for (let variable in this.server.variables) {
          const enums = this.fb.array([]);
          if (this.server.variables[variable].enum)
            for (let _enum of this.server.variables[variable].enum)
              enums.push(new FormControl(_enum));

          this.variablesForm.push(
            this.fb.group({
              name: variable,
              default: [this.server.variables[variable].default, Validators.required],
              description: this.server.variables[variable].description,
              enums: enums
            })
          )
        }

      this.form = this.fb.group({
        url: [this.server.url, Validators.required],
        description: this.server.description,
        variables: this.variablesForm
      });
      this.enableFormUpdater();
    }
  }

  enableFormUpdater() {
    this.forms.add(this.index, this.form.valid ? this.form.getRawValue() : null);

    this.form.valueChanges.subscribe(value =>
      this.forms.add(this.index, this.form.valid ? value : null)
    )
  }

  getVariables(url: string): string[] {
    const match: string[] = url.match(/{[a-zA-Z0-9_]+}/g);
    return !!match ? match.map(variable => variable.substring(1, variable.length - 1)) : [];
  }

  addEnum($event: MatChipInputEvent, enums: FormArray | any) {
    const value = $event.value;
    const input = $event.input;
    if (value) {
      enums.push(new FormControl(value));
      input.value = '';
    }
  }

  removeEnum(index: number, enums: FormArray | any) {
    enums.removeAt(index);
  }

  modifyVariables($event: any) {
    if ($event === '') {
      this.variablesForm.clear();
      return;
    }
    const variables = this.getVariables($event);
    for (let [i, v] of this.variablesForm.value.entries()) {
      if (!variables.includes(v.name))
        this.variablesForm.removeAt(i);
      else
        variables.splice(variables.indexOf(v.name), 1)
    }
    for (let variable of variables) {
      this.variablesForm.push(this.fb.group({
        name: variable,
        default: [null, Validators.required],
        description: null,
        enums: this.fb.array([])
      }))
    }
  }
}
