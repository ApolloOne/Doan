import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ActionComponent } from './header/action/action.component';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { ProfileComponent } from './header/profile/profile.component';
import { ErrorPageComponent } from './snippets/error-page/error-page.component';

const routes: Routes = [
	{
		path: '',
		component: PagesComponent,
		canActivate: [NgxPermissionsGuard],
		data: {
			permissions: {
				only: ['ADMIN', 'USER'],
				except: ['GUEST'],
				redirectTo: '/login'
			}
		},
		children: [
			{
				path: '',
				loadChildren: './components/dashboard/dashboard.module#DashboardModule'
			},
			{
				path: 'Products',
				loadChildren: './components/apps/Stock/Products/Products.module#ProductsModule'
			},
			{
				path:'PriceBook',
				loadChildren:'./components/apps/Stock/PriceBook/PriceBook.module#PriceBookModule'
			},
			{
				path:'StockTakes',
				loadChildren:'./components/apps/Stock/StockTakes/StockTakes.module#StockTakesModule'
			},
			{
				path:'Invoices',
				loadChildren:'./components/apps/Deal/invoices/invoices.module#InvoicesModule'
			},
			{
				path:'Returns',
				loadChildren:'./components/apps/Deal/Returns/Returns.module#ReturnsModule'
			},
			{
				path:'PurchaseOrder',
				loadChildren:'./components/apps/Deal/PurchaseOrder/PurchaseOrder.module#PurchaseOrderModule'
			},
			{
				path:'PurchaseReturns',
				loadChildren:'./components/apps/Deal/PurchaseReturns/PurchaseReturns.module#PurchaseReturnsModule'
			},
			{
				path:'DamageItems',
				loadChildren:'./components/apps/Deal/DamageItems/DamageItems.module#DamageItemsModule'
			},
			{
				path:'Customers',
				loadChildren:'./components/apps/Partner/Customers/Customers.module#CustomersModule'
			},
			{
				path:'Suppliers',
				loadChildren:'./components/apps/Partner/Suppliers/Suppliers.module#SuppliersModule'
			},
			{
				path:'CashFlow',
				loadChildren:'./components/apps/CashFlow/CashFlow.module#CashFlowModule'
			},
			{
				path:'CustomerReport',
				loadChildren:'./components/apps/Report/CustomerReport/CustomerReport.module#CustomerReportModule'
			},
			{
				path:'OrderReport',
				loadChildren:''
			},
			{
				path:'ProductReport',
				loadChildren:''
			},
			{
				path:'EndOfDayReport',
				loadChildren:''
			},
			{
				path:'SupplierReport',
				loadChildren:''
			},
			{
				path:'UserReport',
				loadChildren:''
			},
			{
				path:'SaleChannelReport',
				loadChildren:''
			},
			{
				path:'FinancialReport',
				loadChildren:''
			}
			// Tam thoi bo builder
			// {
			// 	path: 'builder',
			// 	loadChildren: './builder/builder.module#BuilderModule'
			// },
		]
	},
	{
		path: 'login',
		canActivate: [NgxPermissionsGuard],
		loadChildren: './auth/auth.module#AuthModule',
		data: {
			permissions: {
				except: 'ADMIN'
			}
		},
	},
	{
		path: '404',
		component: ErrorPageComponent
	},
	{
		path: 'error/:type',
		component: ErrorPageComponent
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PagesRoutingModule {}
