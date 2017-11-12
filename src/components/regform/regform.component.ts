import {Component} from '@angular/core';
import {NgForm} from  '@angular/forms';

interface User {
  login: string;
  password: string;
  username: string;
}

@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html'
})
export class RegFormComponent extends NgForm {

  protected register() {
    console.log('Registered user');
  }

}
