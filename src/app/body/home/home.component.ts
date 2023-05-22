import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from "./main/main.component";
import { WelcomeComponent } from "./welcome/welcome.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    imports: [
		CommonModule,
		MainComponent,
		WelcomeComponent,
	]
})
export class HomeComponent {

}
