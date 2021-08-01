import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProductDescriptionComponent } from './pages/product-description/product-description.component';
import { ProductSearchComponent } from './pages/product-search/product-search.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [

  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'product/:id',
    component: ProductDescriptionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'products/:category',
    component: ProductSearchComponent
  },
  {
    path: 'search',
    component: ProductSearchComponent
  },
  {
    path: '',
    component: ProductSearchComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
