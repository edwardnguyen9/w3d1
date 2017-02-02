import { LoginService } from './../services/login.service';
import { Router } from '@angular/router';
import { MediaService } from './../services/media.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {
  private image: any = [];
  constructor(private mediaService: MediaService, private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    if (!this.loginService.logged) this.router.navigate(['login']);
    this.mediaService.getMedia().subscribe(
      res => {
        this.image = res;
      }
    );
  }

}
