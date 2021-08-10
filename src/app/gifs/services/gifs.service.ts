import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SeachGifsReponse } from 'src/app/shared/interfaces/searchGifsReponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey: string = 'sTxFy5PL8vVzH21aFAGCkzd871IAQfLN';
  private _historial: string[] = [];

  public resultados: Gif[] = [];
  url: string = 'https://api.giphy.com/v1/gifs';
  api: string = '/search'

  get historial() {
    return [... this._historial];
  }

  constructor(private http: HttpClient) {
    if (localStorage.getItem('historial')) {
      this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    }
    if (localStorage.getItem('resultados')) {
      this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
    }
  }
  buscarGifs(query: string = '') {
    console.log('aqui');

    query = query.trim().toLocaleLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this.getData(query)
      this._historial = this._historial.splice(0, 10)
      console.log(this._historial);
      localStorage.setItem('historial', JSON.stringify(this.historial))
    } else {
      this.getData(query)

    }

  }
  getData(query: string) {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', 10)
      .set('q', query);

    this.http.get<SeachGifsReponse>(this.url + this.api, {params})
      .subscribe((resp: SeachGifsReponse) => {
        console.log(resp.data);
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      })
  }


}
