import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']

})
export class HomeComponent implements OnInit {
  WarningContent: string;
  constructor() { }

  ngOnInit() {
    this.WarningContent="Warning: Sharing personal, firm, or client confidential information can put the firm at risk. All WebEx usage must conform to local laws concerning client confidentiality, data protection and privacy as well as data protection, privacy and risk policies. As a meeting host you are responsible for ensuring compliance and making meeting participants aware of their confidentiality responsibilities. The use of Computer Based Audio (VOIP) may not be acceptable in some territories. If you have any questions, or need further information or guidance regarding the information that you will be using during your event,  " + 
    "please contact your local Risk Management office."
  }

}
