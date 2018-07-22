import { Component, OnInit } from '@angular/core';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private serv : ServService) { }

  ngOnInit() {
  }
  
  login = function(user){
    this.serv.postData(user);
  }

}
