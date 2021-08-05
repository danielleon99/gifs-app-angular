import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private api_key = 'LTR9ibozk1h8wb0LMQWMVte89ejn5Z8u';
  private _history: string[] = [];

  public results: Gif[] = [];

  constructor(
    private readonly httpClient: HttpClient
  ) { 
    this._history = JSON.parse(localStorage.getItem('history')!) || [];
    this.results = JSON.parse(localStorage.getItem('results')!) || [];
  }

  get getHistory(): string[] {
    return [...this._history];
  }

  searchGifs(query: string) {

    this.setHistory(query);

    this.httpClient.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/trending?api_key=${this.api_key}&q=${query}&limit=10`)
      .subscribe((resp) => {
        this.results = resp.data

        localStorage.setItem('results', JSON.stringify(this.results))
      })

  }

  private setHistory(query: string) {

    query.trim().toLowerCase();

    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0, 10);

      localStorage.setItem('history', JSON.stringify(this._history))
    };
  }
}
