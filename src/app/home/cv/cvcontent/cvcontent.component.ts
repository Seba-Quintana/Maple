import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tile } from "src/app/interfaces/tile"
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
	selector: 'app-cvcontent',
	standalone: true,
	imports: [
		CommonModule,
		MatGridListModule
	],
	templateUrl: './cvcontent.component.html',
	styleUrls: ['./cvcontent.component.css']
})
export class CvcontentComponent {
	tiles: Tile[] = [
		{ text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
		{ text: 'One', cols: 3, rows: 1, color: 'lightblue' },
		{ text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
		{ text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
	];
}
