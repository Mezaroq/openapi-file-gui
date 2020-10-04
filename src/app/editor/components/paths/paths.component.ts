import {Component, OnInit} from '@angular/core';
import {PathItemObject} from "../../shared/interface/open-api/path-item-object";
import {Observable} from "rxjs";
import {OpenApiService} from "../../service/open-api.service";
import {PathsService} from "../../service/paths.service";
import {PathItemBuilder} from "../../shared/model/path-item";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {map} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-paths',
  templateUrl: './paths.component.html',
  styleUrls: ['./paths.component.sass']
})
export class PathsComponent implements OnInit {
  paths$: Observable<[string, PathItemObject][]>;
  pathForm: FormGroup = new FormGroup({});

  constructor(private openApiService: OpenApiService,
              private pathsService: PathsService,
              private fb: FormBuilder,
              private router: Router) {
    this.pathForm = fb.group({
      path: [null, Validators.required],
      description: null
    });
  }

  ngOnInit(): void {
    const paths = this.openApiService.getPaths();

    if (!this.pathsService.isEditMode())
      this.pathsService.setPaths(paths);
    this.paths$ = this.pathsService.getPathsObservable().pipe(
      map((map) => Array.from(map.entries()))
    );
  }

  onPathAdd() {
    if (this.pathForm.valid) {
      const path = this.pathForm.getRawValue();
      this.pathsService.addPath(`/${path['path']}`,
        new PathItemBuilder()
          .description(path['description'])
          .build()
      );
      this.pathForm.reset();
      this.pathForm.controls['path'].setErrors(null);
    }
  }

  onSave() {
    //todo validation
    this.openApiService.updatePaths(this.pathsService.getPaths());
    this.router.navigate(['/editor']);
  }
}
