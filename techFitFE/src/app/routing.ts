import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HabitosComponent } from './habitos_component/habitos.component';
import { DetalleHabitoComponent } from './detalleHabito_component/detalleHabito.component';

const appRoutes: Routes = [
	{ path: 'habitos', component: HabitosComponent },
	{ path: 'habito/:hid', component: DetalleHabitoComponent },
	{ path: '',redirectTo: '/habitos',pathMatch: 'full'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);