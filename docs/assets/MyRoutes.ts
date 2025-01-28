import {Route} from '@angular/router';
import {HomePageComponent} from '../app/components/pages/home-page/home-page.component';
import {ContactPageComponent} from '../app/components/pages/contact-us-page/contact-page.component';
import {NotFoundPageComponent} from '../app/components/pages/not-found-page/not-found-page.component';
import {PricingPageComponent} from '../app/components/pages/pricing-page/pricing-page.component';
import {
  TermsAndConditionsPageComponent
} from '../app/components/pages/terms-and-conditions-page/terms-and-conditions-page.component';
import {SubjectsPageComponent} from '../app/components/pages/subjects-page/subjects-page.component';

export type MyRoutes = Route & {
  title: string
}
export const routes: MyRoutes[] = [
  {path: '', component: HomePageComponent, title: 'דף הבית'},
  {path: 'cities', component:NotFoundPageComponent, title:'אזורי שירות'},
  {path: '404', component: NotFoundPageComponent, title: 'דף לא נמצא'},
  {path: 'pricing', component: PricingPageComponent, title: 'מחירון'},
  {path: 'contact', component: NotFoundPageComponent, title: 'צרו קשר'}, // ContactPageComponent
  {path: 'subjects', component:SubjectsPageComponent, title:'רשימת נושאים'},
  {path: 'terms', component: TermsAndConditionsPageComponent, title: 'תנאי שימוש'},
]
