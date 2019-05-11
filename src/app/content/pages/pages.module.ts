import { LayoutModule } from '../layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { PartialsModule } from '../partials/partials.module';
import { ActionComponent } from './header/action/action.component';
import { ProfileComponent } from './header/profile/profile.component';

// Module custom by NgocTien
// Stock
import { ProductsModule } from './components/apps/Stock/Products/Products.module';
import { PriceBookModule } from './components/apps/Stock/PriceBook/PriceBook.module';
import { StockTakesModule } from './components/apps/Stock/StockTakes/StockTakes.module';
// Invoices
import { InvoicesModule } from './components/apps/Deal/invoices/invoices.module';
import { ReturnsModule } from './components/apps/Deal/Returns/Returns.module';
import { PurchaseOrderModule } from './components/apps/Deal/PurchaseOrder/PurchaseOrder.module';
import { PurchaseReturnsModule } from './components/apps/Deal/PurchaseReturns/PurchaseReturns.module';
import { DamageItemsModule } from './components/apps/Deal/DamageItems/DamageItems.module';
// Partner
import { CustomersModule } from './components/apps/Partner/Customers/Customers.module';
import { SuppliersModule } from './components/apps/Partner/Suppliers/Suppliers.module';
// CashFlow
import { CashFlowModule } from './components/apps/CashFlow/CashFlow.module';
// Report
import { CustomerReportModule } from './components/apps/Report/CustomerReport/CustomerReport.module'
// end Module custom 
import { CoreModule } from '../../core/core.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ErrorPageComponent } from './snippets/error-page/error-page.component';

@NgModule({
	declarations: [
		PagesComponent,
		ActionComponent,
		ProfileComponent,
		ErrorPageComponent,
	],
	imports: [
		CommonModule,
		HttpClientModule,
		FormsModule,
		PagesRoutingModule,
		CoreModule,
		LayoutModule,
		PartialsModule,
		AngularEditorModule,
		// Edited by ngoc tien
		ProductsModule,
		PriceBookModule,
		StockTakesModule,
		InvoicesModule,
		ReturnsModule,
		PurchaseOrderModule,
		PurchaseReturnsModule,
		DamageItemsModule,
		CustomersModule,
		SuppliersModule,
		CashFlowModule,
		CustomerReportModule,
		// material Module
	],
	providers: []
})
export class PagesModule { }
