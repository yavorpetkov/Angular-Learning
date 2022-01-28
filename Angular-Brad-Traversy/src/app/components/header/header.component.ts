import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: [ './header.component.css' ]
})
export class HeaderComponent implements OnInit {
	title: string = 'ANGULAR LEARNING';
	public buttonColor = 'red';

	constructor() {}

	ngOnInit(): void {}
}
