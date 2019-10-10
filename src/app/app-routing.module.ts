import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectCityComponent } from './select-city/select-city.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component: SelectCityComponent },
  { path: 'component1', loadChildren: () => import('./LazyLoadingComponents/lazyLoad.module').then(module => module.LazyLoadModule)},
  //{ path: 'component1', loadChildren: 'src/app/LazyLoadingComponents/lazyLoad.module#LazyLoadModule'}, //either works
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
