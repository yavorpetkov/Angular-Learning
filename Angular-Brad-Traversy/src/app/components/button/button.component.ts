import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: [ './button.component.css' ]
})
export class ButtonComponent implements OnInit {
	// @Input() set text(value:string){}
	@Input() text = 'default text';
	@Input() color = 'green';
	constructor() {}

	ngOnInit(): void {}
}
