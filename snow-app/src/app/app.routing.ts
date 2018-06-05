import { NonExistetComponent } from './users/non-existet/non-existet.component';
import { ProfilComponent } from './users/profil/profil.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { FeedComponent } from './feed/feed.component';

const appRoutes: Routes = [
    { path: 'users', component: UsersComponent },
    { path: 'users/:id', component: ProfilComponent },
    { path: 'login', component: LoginComponent },
    { path: 'nonExistent', component: NonExistetComponent },
    { path: '', component: FeedComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
