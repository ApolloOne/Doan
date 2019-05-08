import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'm-products',
	templateUrl: './Products.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class T_ProductsComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}