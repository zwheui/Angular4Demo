import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
	public data: object[]  = 
    [
      {
      	title: 'Meeting Center', 
      	show: false,
      	items: [
      		{
      			name: 'Meetings', 
      			options: ['Meet Now', 'Schedule', 'My Calendar', 'Find Events']
      		}
      	]
      },
      {
      	title: 'Reports', 
      	show: false,
      	items: [
      		{
      			name: 'Reporting', 
      			options: ['My Usage']
      		}
      	]
      },
      {
      	title: 'Support', 
      	show: false,
      	items: [
      		{
      			name: '', 
      			options: ['Contact']
      		}
      	]
      }
    ]


    constructor() { }

}
