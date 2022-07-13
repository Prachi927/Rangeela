import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing-ass1',
  templateUrl: './routing-ass1.component.html',
  styleUrls: ['./routing-ass1.component.css']
})
export class RoutingAss1Component implements OnInit {
  uName:string = "";
  uCart:number = 1;
  
  showArr1:Array<string> = [];
  showArr2:Array<string> = [];

  constructor() { }

  ngOnInit(): void {
  }
  addItem(uItemName:string, uItemCart:number){
    if(uItemCart == 1){
      this.showArr1.push(uItemName);
    }
    else if(uItemCart == 2){
      this.showArr2.push(uItemName);
    }
    else{
      alert("The Cart No is incorrect!");
    }
  }
  removeItem1(uItemName:string){
    this.showArr1.splice(this.showArr1.indexOf(uItemName),1);    
  }
  removeItem2(uItemName:string){
    this.showArr2.splice(this.showArr2.indexOf(uItemName),1);    
  }
}
