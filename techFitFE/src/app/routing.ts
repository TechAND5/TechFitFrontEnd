import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario_component/usuario.component';
import { HabitosComponent } from './habitos_component/habitos.component';
import { DiaComponent } from './dia_component/dia.component';
import { DetalleHabitoComponent } from './detalleHabito_component/detalleHabito.component';

const appRoutes: Routes = [
	{ path: 'habitos', component: HabitosComponent },
	{ path: 'habitos/:hid', component: DetalleHabitoComponent },
	{ path: '',redirectTo: '/habitos',pathMatch: 'full'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);