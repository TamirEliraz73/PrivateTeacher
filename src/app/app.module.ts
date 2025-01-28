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
import {NgOptimizedImage} from '@angular/common';
import { EnglishSubjectPageComponent } from './components/pages/subjects-page/english-subject-page/english-subject-page.component';
import { MathSubjectPageComponent } from './components/pages/subjects-page/math-subject-page/math-subject-page.component';
import { PhysicsSubjectPageComponent } from './components/pages/subjects-page/pysics-subject-page/physics-subject-page.component';
import { ComputerScienceSubjectPageComponent } from './components/pages/subjects-page/computer-sience-subject-page/computer-science-subject-page.component';
import { ComputerScienceAcademicSubjectPageComponent } from './components/pages/subjects-page/computer-sience-academic-subject-page/computer-science-academic-subject-page.component';
import { HistorySubjectPageComponent } from './components/pages/subjects-page/history-subject-page/history-subject-page.component';

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
    SubjectsPageComponent,
    EnglishSubjectPageComponent,
    MathSubjectPageComponent,
    PhysicsSubjectPageComponent,
    ComputerScienceSubjectPageComponent,
    ComputerScienceAcademicSubjectPageComponent,
    HistorySubjectPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
