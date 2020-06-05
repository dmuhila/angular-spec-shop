import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  mobileSearch: boolean;
  searchForm: FormGroup;
  constructor() {}

  ngOnInit(): void {}

  handleSubmit() {
    var e: Event;
    e.preventDefault();
  }

  handleMobileSearch(e) {
    e.preventDefault();
    this.mobileSearch = true;
  }

  handleSearchNav(e) {
    e.preventDefault();
    this.mobileSearch = false;

    //this.searchBox.value = '';
    this.handleMobileSearch(e);
  }

  handleSearch() {}
}
