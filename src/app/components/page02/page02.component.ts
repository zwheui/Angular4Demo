import { Component, OnInit } from '@angular/core';
import { HttpFetchService } from '../../services/http-fetch.service';
// declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-page02',
  templateUrl: './page02.component.html',
  styleUrls: ['./page02.component.scss'],
  providers: [HttpFetchService]
})
export class Page02Component implements OnInit {
  mystring: string;
  myNumber: number;
  myBool: boolean;
  myObj: object;
  myArrayString: (string | number)[];
  myArray: any[];
  myDate;
  postRetDate;
  constructor(
    private _httpSrv: HttpFetchService,
  ) {
    this.myArray = [1, 'abc', {}];
    this.myArrayString = [1, 'abc'];
  }

  ngOnInit() {
    this.myDate = new Date();
    // $('#MyDatePicker').datepicker();
    $('#MyDatePicker').datepicker({
      changeMonth: true,
      changeYear: true,
      dateFormat: 'dd/mm/yy',
      onSelect: function (selectedDate) {
        console.log(selectedDate);

        // $("#txtFilterDateTo").datepicker("option", "minDate", selectedDate);
      }
    });
  }

  onClick_Dialog() {
    $('#MyDialog').dialog();
  }

  async onSubmit(formValue) {
    this.postRetDate = await this._httpSrv.postHttp('menu', { name: formValue.name, href: formValue.Email });
    this.postRetDate = JSON.stringify(this.postRetDate);
  }
}
