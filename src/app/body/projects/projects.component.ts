import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { SubHeaderComponent } from "../../sub-header/sub-header.component";
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-projects',
    standalone: true,
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css'],
    imports: [
        CommonModule,
        SubHeaderComponent,
        MatCardModule,
		MatButtonModule
    ]
})
export class ProjectsComponent {

}
