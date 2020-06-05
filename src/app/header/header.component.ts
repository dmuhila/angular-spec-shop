import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  mobileSearch: boolean;
  constructor() {}

  ngOnInit(): void {}

  handleSubmit(e) {
    e.preventDefault();
  }

  handleMobileSearch(e) {
    e.preventDefault();
    this.mobileSearch = true;
  }

  handleSearchNav(e) {
    e.preventDefault();
    this.mobileSearch = false;

    this.searchBox.value = '';
    this.handleMobileSearch(e);
  }
}
