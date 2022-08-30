import { Component } from 'vue';

export interface IFooterLink {
  label: string;
  href: string;
  target: string;
  icon?: Component | null;
}

export interface IFooterLinks {
  title: string;
  links: IFooterLink[];
}
