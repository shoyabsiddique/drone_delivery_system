import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddProductsComponent,
    UpdateproductComponent,
    ViewproductComponent,
    DeleteproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
