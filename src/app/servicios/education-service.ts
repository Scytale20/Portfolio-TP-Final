import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import {Educacion } from '../../assets/data/Educacion';
import { datosUrl } from '../../assets/data/config/config'


@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private http:HttpClient) {}
    obtenerDatosEducation(): Observable<Educacion[]>{
      return this.http.get<any>(datosUrl.baseUrl + 'educacion');
    }
   
}
