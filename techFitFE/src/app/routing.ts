import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario_component/usuario.component';
import { HabitoComponent } from './habito_component/habito.component';
import { DiaComponent } from './dia_component/dia.component';
import { CalendarioComponent } from './calendario_component/calendario.component';

const appRoutes: Routes = [
	{ path: 'usuario', component: UsuarioComponent},
	{ path: 'habito', component: HabitoComponent },
	{ path: 'dia', component: DiaComponent },
	{ path: 'calendario', component: CalendarioComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);