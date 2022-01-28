import { Component, ViewChild } from '@angular/core';
import { ViewChildComponent } from './components/view-child/view-child.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	fontSizePx = 16;

	selectedChild = 0;
	show = true;

	@ViewChild(ViewChildComponent)
	set child(v: ViewChildComponent) {
		setTimeout(() => {
			this.selectedChild = v.id;
		}, 0);
	}

	toggle() {
		this.show = !this.show;
	}
}
