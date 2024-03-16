import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MyServiceService } from 'src/app/service/my-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChildren('popularNow') trendingMovies!: QueryList<ElementRef>;
  
  private isMouseDownMap = new Map<HTMLDivElement, boolean>();
  private startXMap = new Map<HTMLDivElement, number>();
  private scrollLeftMap = new Map<HTMLDivElement, number>();

  onMouseDown(container: HTMLDivElement, event: MouseEvent) {
    this.isMouseDownMap.set(container, true);
    this.startXMap.set(container, event.pageX - container.offsetLeft);
    this.scrollLeftMap.set(container, container.scrollLeft);
  }

  onMouseLeave(container: HTMLDivElement) {
    this.isMouseDownMap.set(container, false);
  }

  
  onMouseUp(container: HTMLDivElement) {
    this.isMouseDownMap.set(container, false);
  }

  onMouseMove(container: HTMLDivElement, event: MouseEvent) {
    if (!this.isMouseDownMap.get(container)) return;
    event.preventDefault();
    const x = event.pageX - container.offsetLeft;
    const startX = this.startXMap.get(container);
    if (startX !== undefined) {
        const walk = (x - startX) * 2; 
        const scrollLeft = this.scrollLeftMap.get(container);
        if (scrollLeft !== undefined) {
            container.scrollLeft = scrollLeft - walk;
        }
    }
}



  popularShoes : any;
  classicShoes : any;

  constructor(private serv : MyServiceService){}

  ngOnInit(): void {
    this.getPopularRightNow()
    this.getClassicProduct()

  }



  getPopularRightNow(){
    this.serv.getPopularRightNow().subscribe( respo => {
      this.popularShoes = respo.popularRightNow
      console.log(this.popularShoes)
    })
  }


  getClassicProduct(){
    this.serv.getClassicProduct().subscribe(respo =>{
      this.classicShoes = respo.classicShoe
      console.log(this.classicShoes)
    })
  }

 
}
