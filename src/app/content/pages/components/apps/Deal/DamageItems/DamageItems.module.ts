import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DamageItemsComponent } from './DamageItems.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: DamageItemsComponent
            }
        ])
    ],
    declarations: [DamageItemsComponent]
})
export class DamageItemsModule { }