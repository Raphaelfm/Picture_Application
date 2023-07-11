import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

import { PhotoModule } from "./photo/photo.module";
import { PhotFormModule } from "./photo-form/photo-form.module";
import { PhotoListModule } from "./photo-list/photo-list.module";

@NgModule({
    imports: [
        PhotoModule,
        PhotFormModule,
        PhotoListModule
    ]
})

export class PhotosModule {}