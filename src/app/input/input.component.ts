import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  // @Input() control: FormControl;
  @Input() control: any;  //alterado para any para não dar erro
  @Input() label: string = '';

  constructor() { }

  ngOnInit(): void {}

  showErrors() {
    const { dirty, touched, errors} = this.control;
    return dirty && touched && errors;
  }

}
