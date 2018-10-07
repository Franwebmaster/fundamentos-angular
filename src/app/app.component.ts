import { Component, OnInit } from '@angular/core';

import { PhotoService } from './photos/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  photos: Object[] = []
  
  constructor(private photoService: PhotoService){}
  
  ngOnInit(): void {
      this.photoService.listFromUser('flavio').subscribe(
        photo => {
          console.log(photo[0].id);
          this.photos = photo
          console.log(photo);
        }
      )
    }
}
