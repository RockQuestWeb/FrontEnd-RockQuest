import { Component } from '@angular/core';
import { GaleryService } from './services/galery.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ GaleryService ]
})
export class AppComponent {
  title = 'front';
}
