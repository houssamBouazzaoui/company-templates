import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./core/layout/shell/shell').then((m) => m.ShellComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/landing/landing/landing').then((m) => m.LandingComponent),
      },
      {
        path: 'templates/:slug',
        loadComponent: () =>
          import('./features/templates/template-detail/template-detail').then(
            (m) => m.TemplateDetailComponent,
          ),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
