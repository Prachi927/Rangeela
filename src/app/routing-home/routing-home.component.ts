import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing-home',
  templateUrl: './routing-home.component.html',
  styleUrls: ['./routing-home.component.css']
})
export class RoutingHomeComponent implements OnInit {
  uInput:string="";  
  names:Array<string> = ["ahmedabad","gandhingar","surat","kosamba","prantij"];
  
  constructor() { }

  ngOnInit(): void {
  }
   removeItem(item: string){
   this.names.splice(this.names.indexOf(item),1);
 }
  addList(){
    this.names.push(this.uInput)
  }
}
