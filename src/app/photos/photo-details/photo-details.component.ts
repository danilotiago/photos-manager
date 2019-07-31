import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params.photoId;
    console.log(id);
  }

}
