import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinksComponent } from "./links/links.component";
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
	CommonModule,
	LinksComponent,
	MatToolbarModule
],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

}
