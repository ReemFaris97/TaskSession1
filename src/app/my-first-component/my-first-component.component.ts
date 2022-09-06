import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrls: ['./my-first-component.component.scss']
})
export class MyFirstComponentComponent {   /// must have a implementation

  @Input() name1:string = ""; // ! > not Null /or/ string=""  // decorate the property with @Input()
  @Output() name2 =  new EventEmitter<string>();   //constructor

  btnViewScnd(){
    this.name2.emit(this.name1);
  }
  constructor() { 
    // console.log(this.name2);
    
  }


}
