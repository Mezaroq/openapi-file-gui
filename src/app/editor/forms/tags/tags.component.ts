import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OpenApiService} from "../../shared/service/open-api.service";
import {TagObject} from "../../shared/interface/open-api/tag-object";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {TagService} from "../../shared/service/tag.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.sass']
})
export class TagsComponent implements OnInit {
  tagsForm: FormGroup;
  tagsArray: FormArray = new FormArray([]);
  tags: Observable<TagObject[]>;

  constructor(private openApiService: OpenApiService,
              private fb: FormBuilder,
              private tagService: TagService,
              private router: Router) {
    this.tagsForm = this.fb.group({
      tags: this.tagsArray
    });

    this.tags = this.openApiService.observable().pipe(
      map(api => api.tags ? api.tags : [])
    );

    this.tags.subscribe(tags => {
      for (let tag of tags) {
        const tagGroup = this.fb.group({
          name: [tag?.name, Validators.required],
          description: tag?.description
        });
        this.tagsArray.push(tagGroup);
      }
    })
  }

  ngOnInit(): void {
  }

  onSave() {
    if (this.tagsArray.invalid)
      this.tagsArray.markAllAsTouched();
    else {
      this.openApiService.updateTags(this.tagService.mapObject(this.tagsArray.getRawValue()));
      this.router.navigate(['/editor']);
    }
  }

  addTag() {
    this.tagsArray.push(this.fb.group({
      name: [null, Validators.required],
      description: null
    }))
  }

  removeTag($event: number) {
    this.tagsArray.removeAt($event);
  }
}
