import { Injectable } from '@angular/core';

 @Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }

  showWelcomeMsg(msg:any){
    alert("Welcome to my "+ msg +" Page.");
  }
  
}
