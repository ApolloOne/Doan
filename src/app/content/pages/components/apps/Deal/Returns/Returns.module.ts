import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReturnsComponent } from './Returns.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: ReturnsComponent
            }
        ])
    ],
    declarations: [ReturnsComponent]
})
export class ReturnsModule { }