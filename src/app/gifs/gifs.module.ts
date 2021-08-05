import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { SearchGifsComponent } from './search-gifs/search-gifs.component';
import { ShowGifsComponent } from './show-gifs/show-gifs.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GifsPageComponent,
    SearchGifsComponent,
    ShowGifsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GifsPageComponent
  ]
})
export class GifsModule { }
