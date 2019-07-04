import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-header-center',
  templateUrl: './header-center.component.html',
  styleUrls: ['./header-center.component.scss']
})
export class HeaderCenterComponent implements OnInit {
  @ViewChild('searchForm', {read: NgForm, static: false}) searchForm: NgForm;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.searchService.searchValue = this.searchForm.form.value.q;
  }

}
