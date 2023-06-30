import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo/photo';
//import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  photos: Photo[] = [];
  filter: string = '';
  debounce: Subject<string> = new Subject<string>();

  //constructor(http: HttpClient){
    //const observable = http.get('http://localhost:3000/flavio/photos');
    //observable.subscribe();

    //http
    //  .get<Photo[]>('http://localhost:3000/flavio/photos')
    //  .subscribe(photos => this.photos = photos);
  //}

  constructor(
    //private photoService: PhotoService,
    private activatedRoute: ActivatedRoute
    ){
  }
  
  // ngOnInit(): void {
    
  //   const userName = this.activatedRoute.snapshot.params['userName'];

  //   this.photoService.listFromUser(userName)
  //     .subscribe(photos => this.photos = photos);
  // }

  ngOnInit(): void {
      this.photos = this.activatedRoute.snapshot.data['photos'];
  }
}
