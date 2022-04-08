import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/service.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos_list:any;
  constructor(private datosPortfolio: DatosService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.proyectos_list=data.proyectos
      console.log(data.proyectos)
    });
  }

}
