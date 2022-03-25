import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/service.service'; 

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills_list:any;
  constructor(private datosPortfolio: DatosService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.skills_list=data.skills      
    })
  }

}
