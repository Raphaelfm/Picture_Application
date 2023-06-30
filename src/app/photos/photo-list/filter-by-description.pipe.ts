import { Pipe, PipeTransform } from "@angular/core";
import { Photo } from "../photo/photo";

@Pipe({ name: 'filterByDescription' })
export class FilterByDescription implements PipeTransform{

    transform(photos: Photo[], descritpionQuery: string) {
        descritpionQuery = descritpionQuery
            .trim()
            .toLowerCase();

            if(descritpionQuery){
                return photos.filter(photo => 
                    photo.description.toLowerCase().includes(descritpionQuery)
                );
            } else{
                return photos;
            }
    }

}