import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'm-Customers',
	templateUrl: './Customers.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomersComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}