import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { GroupModel } from 'src/model/group.model';
import { GroupService } from '../services/group.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  group: GroupModel;

  title = new FormControl('', [Validators.required]);

  usuario = new FormControl('', [Validators.required]);
  
  programa = new FormControl('', [Validators.required]);

  getErrorMessageTitulo() {
    return this.title.hasError('required') ? 'componente obligatorio' : '';
  }

  getErrorMessageUsuario() {
    return this.usuario.hasError('required') ? 'componente obligatorio' : '';
  }

  getErrorMessagePrograma() {
    return this.programa.hasError('required') ? 'selecionar un componente' : '';
  }
  /*_____________________________________________________________________________________________________________ */

  constructor(private groupService: GroupService) { 
    this.group = new GroupModel();
  }

  setGroup(){
    console.log("Grupo")
    this.groupService.setGroup(this.group).subscribe(
      (res)=>{
        console.log(res);
      }
    );
  }

  ngOnInit(): void {
  }

}
