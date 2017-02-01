import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }
  register = (user: any) => {
    this.loginService.setUser(user);
    this.loginService.register();
  }
}
