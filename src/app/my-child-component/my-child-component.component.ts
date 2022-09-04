import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-my-child-component',
  templateUrl: './my-child-component.component.html',
  styleUrls: ['./my-child-component.component.scss']
})
export class MyChildComponentComponent implements OnChanges,
OnInit,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy  {



  constructor() {}
// ‘MyChildComponent’ that implement all Life Cycle Hooks that we talked about and log a message to a browser console
  ngOnChanges(changes: SimpleChanges): void {
    console.log("this is the child onChanges method");
  }
  ngOnInit(): void {
    console.log("this is the child on init method");
  }

  ngDoCheck(): void {
    console.log("this is the child onDoCheck method");
  }
  ngAfterContentInit(): void {
    console.log("this is the child ngAfterContentInit method");
  }
  ngAfterContentChecked(): void {
    console.log("this is the child ngAfterContentChecked method");
  }
  ngAfterViewInit(): void {
    console.log("this is the child ngAfterViewInit method");
  }
  ngAfterViewChecked(): void {
    console.log("this is the child ngAfterViewChecked method");
  }
  ngOnDestroy(): void {
    console.log("this is the child onDestroy method");
  }

}
