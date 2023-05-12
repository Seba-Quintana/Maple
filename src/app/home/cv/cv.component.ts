import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CvcontentComponent } from "./cvcontent/cvcontent.component";

@Component({
    selector: 'app-cv',
    standalone: true,
    templateUrl: './cv.component.html',
    styleUrls: ['./cv.component.css'],
    imports: [
        CommonModule,
        MatCardModule,
        CvcontentComponent
    ]
})
export class CvComponent {

}
