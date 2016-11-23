import { Component, ViewChild } from '@angular/core';
import {InputOutputComponent} from './test/inputoutput.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hola mundo!';
  @ViewChild('myControl') private miControl:InputOutputComponent; 

  private onMyClick(a){
    console.log(a);
  }
 
  private onOtherClick(){
    console.log("ViewChild: ", this.miControl.getValue());
  }
}
