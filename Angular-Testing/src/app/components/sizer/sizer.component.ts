import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
	selector: 'app-sizer',
	templateUrl: './sizer.component.html',
	styleUrls: [ './sizer.component.css' ]
})
export class SizerComponent implements OnInit {
	@Input() size: number = 0;
	@Output() sizeChange = new EventEmitter<number>();

	constructor() {}

	ngOnInit(): void {}

	dec() {
		this.resize(-1);
	}
	inc() {
		this.resize(+1);
	}

	resize(newSize: number) {
		this.size = Math.min(40, Math.max(8, +this.size + newSize));
		this.sizeChange.emit(this.size);
	}
}
