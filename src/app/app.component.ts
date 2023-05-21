import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@Component({
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [
        RouterModule,
        FooterComponent,
        HeaderComponent
    ],
	providers: [Location, {provide: LocationStrategy, useClass: HashLocationStrategy}],
})
export class AppComponent {
	title = 'landingPage';
}
