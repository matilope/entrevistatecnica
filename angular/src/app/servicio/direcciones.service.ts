import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DireccionesService {

  constructor(private _http: HttpClient) { }

  getDirecciones(direccion: string): Observable<any> {
    return this._http.get<any>(`http://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=${direccion}`);
  }
}
