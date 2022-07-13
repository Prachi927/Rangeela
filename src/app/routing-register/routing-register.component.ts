import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-routing-register',
  templateUrl: './routing-register.component.html',
  styleUrls: ['./routing-register.component.css']
})
export class RoutingRegisterComponent implements OnInit {

  constructor(private myMsg:MyServiceService) { }

  ngOnInit(): void {
    // this.myMsg.showWelcomeMsg("Register");
  }

  SentFormData(uData:any){

  }
}
