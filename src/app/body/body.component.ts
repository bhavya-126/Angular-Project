import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  obj = {
      name:'',
      onNameChange(event: any){
        this.name=event.target.value
      },
      keyEvent(){
        console.log('key event');
        
      }
    }
  obj2 = {
    name:''
  }  
}
