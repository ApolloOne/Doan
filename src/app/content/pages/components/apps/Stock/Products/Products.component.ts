import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { AddProductsComponent } from './add-products/add-products.component';
import {
	MatPaginator,
	MatTableDataSource,
	MatDialog,
	MatDialogConfig
} from '@angular/material';
export interface PeriodicElement {
	name: string;
	position: number;
	weight: number;
	symbol: string;
	action: string;
	delete: boolean
}
const ELEMENT_DATA: PeriodicElement[] = [
	{ position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', action: '', delete: false },
	{ position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', action: '', delete: false },
	{ position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', action: '', delete: false },
	{ position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', action: '', delete: false },
	{ position: 5, name: 'Boron', weight: 10.811, symbol: 'B', action: '', delete: false },
	{ position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', action: '', delete: false },
	{ position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', action: '', delete: false },
	{ position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', action: '', delete: false },
	{ position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', action: '', delete: false },
	{ position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', action: '', delete: false },
];
@Component({
	selector: 'm-products',
	templateUrl: './Products.component.html',
	styleUrls: ['./Products.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})

export class T_ProductsComponent implements OnInit {
	constructor(
		private dialog: MatDialog
	) { }



	displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'action', 'delete'];
	dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
	@ViewChild(MatPaginator) paginator: MatPaginator;

	ngOnInit() {
		this.dataSource.paginator = this.paginator;
	}
	openpopup() {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.width = "300px";
		dialogConfig.autoFocus = true;
		this.dialog.open(AddProductsComponent);
	}
	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();
	  }
}