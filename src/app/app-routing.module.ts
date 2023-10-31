import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { AddProductsComponent } from './add-products/add-products.component';

const routes: Routes = [
  { path: '', component: ViewproductComponent },
  { path: 'update/:id', component: UpdateproductComponent },
  { path: 'add', component: AddProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
