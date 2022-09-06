import { Component, Input, OnInit, OnChanges , SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-my-second-component',
  templateUrl: './my-second-component.component.html',
  styleUrls: ['./my-second-component.component.scss']
})
export class MySecondComponentComponent implements OnInit , OnChanges{
  @Input() finalName:string = "";
  constructor() { }

  ngOnInit(): void {
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log('/////////////////Heeeelloooooooooooooooooooooooooooooo' + this.finalName);
  }

}
