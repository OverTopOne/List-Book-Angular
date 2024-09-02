import { Routes } from '@angular/router';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { LivroDadosComponent } from './livro-dados/livro-dados.component';

export const appRoutes: Routes = [
  { path: 'dados', component: LivroDadosComponent },
  { path: 'lista', component: LivroListaComponent },
  { path: '', redirectTo: '/lista', pathMatch: 'full' }
  
];
