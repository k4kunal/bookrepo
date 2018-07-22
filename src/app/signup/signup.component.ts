import { Component, OnInit } from '@angular/core';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private serv : ServService) { }

  ngOnInit() {
  }

  submit = function(user){
    this.serv.postData(user);
  }


}
