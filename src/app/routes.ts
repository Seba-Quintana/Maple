import { Routes } from '@angular/router';
import { HomeComponent } from './body/home/home.component';
import { AboutComponent } from './body/about/about.component';
import { ProjectsComponent } from './body/projects/projects.component';

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
		component: ProjectsComponent,
		title: 'Projects page'
	}
];

export default routeConfig;
