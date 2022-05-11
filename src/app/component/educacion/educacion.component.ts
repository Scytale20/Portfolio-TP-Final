import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatosService } from 'src/app/servicios/service.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  
  educacion_list:any;
  educationForm:FormGroup;
  
  constructor(private datosPortfolio: DatosService, private formbuilder:FormBuilder ) {
    this.educationForm = this.formbuilder.group({
      id:[''], 
      institucion:['', [Validators.required]],
      estudios:['', [Validators.required]],
      img: ['', [Validators.required]], 
      
    })
   }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe( data => {
      this.educacion_list=data.educacion
      
    })
  }

  onSubmit(){
    return console.log(this.educationForm.value)
  }

}
