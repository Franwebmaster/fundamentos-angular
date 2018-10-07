import { Component } from '@angular/core';

import { PhotoService } from './photos/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  photos: Object[] = []

  constructor(photoService: PhotoService){
    photoService.listFromUser('flavio').subscribe(
      photo => {
        console.log(photo[0].id);
        this.photos = photo
        console.log(photo);
      }
    )
  }

  

}
