import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-use',
  templateUrl: './data-use.component.html',
  styleUrls: ['./data-use.component.css']
})
export class DataUseComponent implements OnInit {
  myUrl:string = "https://5e8bb871be5500001689ec86.mockapi.io/api/v1/students";
  posts:Array<any> = [];
  id = "";
  name = "";
  avatar = "";
  updateData:boolean = false;

  constructor(private _http:HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }
  
  clearFormData(){
    this.id = "";
    this.name = "";
    this.avatar = "";
  }

  getData(){
      this._http.get(this.myUrl).subscribe((gdata:any)=>{
        this.posts = gdata;
      });
   }

   SendFormData(){
      let fData:any = {'name':this.name,'avatar':this.avatar};      
      this._http.post(this.myUrl,fData).subscribe((pRes)=>{        
        console.log(pRes);
        this.getData();
        this.clearFormData();
      }); 
    }
   
    editData(data:any){
      this.updateData = true;
      this.id = data.id;
      this.name = data.name;
      this.avatar = data.avatar;
    }

    modifyData(){     
      this.updateData = false;     
      let fData:any = {'name':this.name,'avatar':this.avatar};
      this._http.put(this.myUrl+"/"+this.id,fData).subscribe((pRes)=>{        
        console.log(pRes);
        this.getData();
        this.clearFormData();
      }); 
    }
    
    cancelData(){
      this.updateData = false; 
      this.getData();
      this.clearFormData();
    }

    deleteData(data:any){
      this._http.delete(this.myUrl+"/"+data.id,).subscribe((pRes)=>{        
        console.log(pRes);
        this.getData();
      }); 
    }
}
