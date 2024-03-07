import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/service/my-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  popularShoes : any;

  constructor(private popularServ : MyServiceService){}

  ngOnInit(): void {
    this.popularServ.getPopularRightNow().subscribe( respo => {
      this.popularShoes = respo.popularRightNow
      console.log(this.popularShoes)
    })
  }

}
