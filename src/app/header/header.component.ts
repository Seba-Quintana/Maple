import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinksComponent } from "./links/links.component";
import { MatToolbarModule } from '@angular/material/toolbar';
import { ThemeComponent } from "./theme/theme.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    imports: [
        CommonModule,
        LinksComponent,
        MatToolbarModule,
        ThemeComponent
    ]
})
export class HeaderComponent {
	isActive = true;
}
