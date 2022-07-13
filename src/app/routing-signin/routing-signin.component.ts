import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-routing-signin',
  templateUrl: './routing-signin.component.html',
  styleUrls: ['./routing-signin.component.css']
})
export class RoutingSigninComponent implements OnInit {

  constructor(private myMsg:MyServiceService) { }

  ngOnInit(): void {
    this.myMsg.showWelcomeMsg("SignIn");
  }

  SentFormData(uData:any){

  }
}
