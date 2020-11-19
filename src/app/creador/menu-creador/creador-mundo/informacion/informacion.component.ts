import { Component, OnInit } from '@angular/core';
import Axios from 'axios';
import { GaleryService } from 'src/app/services/galery.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {

  constructor(private galeryService:GaleryService ) { }

  image: File;

  ngOnInit(): void {
  }

  async saveImage(image){
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset','angular_uri');
    formData.append('cloud_name','nsdata');

    this.galeryService.setImage(formData).subscribe(
      response=>{
        console.log(response);
      }
    )
  }

}
