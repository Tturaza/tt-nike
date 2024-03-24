import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShoeDetailsComponent } from './components/shoe-details/shoe-details.component';
import { MenComponentComponent } from './components/men-component/men-component.component';
import { WomenComponentComponent } from './components/women-component/women-component.component';
import { KidsComponentComponent } from './components/kids-component/kids-component.component';

const routes: Routes = [
  {path: "" ,  component : HomeComponent},
  {path:"shoeDetails/:id", component : ShoeDetailsComponent},
  {path: "men" , component : MenComponentComponent},
  {path: "women" , component: WomenComponentComponent},
  {path: "kids", component : KidsComponentComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
