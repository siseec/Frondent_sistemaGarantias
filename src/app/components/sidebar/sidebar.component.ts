import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboardcamas', icon: 'dashboard', class: '' },
  { path: '/user-profile', title: 'User Profile', icon: 'person', class: '' },
  { path: '/table-list', title: 'Table List', icon: 'content_paste', class: '' },
  { path: '/typography', title: 'Typography', icon: 'library_books', class: '' },

  { path: '/usuario', title: 'Usuarios', icon: 'person', class: '' },
  { path: '/proveedor', title: 'Proveedores', icon: 'person', class: '' },
  { path: '/ordentrabajo', title: 'Orden Trabajo', icon: 'person', class: '' },
  { path: '/upgrade', title: 'Upgrade to PRO', icon: 'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };

}
