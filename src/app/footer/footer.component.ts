import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from "./contact/contact.component";
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
    selector: 'app-footer',
    standalone: true,
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
    imports: [
		CommonModule,
		ContactComponent,
		MatToolbarModule
	]
})
export class FooterComponent {

}
