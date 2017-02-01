import { MediaService } from './../services/media.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(private mediaService: MediaService) { }

  ngOnInit() {
  }
  upload = (evt, value) => {
    this.mediaService.upload(evt.target[0], value);
    // console.log(evt.target[0].files[0]);
    // console.log(value);
  }
}
