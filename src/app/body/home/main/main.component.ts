import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
	selector: 'app-main',
	standalone: true,
	imports: [
		CommonModule,
		MatCardModule,
	],
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css'],
	animations: [
		trigger('openClose', [
			state('true', style({
				opacity: 1,
				backgroundColor: 'var(--primary)'
			})),
			state('false', style({
				opacity: 0.8,
				backgroundColor: 'var(--secondary)'
			})),/*
			transition('true => false', [
				animate('1s')
			]),
			transition('false => true', [
				animate('1s')
			]),*/
			transition('* => false', [
				animate('2s')
			]),
			transition('* => true', [
				animate('2s')
			]),
		]),


		trigger('flyInOut', [
			state('in', style({ transform: 'translateX(0)' })),
			transition('void => *', [
			  style({ transform: 'translateX(-100%)' }),
			  animate("0.5s")
			]),
			transition('* => void', [
			  animate("0.5s", style({ transform: 'translateX(100%)' }))
			])
		  ])

	],

})

export class MainComponent {
	isOpen: boolean = true;

}
