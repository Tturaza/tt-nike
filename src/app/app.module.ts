import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ShoeDetailsComponent } from './components/shoe-details/shoe-details.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenComponentComponent } from './components/men-component/men-component.component';
import { WomenComponentComponent } from './components/women-component/women-component.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ShoeDetailsComponent,
    FooterComponent,
    MenComponentComponent,
    WomenComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
