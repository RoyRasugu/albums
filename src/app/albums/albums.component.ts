import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
users:any;
  constructor(
    private photoService: PhotosService,
  ) { }

  ngOnInit(): void {
    this.users = this.photoService.getusers()
  }

}
