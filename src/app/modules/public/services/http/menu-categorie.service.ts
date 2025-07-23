import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../../environments/local';
import { Observable } from 'rxjs';
import ResponseModel from '../../../../core/models/response/base/response.model';
import CategoryModel from '../../../../core/models/navbar/category/category.model';

@Injectable({
  providedIn: 'root'
})
export class MenuCategorieService {
  private _http: HttpClient = inject(HttpClient);
  private readonly _baseURL = environment.apiGateway;

  public getMenuCategories(): Observable<ResponseModel<CategoryModel[]>> {
    return this._http.get(`${this._baseURL}/product/category`);
  }
}
