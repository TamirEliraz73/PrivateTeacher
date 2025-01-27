import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import {FormsModule} from "@angular/forms";
import { HomeContainerComponent } from './components/containers/home-container/home-container.component';
import { ContactPageComponent } from './components/pages/contact-us-page/contact-page.component';
import { PricingPageComponent } from './components/pages/pricing-page/pricing-page.component';
import { TermsAndConditionsPageComponent } from './components/pages/terms-and-conditions-page/terms-and-conditions-page.component';
import { SubjectItemComponent } from './components/containers/subject-item/subject-item.component';
import { SubjectsPageComponent } from './components/pages/subjects-page/subjects-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    HomePageComponent,
    FooterComponent,
    HeaderComponent,
    HomeContainerComponent,
    ContactPageComponent,
    PricingPageComponent,
    TermsAndConditionsPageComponent,
    SubjectItemComponent,
    SubjectsPageComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
