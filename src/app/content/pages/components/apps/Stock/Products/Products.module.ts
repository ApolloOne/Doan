import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { T_ProductsComponent } from './Products.component';
import { RouterModule } from '@angular/router';
import {
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatDialogModule,
    MatTabsModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
} from '@angular/material';
import { AddProductsComponent } from './add-products/add-products.component';
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: T_ProductsComponent
            }
        ]),
        MatCardModule,
        MatTableModule,
        MatPaginatorModule,
        MatButtonModule,
        MatDialogModule,
        MatTabsModule,
        MatTooltipModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule
    ],
    declarations: [T_ProductsComponent, AddProductsComponent],
    entryComponents:[AddProductsComponent]
})
export class ProductsModule { }