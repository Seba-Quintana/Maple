import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';

@Component({
	selector: 'app-contact',
	standalone: true,
	imports: [
		CommonModule,
		MatButtonModule,
		MatIconModule
	],
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css']
})
export class ContactComponent {

}
