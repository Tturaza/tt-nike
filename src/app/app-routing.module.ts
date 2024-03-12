import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShoeDetailsComponent } from './components/shoe-details/shoe-details.component';

const routes: Routes = [
  {path: "" ,  component : HomeComponent},
  {path:"shoeDetails/:id", component : ShoeDetailsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
