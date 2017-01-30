import { MediaService } from './../services/media.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private username = '';
  private password1 = '';
  private password2 = '';
  private email = '';
  constructor(private mediaService: MediaService) { }

  ngOnInit() {
  }
  register = () => {
    if (this.password1 === this.password2) {
      const firstAt: number = this.email.indexOf('@');
      const lastAt: number = this.email.lastIndexOf('@');
      if ((firstAt === lastAt)
      && (firstAt !== 0)
      && (lastAt !== this.email.length)
      && (this.email.substr(firstAt).includes('.'))
      && (this.email.lastIndexOf('.') !== this.email.length))  {
      console.log('Create user');
      const user = {
        username: this.username,
        password: this.password1,
        email: this.email
      };
      this.mediaService.register(user);
      } else { alert('Invalid email'); }
    } else { alert('Passwords don\'t match'); }
  }
}
