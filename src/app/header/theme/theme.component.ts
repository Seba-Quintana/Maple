import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
	selector: 'app-theme',
	standalone: true,
	imports: [
		CommonModule,
		MatMenuModule,
		MatButtonModule
	],
	templateUrl: './theme.component.html',
	styleUrls: ['./theme.component.css']
})
export class ThemeComponent {
	theme :string = "pink-bluegrey" // "deeppurple-amber" | "indigo-pink" | "pink-bluegrey" | "purple-green"

	changeTheme() {
		//this.theme = !this.theme;
	}
}
