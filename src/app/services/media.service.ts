import { Router } from '@angular/router';
//import { MediaService } from './media.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MediaService {
  private url = 'http://media.mw.metropolia.fi/wbma/';
  private user: any = { };

  constructor(private http: Http, private router: Router) { }

  setUser = (user) => {
    this.user = user;
  }

  logIn = () => {
    this.http.post(this.url + 'login', this.user).subscribe(
      (res) => {
        const json = res.json();
        this.user = json.user;
        this.user.token = json.token;
        // Save data to local storage
        localStorage.setItem('user', JSON.stringify(this.user));
        // Back to front
        this.router.navigate(['front']);
      },
      (error) => { console.log(error); }
      );
  }

  register = (user) => {
    this.http.post(this.url + 'users', user);
    this.user.username = user.username;
    this.user.password = user.password;
    this.logIn();
  }

}
