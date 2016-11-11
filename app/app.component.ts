import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent implements OnInit {

  first: string
  last: string

  name: string
  legalName: string

  search: string

  personForm: FormGroup
  organizationForm: FormGroup
  searchForm: FormGroup

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.personForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl()
    })

    this.organizationForm = this.formBuilder.group({
      name:['', Validators.required],
      legalName: ''
    })

    this.searchForm = new FormGroup({
      search: new FormControl()
    })

    this.searchForm.controls["search"].valueChanges.subscribe(value => {
      this.search = value;
    })
  }

  onSavePerson() {
    this.first = this.personForm.value.firstName
    this.last = this.personForm.value.lastName
  }

  onSaveOrganization() {
    this.name = this.organizationForm.value.name
    this.legalName = this.organizationForm.value.legalName
  }

}
