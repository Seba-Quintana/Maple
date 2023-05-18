import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapleComponent } from "./maple/maple.component";
import { CvComponent } from "./cv/cv.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    imports: [
		CommonModule,
		MapleComponent,
		CvComponent,
	]
})
export class HomeComponent {

}
