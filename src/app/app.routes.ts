import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Accueil' },
  { path: 'skills', component: SkillsComponent, title: 'Compétences' },
  { path: 'services', component: ServicesComponent, title: 'Services' },
  { path: 'contact', component: ContactComponent, title: 'Contact' },
  { path: '**', redirectTo: '' } // Redirection pour les routes inconnues
];