import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserModel } from 'src/model/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: UserModel

  constructor() { 
    this.updateLine();
    setInterval(()=>{
      this.updateLine();
    }, 500);
  }

  updateLine(){
    this.user = environment.user;
  }

  ngOnInit(): void {
  }

}
