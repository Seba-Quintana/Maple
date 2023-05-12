import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routeConfig: Routes = [
	{
		path: '',
		component: HomeComponent,
		title: 'Home page'
	},
	{
		path: 'about',
		component: AboutComponent,
		title: 'About page'
	},
	{
		path: 'projects',
		component: AboutComponent,
		title: 'Projects page'
	}
];

export default routeConfig;
