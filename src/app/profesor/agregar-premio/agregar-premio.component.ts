import { Component, OnInit } from '@angular/core';
import { PrizeService } from 'src/app/services/prize.service';
import { PrizeModel } from 'src/model/prize.model';

@Component({
  selector: 'app-agregar-premio',
  templateUrl: './agregar-premio.component.html',
  styleUrls: ['./agregar-premio.component.css']
})
export class AgregarPremioComponent implements OnInit {

  rewards: string;
  tickets: number;

  constructor(private prizeService: PrizeService) {
    this.rewards="";
    this.tickets=0;
   }

  ngOnInit(): void {
  }

  guardar(){
    if(this.rewards != "" && this.tickets > 0){
      let data = new PrizeModel();
      data.rewards = this.rewards;
      data.tickets = this.tickets;

      this.prizeService.setPrize(data).subscribe(
        res=>{
          console.log(res);
        }
      );
    }
  }

}
