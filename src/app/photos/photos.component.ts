import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
infos:any;
userId:any;
  constructor(
    private photoservice: PhotosService,
    private activatedroute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.activatedroute.snapshot.params.userId;
    this.infos = this.photoservice.getinfos(this.userId);
  }

}
