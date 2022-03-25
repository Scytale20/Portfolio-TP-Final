import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/service.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion_list:any;
  constructor(private datosPortfolio: DatosService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe( data => {
      this.educacion_list=data.educacion
      
    })
  }

}
