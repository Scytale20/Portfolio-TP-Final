import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/service.service';

@Component({
  selector: 'app-info-personal',
  templateUrl: './info-personal.component.html',
  styleUrls: ['./info-personal.component.css']
})
export class InfoPersonalComponent implements OnInit {
  acerca_de:any;
  constructor(private datosPortfolio: DatosService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data=>{
      this.acerca_de=data.acerca_de
    })
  }

}
