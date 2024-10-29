import { Routes } from '@angular/router';
import { ComponentInputExampleComponent } from './components/component-input-example/component-input-example.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { ForDirectiveExampleComponent } from './components/for-directive-example/for-directive-example.component';
import { SimpleDataTableComponent } from './components/simple-data-table/simple-data-table.component';
import { ComponentOutputExampleComponent } from './components/component-output-example/component-output-example.component';
import { TemplateDrivenFormsComponent } from './components/template-driven-forms/template-driven-forms.component';
import { ReactiveFormsExampleComponent } from './components/reactive-forms-example/reactive-forms-example.component';
import { HttpClientExampleComponent } from './components/http-client-example/http-client-example.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';

export const routes: Routes = [
  {
    path: 'component-input-example',
    component: ComponentInputExampleComponent,
  },
  {
    path: 'for-directive-example',
    component: ForDirectiveExampleComponent,
  },
  {
    path: 'event-bind-example',
    component: EventBindExampleComponent,
  },
  {
    path: 'simple-data-table',
    component: SimpleDataTableComponent,
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full',
  },
  {
    path: 'component-output-example',
    component: ComponentOutputExampleComponent,
  },
  {
    path: 'template-driven-form',
    component: TemplateDrivenFormsComponent,
  },
  {
    path: 'reactive-forms-example',
    component: ReactiveFormsExampleComponent,
  },
  {
    path: 'http-client-example',
    component: HttpClientExampleComponent,
  },
  {
    path: 'user-registration',
    component: UserRegistrationComponent,
  },
];
