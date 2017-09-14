import { Component, OnInit } from '@angular/core';
import { HttpFetchService } from '../../services/http-fetch.service';

@Component({
  selector: 'app-page02',
  templateUrl: './page02.component.html',
  styleUrls: ['./page02.component.scss'],
  providers: [HttpFetchService]
})
export class Page02Component implements OnInit {
  myDate;
  postRetDate;
  constructor(
    private _httpSrv: HttpFetchService,
  ) { }

  ngOnInit() {
    this.myDate = new Date();
  }

  async onSubmit(formValue) {
    this.postRetDate = await this._httpSrv.postHttp('menu', { name: formValue.name, href: formValue.Email });
    this.postRetDate = JSON.stringify(this.postRetDate);
  }
}
