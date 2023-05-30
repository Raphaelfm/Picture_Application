import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Photo } from './photos/photo/photo';
import { PhotoService } from './photos/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  photos: Photo[] = [];
  
  //constructor(http: HttpClient){
    //const observable = http.get('http://localhost:3000/flavio/photos');
    //observable.subscribe();

    //http
    //  .get<Photo[]>('http://localhost:3000/flavio/photos')
    //  .subscribe(photos => this.photos = photos);
  //}

  constructor(private photoService: PhotoService){
  }
  
  ngOnInit(): void {
    
    this.photoService.listFromUser('flavio')
      .subscribe(photos => this.photos = photos);
  }
}
