import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

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
import { SecurityComponent } from './security/security/security.component';
import { PsPaginationComponent } from './components/ps-pagination/ps-pagination.component';

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
    SecurityComponent,
    PsPaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
