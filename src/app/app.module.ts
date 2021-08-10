import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { HSearchBarComponent } from './layout/h-search-bar/h-search-bar.component';
import { HMenuComponent } from './layout/h-menu/h-menu.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ProductSearchComponent } from './pages/product-search/product-search.component';
import { ProductDescriptionComponent } from './pages/product-description/product-description.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PsFiltersComponent } from './components/ps-filters/ps-filters.component';
import { PsProductsComponent } from './components/ps-products/ps-products.component';
import { PsProductCardComponent } from './components/ps-product-card/ps-product-card.component';
import { PsProductCardReviewComponent } from './components/ps-product-card-review/ps-product-card-review.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PsPaginationComponent } from './components/ps-pagination/ps-pagination.component';
import { JwtClientService } from './services/jwt-client.service';
import { AuthGuard } from './services/auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { CartComponent } from './pages/cart/cart.component';
import { CartItemsComponent } from './components/cart-items/cart-items.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { AdminConsoleComponent } from './pages/admin-console/admin-console.component';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HSearchBarComponent,
    HMenuComponent,
    FooterComponent,
    ProductSearchComponent,
    ProductDescriptionComponent,
    SigninComponent,
    SignupComponent,
    PsFiltersComponent,
    PsProductsComponent,
    PsProductCardComponent,
    PsProductCardReviewComponent,
    PageNotFoundComponent,
    PsPaginationComponent,
    CartComponent,
    CartItemsComponent,
    CheckoutComponent,
    AdminConsoleComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [JwtClientService,AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }], //I added JwtClientService manually..
  bootstrap: [AppComponent]
})
export class AppModule { }
