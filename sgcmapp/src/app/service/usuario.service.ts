import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import { IService } from './i-service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService implements IService<Usuario> {

  constructor(private http: HttpClient) { }

  apiUrl: string = environment.API_URL + '/config/usuario/';

  get(termoBusca?: string | undefined): Observable<Usuario[]> {
    let url = this.apiUrl;
    if (termoBusca) {
      url += 'busca/' + termoBusca;
    }
    return this.http.get<Usuario[]>(url);
  }

  getById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(this.apiUrl + id);
  }

  insert(objeto: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, objeto);
  }

  update(objeto: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(this.apiUrl, objeto);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.apiUrl + id);
  }
  
}
