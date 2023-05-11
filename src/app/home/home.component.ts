import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header/header.component";
import { MapleComponent } from "./maple/maple.component";
import { CvComponent } from "./cv/cv.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    imports: [
		CommonModule,
		HeaderComponent,
		MapleComponent,
		CvComponent,
		FooterComponent,
	]
})
export class HomeComponent {

}
