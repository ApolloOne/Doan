import { ChangeDetectionStrategy, Component, HostBinding, Inject, Input, OnInit } from '@angular/core';
import { ClassInitService } from '../../../../core/services/class-init.service';
import { LayoutConfigService } from '../../../../core/services/layout-config.service';
import * as objectPath from 'object-path';
import { DOCUMENT } from '@angular/common';

@Component({
	selector: 'm-brand',
	templateUrl: './brand.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrandComponent implements OnInit {
	
	constructor(
		private classInitService: ClassInitService,
		private layoutConfigService: LayoutConfigService,
		@Inject(DOCUMENT) private document: Document
	) {
	
	}

	ngOnInit(): void {}
	
	/**
	 * Toggle class topbar show/hide
	 * @param event
	 */
	clickTopbarToggle(event: Event): void {
		this.document.body.classList.toggle('m-topbar--on');
	}
}
