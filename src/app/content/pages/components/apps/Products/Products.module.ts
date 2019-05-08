import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { T_ProductsComponent } from './Products.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: T_ProductsComponent
            }
        ])
    ],
    declarations: [T_ProductsComponent]
})
export class ProductsModule { }