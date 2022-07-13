import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-routing-ass3',
  templateUrl: './routing-ass3.component.html',
  styleUrls: ['./routing-ass3.component.css']
})
export class RoutingAss3Component implements OnInit {
  users:any;
  test:string = 'lightblue';
  constructor(private _http:HttpClient) { }

  ngOnInit(): void {
  }

  userData(){
    this._http.get('https://5e8bb871be5500001689ec86.mockapi.io/api/v1/employees').subscribe((data:any) => {
      this.users = data;
    })
  }
}
