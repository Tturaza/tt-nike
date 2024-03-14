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

  
@ViewChild('carousel') carousel!: ElementRef;
slideIndex = 0

  prevSlide(){
    this.showSlide(this.slideIndex -= 1)
  }

  nextSlide(){
    this.showSlide(this.slideIndex += 1)
  }

  showSlide(n:number){
    const slides = this.carousel.nativeElement.querySelectorAll('.card-slide img');

    if(n >= slides.length){
      this.slideIndex = 0
    }
    if(n < 0){
      this.slideIndex = slides.length - 1
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    slides[this.slideIndex].style.display = 'block';
  }

  

}
