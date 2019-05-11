import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuppliersComponent } from './Suppliers.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: SuppliersComponent
            }
        ])
    ],
    declarations: [SuppliersComponent]
})
export class SuppliersModule { }