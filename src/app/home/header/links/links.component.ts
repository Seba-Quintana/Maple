import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
	selector: 'app-links',
	standalone: true,
	imports: [
		CommonModule,
		MatToolbarModule,
		MatButtonModule
	],
	templateUrl: './links.component.html',
	styleUrls: ['./links.component.css']
})
export class LinksComponent {

}
