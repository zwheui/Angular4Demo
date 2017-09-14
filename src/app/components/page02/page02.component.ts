import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpFetchService } from '../../services/http-fetch.service';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-page02',
  templateUrl: './page02.component.html',
  styleUrls: ['./page02.component.scss'],
  providers: [HttpFetchService]
})
export class Page02Component implements AfterViewInit {
  myDate;
  postRetDate;
  constructor(
    private _httpSrv: HttpFetchService,
  ) { }

  // ngOnInit() {
  //   this.myDate = new Date();
  // }
  ngAfterViewInit() {
    $('#MyDatePicker').datepicker({
      changeMonth: true,
      changeYear: true,
      dateFormat: 'dd/mm/yy',
      onSelect: function (selectedDate) {
        // $("#txtFilterDateTo").datepicker("option", "minDate", selectedDate);
      }
    });
  }

  async onSubmit(formValue) {
    this.postRetDate = await this._httpSrv.postHttp('menu', { name: formValue.name, href: formValue.Email });
    this.postRetDate = JSON.stringify(this.postRetDate);
  }
}
