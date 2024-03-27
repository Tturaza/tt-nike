import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/service/my-service.service';

@Component({
  selector: 'app-men-component',
  templateUrl: './men-component.component.html',
  styleUrls: ['./men-component.component.scss']
})
export class MenComponentComponent implements OnInit {

  constructor( private serv: MyServiceService){}

  mensData : any

  ngOnInit(){
    this.getedMens()
  }


  getedMens(){
    this.serv.getMens().subscribe((respo)=>{
      this.mensData = respo
    })
  }
}
