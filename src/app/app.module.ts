import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
