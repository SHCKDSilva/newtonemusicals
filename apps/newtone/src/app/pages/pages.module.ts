import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'product', component: ProductComponent },
    ]),
  ],
})
export class PagesModule {}
