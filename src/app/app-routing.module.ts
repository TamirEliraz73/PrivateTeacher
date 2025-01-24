import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './components/pages/home-page/home-page.component';
import {NotFoundPageComponent} from './components/pages/not-found-page/not-found-page.component';
import {ContactPageComponent} from './components/pages/contact-us-page/contact-page.component';
import {PricingPageComponent} from './components/pages/pricing-page/pricing-page.component';
import {
  TermsAndConditionsPageComponent
} from './components/pages/terms-and-conditions-page/terms-and-conditions-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: '404', component: NotFoundPageComponent},
  {path: 'pricing', component: PricingPageComponent},
  {path: 'terms', component: TermsAndConditionsPageComponent},
  {path: '**', redirectTo: '404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
