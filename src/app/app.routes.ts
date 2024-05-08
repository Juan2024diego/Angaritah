import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ClimateComponent } from './components/climate/climate.component';


export const routes: Routes = [
    {path:'', component: LoginComponent},
    {path:'climate', component: ClimateComponent}
];
