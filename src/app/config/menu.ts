// tslint:disable-next-line:no-shadowed-variable
import { ConfigModel } from '../core/interfaces/config';

// tslint:disable-next-line:no-shadowed-variable
export class MenuConfig implements ConfigModel {
	public config: any = {};

	constructor() {
		this.config = {
			header: {
				self: {},
				items: [
					{
						title: 'Actions',
						root: true,
						icon: 'flaticon-add',
						toggle: 'click',
						translate: 'MENU.ACTIONS',
						submenu: {
							type: 'classic',
							alignment: 'left',
							items: [
								{
									title: 'Create New Post',
									page: '/header/actions',
									icon: 'flaticon-file',
									translate: 'MENU.CREATE_POST',
									aside: {
										self: {
											bullet: 'dot'
										},
										items: [
											{
												section: 'Departments'
											},
											{
												title: 'Resources',
												desc: '',
												icon: 'flaticon-layers',
												bullet: 'dot',
												root: true,
												submenu: [
													{
														title: 'Create New Post',
														page: '/header/actions',
													},
													{
														title: 'Timesheet',
														tooltip: 'Non functional dummy link',
													},
													{
														title: 'Payroll',
														tooltip: 'Non functional dummy link',
													},
													{
														title: 'Contacts',
														tooltip: 'Non functional dummy link',
													}
												]
											}
										]
									}
								},
								{
									title: 'Generate Reports',
									tooltip: 'Non functional dummy link',
									icon: 'flaticon-diagram',
									badge: {
										type: 'm-badge--success',
										value: '2'
									},
								},
								{
									title: 'Manage Orders',
									icon: 'flaticon-business',
									submenu: {
										type: 'classic',
										alignment: 'right',
										bullet: 'line',
										items: [
											{
												title: 'Latest Orders',
												tooltip: 'Non functional dummy link',
												icon: '',
											},
											{
												title: 'Pending Orders',
												tooltip: 'Non functional dummy link',
												icon: '',
											},
											{
												title: 'Processed Orders',
												tooltip: 'Non functional dummy link',
												icon: '',
											},
											{
												title: 'Delivery Reports',
												tooltip: 'Non functional dummy link',
												icon: '',
											},
											{
												title: 'Payments',
												tooltip: 'Non functional dummy link',
												icon: '',
											},
											{
												title: 'Customers',
												tooltip: 'Non functional dummy link',
												icon: '',
											}
										]
									}
								},
								{
									title: 'Customer Feedbacks',
									page: '/#',
									icon: 'flaticon-chat-1',
									submenu: {
										type: 'classic',
										alignment: 'right',
										bullet: 'dot',
										items: [
											{
												title: 'Customer Feedbacks',
												tooltip: 'Non functional dummy link',
												icon: '',
											},
											{
												title: 'Supplier Feedbacks',
												tooltip: 'Non functional dummy link',
												icon: '',
											},
											{
												title: 'Reviewed Feedbacks',
												tooltip: 'Non functional dummy link',
												icon: '',
											},
											{
												title: 'Resolved Feedbacks',
												tooltip: 'Non functional dummy link',
												icon: '',
											},
											{
												title: 'Feedback Reports',
												tooltip: 'Non functional dummy link',
												icon: '',
											}
										]
									}
								},
								{
									title: 'Register Member',
									tooltip: 'Non functional dummy link',
									icon: 'flaticon-users',
								}
							]
						}
					},
					{
						title: 'Reports',
						root: true,
						icon: 'flaticon-line-graph',
						toggle: 'click',
						translate: 'MENU.REPORTS',
						submenu: {
							type: 'mega',
							width: '1000px',
							alignment: 'left',
							columns: [
								{
									heading: {
										heading: true,
										title: 'Finance Reports',
									},
									items: [
										{
											title: 'Annual Reports',
											tooltip: 'Non functional dummy link',
											icon: 'flaticon-map',
										},
										{
											title: 'HR Reports',
											tooltip: 'Non functional dummy link',
											icon: 'flaticon-user',
										},
										{
											title: 'IPO Reports',
											tooltip: 'Non functional dummy link',
											icon: 'flaticon-clipboard',
										},
										{
											title: 'Finance Margins',
											tooltip: 'Non functional dummy link',
											icon: 'flaticon-graphic-1',
										},
										{
											title: 'Revenue Reports',
											tooltip: 'Non functional dummy link',
											icon: 'flaticon-graphic-2',
										}
									]
								},
								{
									bullet: 'line',
									heading: {
										heading: true,
										title: 'Project Reports',
									},
									items: [
										{
											title: 'Coca Cola CRM',
											tooltip: 'Non functional dummy link',
											icon: '',
										},
										{
											title:
												'Delta Airlines Booking Site',
											tooltip: 'Non functional dummy link',
											icon: '',
										},
										{
											title: 'Malibu Accounting',
											tooltip: 'Non functional dummy link',
											icon: '',
										},
										{
											title: 'Vineseed Website Rewamp',
											tooltip: 'Non functional dummy link',
											icon: '',
										},
										{
											title: 'Zircon Mobile App',
											tooltip: 'Non functional dummy link',
											icon: '',
										},
										{
											title: 'Mercury CMS',
											tooltip: 'Non functional dummy link',
											icon: '',
										}
									]
								},
								{
									bullet: 'dot',
									heading: {
										heading: true,
										title: 'HR Reports',
									},
									items: [
										{
											title: 'Staff Directory',
											tooltip: 'Non functional dummy link',
											icon: '',
										},
										{
											title: 'Client Directory',
											tooltip: 'Non functional dummy link',
											icon: '',
										},
										{
											title: 'Salary Reports',
											tooltip: 'Non functional dummy link',
											icon: '',
										},
										{
											title: 'Staff Payslips',
											tooltip: 'Non functional dummy link',
											icon: '',
										},
										{
											title: 'Corporate Expenses',
											tooltip: 'Non functional dummy link',
											icon: '',
										},
										{
											title: 'Project Expenses',
											tooltip: 'Non functional dummy link',
											icon: '',
										}
									]
								},
								{
									heading: {
										heading: true,
										title: 'Reporting Apps',
										icon: '',
									},
									items: [
										{
											title: 'Report Adjusments',
											tooltip: 'Non functional dummy link',
											icon: '',
										},
										{
											title: 'Sources & Mediums',
											tooltip: 'Non functional dummy link',
											icon: '',
										},
										{
											title: 'Reporting Settings',
											tooltip: 'Non functional dummy link',
											icon: '',
										},
										{
											title: 'Conversions',
											tooltip: 'Non functional dummy link',
											icon: '',
										},
										{
											title: 'Report Flows',
											tooltip: 'Non functional dummy link',
											icon: '',
										},
										{
											title: 'Audit & Logs',
											tooltip: 'Non functional dummy link',
											icon: '',
										}
									]
								}
							]
						}
					},
					{
						title: 'Apps',
						root: true,
						icon: 'flaticon-paper-plane',
						toggle: 'click',
						translate: 'MENU.APPS',
						badge: {
							type: 'm-badge--brand m-badge--wide',
							value: 'new',
							translate: 'MENU.NEW',
						},
						submenu: {
							type: 'classic',
							alignment: 'left',
							items: [
								{
									title: 'eCommerce',
									tooltip: 'Non functional dummy link',
									icon: 'flaticon-business',
									submenu: {
										type: 'classic',
										alignment: 'right',
										items: [
											{
												title: 'Customers',
												page: '/ecommerce/customers',
												icon: 'flaticon-users',
											},
											{
												title: 'Orders',
												page: '/ecommerce/orders',
												icon: 'flaticon-interface-1',
											},
											{
												title: 'Products',
												page: '/ecommerce/products',
												icon: 'flaticon-list-1',
											}
										]
									}
								},
								{
									title: 'Audience',
									page: '/crud/datatable_v1',
									icon: 'flaticon-computer',
									submenu: {
										type: 'classic',
										alignment: 'right',
										items: [
											{
												title: 'Active Users',
												tooltip: 'Non functional dummy link',
												icon: 'flaticon-users',
											},
											{
												title: 'User Explorer',
												tooltip: 'Non functional dummy link',
												icon: 'flaticon-interface-1',
											},
											{
												title: 'Users Flows',
												tooltip: 'Non functional dummy link',
												icon: 'flaticon-lifebuoy',
											},
											{
												title: 'Market Segments',
												tooltip: 'Non functional dummy link',
												icon: 'flaticon-graphic-1',
											},
											{
												title: 'User Reports',
												tooltip: 'Non functional dummy link',
												icon: 'flaticon-graphic',
											}
										]
									}
								},
								{
									title: 'Marketing',
									tooltip: 'Non functional dummy link',
									icon: 'flaticon-map',
								},
								{
									title: 'Campaigns',
									tooltip: 'Non functional dummy link',
									icon: 'flaticon-graphic-2',
									badge: {
										type: 'm-badge--success',
										value: '3'
									}
								},
								{
									title: 'Cloud Manager',
									tooltip: 'Non functional dummy link',
									icon: 'flaticon-infinity',
									submenu: {
										type: 'classic',
										alignment: 'left',
										items: [
											{
												title: 'File Upload',
												tooltip: 'Non functional dummy link',
												icon: 'flaticon-add',
												badge: {
													type: 'm-badge--danger',
													value: '3'
												}
											},
											{
												title: 'File Attributes',
												tooltip: 'Non functional dummy link',
												icon: 'flaticon-signs-1',
											},
											{
												title: 'Folders',
												tooltip: 'Non functional dummy link',
												icon: 'flaticon-folder',
											},
											{
												title: 'System Settings',
												tooltip: 'Non functional dummy link',
												icon: 'flaticon-cogwheel-2',
											}
										]
									}
								}
							]
						}
					}
				]
			},
			aside: {
				self: {},
				items: [
					{
						title: 'Dashboard',
						desc: 'Some description goes here',
						root: true,
						icon: 'flaticon-line-graph',
						page: '/',
						badge: {type: 'm-badge--danger', value: '2'},
						translate: 'MENU.DASHBOARD'
					},
					{section: 'Components'},
					{
						title: 'Hàng Hoá',
						root: true,
						bullet: 'dot',
						// icon: 'flaticon-interface-7',
						icon:'fa fa-cubes',
						submenu: [
							{
								title: 'Danh Mục',
								bullet: 'dot',
							},
							{
								title: 'Thiết Lập giá',
								bullet: 'dot',
							},
							{
								title: 'Kiểm Kho',
								bullet: 'dot',
							},
							// {
							// 	title: 'Buttons & Indicators',
							// 	bullet: 'dot',
							// 	submenu: [
							// 		{
							// 			title: 'Button',
							// 			page:
							// 				'/material/buttons-and-indicators/button'
							// 		},
							// 		{
							// 			title: 'Button toggle',
							// 			page:
							// 				'/material/buttons-and-indicators/button-toggle'
							// 		},
							// 		{
							// 			title: 'Chips',
							// 			page:
							// 				'/material/buttons-and-indicators/chips'
							// 		},
							// 		{
							// 			title: 'Icon',
							// 			page:
							// 				'/material/buttons-and-indicators/icon'
							// 		},
							// 		{
							// 			title: 'Progress bar',
							// 			page:
							// 				'/material/buttons-and-indicators/progress-bar'
							// 		},
							// 		{
							// 			title: 'Progress spinner',
							// 			page:
							// 				'/material/buttons-and-indicators/progress-spinner'
							// 		}
							// 	]
							// },
							// {
							// 	title: 'Popups & Modals',
							// 	bullet: 'dot',
							// 	submenu: [
							// 		{
							// 			title: 'Bottom sheet',
							// 			page:
							// 				'/material/popups-and-modals/bottom-sheet'
							// 		},
							// 		{
							// 			title: 'Dialog',
							// 			page:
							// 				'/material/popups-and-modals/dialog'
							// 		},
							// 		{
							// 			title: 'Snackbar',
							// 			page:
							// 				'/material/popups-and-modals/snackbar'
							// 		},
							// 		{
							// 			title: 'Tooltip',
							// 			page:
							// 				'/material/popups-and-modals/tooltip'
							// 		}
							// 	]
							// },
							// {
							// 	title: 'Data table',
							// 	bullet: 'dot',
							// 	submenu: [
							// 		{
							// 			title: 'Paginator',
							// 			page: '/material/data-table/paginator'
							// 		},
							// 		{
							// 			title: 'Sort header',
							// 			page: '/material/data-table/sort-header'
							// 		},
							// 		{
							// 			title: 'Table',
							// 			page: '/material/data-table/table'
							// 		}
							// 	]
							// }
						]
					},
					{
						title: 'Giao Dịch',
						root: true,
						bullet: 'dot',
						icon:'fa fa-share',
						submenu: [
							{
								title: 'Hoá Đơn',
								page: '/ngbootstrap/accordion'
							},
							{
								title: 'Trả Hàng',
								page: '/ngbootstrap/alert'
							},
							{
								title: 'Nhập Hàng',
								page: '/ngbootstrap/buttons'
							},
							{
								title: 'Trả Hàng Nhập',
								page: '/ngbootstrap/collapse'
							},
							{
								title: 'Xuất Huỷ',
								page: '/ngbootstrap/datepicker'
							}
						]
					},
					{
						title: 'Đối Tác',
						root: true,
						bullet: 'dot',
						icon:'fa fa-male',
						submenu: [
							{
								title: 'Khách Hàng',
								page: '/ngbootstrap/accordion'
							},
							{
								title: 'Nhà Cung Cấp',
								page: '/ngbootstrap/alert'
							}
						]
					},
					{
						title: 'Sổ Quỹ',
						root: true,
						bullet: 'dot',
						icon:'fa fa-book'
					},
					{
						title: 'Báo Cáo',
						root: true,
						bullet: 'dot',
						icon:'fa fa-male',
						submenu: [
							{
								title: 'Cuối Ngày',
								page: '/ngbootstrap/accordion'
							},
							{
								title: 'Bán Hàng',
								page: '/ngbootstrap/alert'
							},
							{
								title: 'Đặt Hàng',
								page: '/ngbootstrap/buttons'
							},
							{
								title: 'Hàng Hoá',
								page: '/ngbootstrap/collapse'
							},
							{
								title: 'Khách Hàng',
								page: '/ngbootstrap/datepicker'
							},
							{
								title: 'Nhà Cung cấp',
								page: '/ngbootstrap/datepicker'
							},
							{
								title: 'Nhân viên',
								page: '/ngbootstrap/datepicker'
							},
							{
								title: 'Kênh Bán Hàng',
								page: '/ngbootstrap/datepicker'
							},
							{
								title: 'Tài Chính',
								page: '/ngbootstrap/datepicker'
							}
						]
					}
					// {section: 'Applications'},
					// {
					// 	title: 'eCommerce',
					// 	bullet: 'dot',
					// 	icon: 'flaticon-business',
					// 	root: true,
					// 	submenu: [
					// 		{
					// 			title: 'Customers',
					// 			page: '/ecommerce/customers'
					// 		},
					// 		{
					// 			title: 'Orders',
					// 			page: '/ecommerce/orders'
					// 		},
					// 		{
					// 			title: 'Products',
					// 			page: '/ecommerce/products'
					// 		},
					// 	]
					// },
					// {
					// 	title: 'User Management',
					// 	root: true,
					// 	bullet: 'dot',
					// 	icon: 'flaticon-user',
					// 	page: '/user-management'
					// },
					// {
					// 	title: 'Audit Log',
					// 	root: true,
					// 	bullet: 'dot',
					// 	icon: 'flaticon-interface-5',
					// 	page: '/audit-log'
					// },
					// {section: 'Pages'},
					// {
					// 	title: 'User',
					// 	root: true,
					// 	bullet: 'dot',
					// 	icon: 'flaticon-interface-1',
					// 	submenu: [
					// 		{
					// 			title: 'Profile',
					// 			page: '/profile'
					// 		},
					// 	]
					// },
					// {
					// 	title: 'Error',
					// 	root: true,
					// 	bullet: 'dot',
					// 	icon: 'flaticon-interface-2',
					// 	submenu: [
					// 		{
					// 			title: 'Error-1',
					// 			page: '/error/1'
					// 		},
					// 		{
					// 			title: 'Error-2',
					// 			page: '/error/2'
					// 		},
					// 		{
					// 			title: 'Error-3',
					// 			page: '/error/3'
					// 		},
					// 		{
					// 			title: 'Error-4',
					// 			page: '/error/4'
					// 		},
					// 		{
					// 			title: 'Error-5',
					// 			page: '/error/5'
					// 		},
					// 		{
					// 			title: 'Error-6',
					// 			page: '/error/6'
					// 		},
					// 	]
					// },
					// {section: 'Tools'},
					// {
					// 	title: 'Layout Builder',
					// 	root: true,
					// 	icon: 'flaticon-settings',
					// 	page: '/builder'
					// }
				]
			}
		};
	}
}