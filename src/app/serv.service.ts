import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServService {

  constructor(private http:HttpClient) { }

  postData(data){
    console.log(data);
    this.http.post('http://localhost:3000', data)
    .subscribe( res => {
      console.log(res);
    },
    err => {
      console.log(err);
    })
    
  }
}
