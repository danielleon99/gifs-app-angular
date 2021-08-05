import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-show-gifs',
  templateUrl: './show-gifs.component.html',
  styles: [
  ]
})
export class ShowGifsComponent {

  constructor(
    private readonly gifsService: GifsService
  ) { }

  get gifs() {
    return this.gifsService.results;
  }

}
