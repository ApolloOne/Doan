import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceBookComponent } from './PriceBook.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: PriceBookComponent
            }
        ])
    ],
    declarations: [PriceBookComponent]
})
export class PriceBookModule { }