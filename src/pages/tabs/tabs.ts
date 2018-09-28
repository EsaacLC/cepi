import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { AddVisitorPage } from '../add-visitor/add-visitor';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AddVisitorPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
