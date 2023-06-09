import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-sobre-mi',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
    
educacion: Educacion[] = [];
  constructor(private educacionS: EducacionService, private tokeService: TokenService) { }
isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if(this.tokeService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  
  }
cargarEducacion(): void{
  this.educacionS.lista().subscribe(
    data => {
      this.educacion = data;
    }
  )
}
delete(id?: number){
  if (id != undefined){
    this.educacionS.delete(id).subscribe(
      data => {
        this.cargarEducacion();
      }, err => {
        alert("No fue posible eliminar");
      }
    
    )
  }
}
}
