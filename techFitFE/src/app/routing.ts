import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HabitosComponent } from './habitos_component/habitos.component';
import { DetalleHabitoComponent } from './detalleHabito_component/detalleHabito.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './login/logout.component';
import { CrearHabitoComponent } from './crearHabito_component/crearHabito.component';

const appRoutes: Routes = [
	{ path: 'habitos', component: HabitosComponent },
	{ path: 'habito/:hid', component: DetalleHabitoComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'logout', component : LogoutComponent },
	{ path: 'crearHabito', component: CrearHabitoComponent },
	{ path: '',redirectTo: '/login',pathMatch: 'full'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);