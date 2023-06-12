import { Injectable } from '@angular/core';
import { IService } from './i-service';
import { Unidade } from '../model/unidade';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UnidadeService implements IService<Unidade> {

  constructor(private http: HttpClient) { }

  apiUrl: string = environment.API_URL + '/config/unidade/';

  get(termoBusca?: string | undefined): Observable<Unidade[]> {
    let url = this.apiUrl;
    if (termoBusca) {
      url += 'busca/' + termoBusca;
    }
    return this.http.get<Unidade[]>(url);
  }

  getById(id: number): Observable<Unidade> {
    return this.http.get<Unidade>(this.apiUrl + id);
  }

  insert(objeto: Unidade): Observable<Unidade> {
    return this.http.post<Unidade>(this.apiUrl, objeto);
  }

  update(objeto: Unidade): Observable<Unidade> {
    return this.http.put<Unidade>(this.apiUrl, objeto);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.apiUrl + id);
  }

}
