import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'child',
	templateUrl: './view-child.component.html',
	styleUrls: [ './view-child.component.css' ]
})
export class ViewChildComponent implements OnInit {
	@Input() id = 0;

	constructor() {}

	ngOnInit(): void {}
}
