import { Router } from '@angular/router';
//import { MediaService } from './media.service';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class MediaService {
  private url = 'http://media.mw.metropolia.fi/wbma/';
  private token;

  constructor(private http: Http, private router: Router) {
    this.token = JSON.parse(localStorage.getItem('user')).token;
   }

   getMedia = () => {
     return this.http.get(this.url + 'media').map(res => res.json());
   }

  upload = (data) => {
    // const headers = new Headers({'x-access-token': token });
    // const option = new RequestOptions({ headers: headers});
    console.log(this.token);
    return this.http.post(this.url + 'media?token=' + this.token, data);
  }
}
