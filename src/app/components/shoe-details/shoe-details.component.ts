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
   const classicId = this.activedR.snapshot.paramMap.get("id")
    this.getedClassicItem(classicId)
  }



  getedClassicItem (id :any){
    this.serv.getClassicShoeDetails().subscribe(respo =>{
      const details = respo.classicShoe
      if(details){
       details.forEach((shoe:any) => {
          if(shoe.id.toString() === id){
              this.singleClassicShoe = shoe
              console.log(this.singleClassicShoe)
          }       
       });
      }
    })

  }
  
}

 // this.getClassicItem()
// getClassicItem (){
//   const itemId = this.activedR.snapshot.paramMap.get('id')

//   if(itemId){
//     this.serv.getClassicShoeDetails().subscribe(respo =>{
//       const classicObj = respo?.classicShoe
  
//       if(classicObj){
//         const singleItem = Object.values(classicObj).find((shoe:any)=>shoe.id === itemId)
//         console.log(singleItem)
//       }
//     })
//   }

// }