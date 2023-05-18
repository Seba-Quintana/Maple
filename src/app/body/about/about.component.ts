import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SubHeaderComponent } from "../../sub-header/sub-header.component";
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { ThemePalette } from '@angular/material/core';

@Component({
	selector: 'app-about',
	standalone: true,
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.css'],
	imports: [
		CommonModule,
		RouterModule,
		SubHeaderComponent,
		MatCardModule,
		MatTabsModule,
		MatIconModule
	]
})
export class AboutComponent {

}
