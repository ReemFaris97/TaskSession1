import { Component, OnInit, Input } from '@angular/core';    // OnInit >>>> is a interface --- doesn't have any implementation

@Component({  //decorator
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'TaskSession1';


  currentItem = '';
  newItem: string = ''

  btnOnClick(input1:string){
    console.log(input1);
    this.currentItem=input1;
  }

  showOutputFromChild(event: string) {
    console.log(event);
    this.newItem = event;
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
