import { Router } from '@angular/router';
import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private user: any = {};
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('user') !== null) {
      this.loginService.setUser(JSON.parse(localStorage.getItem('user')));
      this.loginService.logged = true;
      this.router.navigate(['front']);
    } else if (this.loginService.getUser().password !== undefined) {
      this.loginService.logIn();
    }
  }

  logIn = (user: any) => {
    this.loginService.setUser(user);
    this.loginService.logIn();
  }

}
