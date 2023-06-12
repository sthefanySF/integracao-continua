import { Injectable } from '@angular/core';
import { IService } from './i-service';
import { Atendimento } from '../model/atendimento';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AtendimentoService implements IService<Atendimento> {

  constructor(private http: HttpClient) { }

  apiUrl: string = environment.API_URL + "/atendimento/";

  get(termoBusca?: string | undefined): Observable<Atendimento[]> {
    let url = this.apiUrl;
    if (termoBusca) {
      url += "busca/" + termoBusca;
    }
    return this.http.get<Atendimento[]>(url);
  }

  getById(id: number): Observable<Atendimento> {
    return this.http.get<Atendimento>(this.apiUrl + id);
  }

  insert(objeto: Atendimento): Observable<Atendimento> {
    return this.http.post<Atendimento>(this.apiUrl, objeto);
  }

  update(objeto: Atendimento): Observable<Atendimento> {
    return this.http.put<Atendimento>(this.apiUrl, objeto);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.apiUrl + id);
  }

  updateStatus(id: number): Observable<Atendimento> {
    return this.http.put<Atendimento>(this.apiUrl + 'status/' + id, null);
  }

  getHorariosOcupados(profissional_id: number, data: string): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl + 'horarios/' + profissional_id + '/' + data);
  }
  
}
