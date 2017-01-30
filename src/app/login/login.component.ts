import { MediaService } from './../services/media.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private username = '';
  private password = '';
  constructor(private mediaService: MediaService) { }

  ngOnInit() {
  }

  logIn = () => {
    const user = {
      username: this.username,
      password: this.password
    };
    this.mediaService.setUser(user);
    this.mediaService.logIn();
  }

}
