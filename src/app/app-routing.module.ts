import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {routes} from '../assets/MyRoutes';


@NgModule({
  imports: [RouterModule.forRoot([
    ...routes,
    {path: '**', redirectTo: '404'}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule {}
