import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatChipInputEvent} from "@angular/material/chips";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {Observable} from "rxjs";

interface VariablesMap {
  name: string,
  group: FormGroup | AbstractControl
}

@Component({
  selector: 'editor-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.sass']
})
export class VariablesComponent implements OnInit {
  @Input() variables: FormGroup;
  @Input() urlChange$: Observable<string>;
  variablesArray: VariablesMap[];
  separators: number[] = [ENTER, COMMA];

  constructor() {
  }

  ngOnInit(): void {
    this.urlChange$.subscribe(url => {
      this.updateVariables(this.getVariables(url));
      this.updateArray();
    });
    this.updateArray();
  }

  updateVariables(variables: string[]) {
    Object.keys(this.variables.value).forEach(variable => {
      if (!variables.includes(variable)) {
        this.variables.removeControl(variable);
      }
    });

    variables.forEach(newVariable => {
      if (!Object.keys(this.variables.value).includes(newVariable)) {
        this.variables.setControl(newVariable, new FormGroup({
          default: new FormControl(null, Validators.required),
          description: new FormControl(null),
          enum: new FormArray([])
        }));
      }
    })
  }

  updateArray() {
    this.variablesArray = [];
    for (let [name, group] of Object.entries(this.variables.controls)) {
      this.variablesArray.push({name, group})
    }
  }

  getVariables(url: string): string[] {
    const match: string[] = url.match(/{[a-zA-Z0-9_]+}/g);
    return !!match ? match.map(variable => variable.substring(1, variable.length - 1)) : [];
  }

  addEnum($event: MatChipInputEvent, enums: FormArray | any) {
    if ($event.value) {
      enums.push(new FormControl($event.value));
      $event.input.value = '';
    }
  }

  removeEnum(index: number, enums: FormArray | any) {
    enums.removeAt(index);
  }
}
