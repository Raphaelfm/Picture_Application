import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})

export class PhotoListComponent implements OnInit, OnDestroy {
  photos: Photo[] = [];
  filter: string = '';
  debounce: Subject<string> = new Subject<string>();
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';

  //constructor(http: HttpClient){
    //const observable = http.get('http://localhost:3000/flavio/photos');
    //observable.subscribe();

    //http
    //  .get<Photo[]>('http://localhost:3000/flavio/photos')
    //  .subscribe(photos => this.photos = photos);
  //}

  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute
    ){
  }
  
  // ngOnInit(): void {
    
    //   const userName = this.activatedRoute.snapshot.params['userName'];
    
    //   this.photoService.listFromUser(userName)
    //     .subscribe(photos => this.photos = photos);
    // }
    
    ngOnInit(): void {
      this.userName = this.activatedRoute.snapshot.params['userName'];
      this.photos = this.activatedRoute.snapshot.data['photos'];
      this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.filter = filter);
    }

    ngOnDestroy(): void {
      this.debounce.unsubscribe();
    }

    load(){
      this.photoService.listFromPaginated(this.userName, ++this.currentPage)
        .subscribe(photos => {
          this.photos = this.photos.concat(photos);
          if(!photos.length) this.hasMore = false;
        });
    }
  }
