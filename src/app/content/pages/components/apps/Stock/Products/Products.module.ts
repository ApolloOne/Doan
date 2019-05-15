import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { T_ProductsComponent } from './Products.component';
import { RouterModule } from '@angular/router';
import {
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatTabsModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
} from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
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
        MatButtonModule,
        MatCardModule,
        MatTableModule,
        MatPaginatorModule,
        MatDialogModule,
        MatTabsModule,
        MatTooltipModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule
    ],
    declarations: [T_ProductsComponent,AddProductsComponent],
    entryComponents: [AddProductsComponent]
})
export class ProductsModule { }