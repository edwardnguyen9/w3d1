import { Router } from '@angular/router';
//import { MediaService } from './media.service';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MediaService {
  private url = 'http://media.mw.metropolia.fi/wbma/';
  private token = JSON.parse(localStorage.getItem('user')).token;

  constructor(private http: Http, private router: Router) { }

  upload = (file, data) => {
    // const headers = new Headers({'x-access-token': token });
    // const option = new RequestOptions({ headers: headers});
    console.log(this.token);
    const formData = new FormData();
    formData.append('file', file.files[0]);
    formData.append('title', data.title);
    formData.append('description', data.description);
    return this.http.post(this.url + 'media?token=' + this.token, formData).subscribe(
      (res) => {
        console.log(res.json());
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
