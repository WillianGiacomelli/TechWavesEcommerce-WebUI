import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../../environments/local';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuCategorieService {
  private _http: HttpClient = inject(HttpClient);
  private readonly _baseURL = environment.apiGateway;

  public getMenuCategories(): Observable<any> {
    return this._http.get(`${this._baseURL}/product/category`);
  }
}
