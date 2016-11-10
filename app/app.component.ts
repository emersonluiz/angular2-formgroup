import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {

  first: string
  last: string

  personForm: FormGroup

  constructor() {
    this.personForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl()
    })
  }

  onSave() {
    this.first = this.personForm.value.firstName
    this.last = this.personForm.value.lastName
  }

}
