import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-second-component',
  templateUrl: './my-second-component.component.html',
  styleUrls: ['./my-second-component.component.scss']
})
export class MySecondComponentComponent implements OnInit {
  @Input() finalName:string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
