import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing-ass4',
  templateUrl: './routing-ass4.component.html',
  styleUrls: ['./routing-ass4.component.css']
})
export class RoutingAss4Component implements OnInit {
  students:Array<string> = ["Prachi","Dipesh","Peenal","Pooja","Bhoomi","Zalak","Vishal","Grishma","Harsh","Neel","Kenna","Jatin"];
  selectedTab:string = "";
  test:string = 'LightBlue';
  
  constructor() { }

  ngOnInit(): void {
  }

  getStudents(student:any){
    if(this.students.indexOf(student) < 4){      
      return "Friends";
    }
    else{
      return "Others";
    } 
  }
}
