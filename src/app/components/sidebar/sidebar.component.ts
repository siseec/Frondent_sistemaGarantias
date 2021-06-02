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
  { path: '/usuario', title: 'Usuarios', icon: 'manage_accounts', class: '' },
  { path: '/cliente', title: 'Cliente', icon: 'persons', class: '' },
  { path: '/proveedor', title: 'Proveedores', icon: 'business_center', class: '' },
  { path: '/ordentrabajo', title: 'Orden Trabajo', icon: 'task', class: '' },

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
