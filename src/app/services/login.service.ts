import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
  logged: Boolean = false;
  private url: String = 'http://media.mw.metropolia.fi/wbma/';
  private user: any = {};
  constructor(private http: Http, private router: Router) { }

  setUser = (user) => {
    this.user = user;
  }
  getUser = () => {
    return this.user;
  }
  logIn = () => {
    return this.http.post(this.url + 'login', this.user).subscribe(
      (res) => {
        const data = res.json();
        this.user = data.user;
        this.user.token = data.token;
        console.log(this.user);
        localStorage.setItem('user', JSON.stringify(this.user));
        this.logged = true;
        this.router.navigate(['front']);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  register = () => {
    return this.http.post(this.url + 'users/', this.user).subscribe(
      (res) => {
        console.log(res.json());
        this.router.navigate(['login']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
