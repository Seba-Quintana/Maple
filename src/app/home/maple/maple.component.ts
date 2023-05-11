import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
	selector: 'app-maple',
	standalone: true,
	imports: [
		CommonModule,
		MatCardModule
	],
	templateUrl: './maple.component.html',
	styleUrls: ['./maple.component.css']
})
export class MapleComponent {

}
