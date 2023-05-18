import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
@Component({
	selector: 'app-sub-header',
	standalone: true,
	imports: [
		CommonModule,
		MatToolbarModule
	],
	templateUrl: './sub-header.component.html',
	styleUrls: ['./sub-header.component.css']
})

export class SubHeaderComponent {
	@Input() title: string | undefined;
}
