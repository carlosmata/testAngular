import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './routes/home.component';
import { DetailComponent } from './routes/detail.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'detail/:id', component: DetailComponent }
];

export const routing = RouterModule.forRoot(routes);