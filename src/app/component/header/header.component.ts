import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/service.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  dataPortfolio: any;
  

  constructor(private datosPortfolio:DatosService ) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.dataPortfolio=data;
    })
  }

}
