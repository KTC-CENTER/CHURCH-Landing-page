import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FeaturesComponent } from './features/features.component';
import { Feature1Component } from './feature1/feature1.component';
import { FunctionComponent } from './function/function.component';
import { Feature2Component } from './feature2/feature2.component';
import { SectionComponent } from './section/section.component';
import { Feature3Component } from './feature3/feature3.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    FeaturesComponent,
    Feature1Component,
    FunctionComponent,
    Feature2Component,
    SectionComponent,
    Feature3Component

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
