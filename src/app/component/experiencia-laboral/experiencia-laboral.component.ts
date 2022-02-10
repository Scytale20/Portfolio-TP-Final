import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/service.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {
  experiencia_list:any;
  constructor(private datosPortfolio: DatosService ) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.experiencia_list=data.experiencia
      console.log(data.experiencia)
  });
}

}
