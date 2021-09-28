import { Routes } from "@angular/router";

export const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('@la-bodega/main-page').then(m => m.MainPageModule),
}]