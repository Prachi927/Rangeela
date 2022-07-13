import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing-ass2',
  templateUrl: './routing-ass2.component.html',
  styleUrls: ['./routing-ass2.component.css']
})
export class RoutingAss2Component implements OnInit {
  num1:number = 0;
  num2:number = 0;
  total:number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

}
