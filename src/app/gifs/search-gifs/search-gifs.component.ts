import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search-gifs',
  templateUrl: './search-gifs.component.html',
  styles: [
  ]
})
export class SearchGifsComponent {

  @ViewChild('txtSearch')
  termSearch!: ElementRef<HTMLInputElement>;

  constructor(
    private readonly gifsService: GifsService
  ) { }

  Search() {
    this.gifsService.searchGifs( this.termSearch.nativeElement.value)
    this.termSearch.nativeElement.value = '';
  }

}
