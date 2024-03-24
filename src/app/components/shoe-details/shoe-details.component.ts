import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyServiceService } from 'src/app/service/my-service.service';

@Component({
  selector: 'app-shoe-details',
  templateUrl: './shoe-details.component.html',
  styleUrls: ['./shoe-details.component.scss']
})
export class ShoeDetailsComponent implements OnInit{
  constructor(private serv: MyServiceService , private  activedR : ActivatedRoute){}

  singleClassicShoe : any

  ngOnInit(): void {
   
    this.getedClassicItem()
  }
  
  
  getedClassicItem(){
    const classicIdParam = this.activedR.snapshot.paramMap.get("id")
    if(classicIdParam){
      const classicId = parseInt(classicIdParam, 10)
      if(!isNaN(classicId) && classicId < 6){
        this.serv.getClassicShoeDetails().subscribe(respo =>{
          const classicDetails = respo.classicShoe
          if(classicDetails){
            classicDetails.forEach((shoe:any) =>{
              if(shoe.id.toString() === classicIdParam){
                this.singleClassicShoe =shoe
                console.log(this.singleClassicShoe)
              }
            })
          }
        })
      }else if(!isNaN(classicId) && classicId >=6){
        this.serv.getClassicShoeDetails().subscribe(respo =>{
          const popularDetails = respo.popularRightNow
          if(popularDetails){
            popularDetails.forEach((shoe:any)=>{
              if(shoe.id.toString() === classicIdParam){
                this.singleClassicShoe = shoe
                console.log(this.singleClassicShoe)
              }
            })
          }
        })
      }
    }
  }

  
  
}

