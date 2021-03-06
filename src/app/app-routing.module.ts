import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCategoriesComponent } from './pages/admin-categories/admin-categories.component';
import { AdminConsoleComponent } from './pages/admin-console/admin-console.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProductDescriptionComponent } from './pages/product-description/product-description.component';
import { ProductSearchComponent } from './pages/product-search/product-search.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [

  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'register',
    component: SignupComponent
  },
  {
    path:"account",
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin-console',
    component: AdminConsoleComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/categories',
    component: AdminCategoriesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'product/:id',
    component: ProductDescriptionComponent
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
