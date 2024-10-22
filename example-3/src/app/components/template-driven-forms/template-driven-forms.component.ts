import { Component } from '@angular/core';
import { TemplateFormComponent } from './template-form/template-form.component';
import { EPerson, ManyPerson } from '../../shared/interfaces/Person';
import { SimpleDataTableComponent } from '../simple-data-table/simple-data-table.component';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-template-driven-forms',
  standalone: true,
  imports: [
    TemplateFormComponent,
    SimpleDataTableComponent,
    PersonTableComponent,
  ],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.css',
})
export class TemplateDrivenFormsComponent {
  currentPerson: EPerson | undefined;

  onPerson(person: EPerson) {
    console.log('from parent', person);
    this.currentPerson = person;
    ManyPerson.push(person);
    console.log('CurrentPerson', this.currentPerson);
  }
}
