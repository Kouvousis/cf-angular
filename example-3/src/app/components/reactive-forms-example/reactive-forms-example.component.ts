import { Component } from '@angular/core';
import { ReactiveFormStructureComponent } from './reactive-form-structure/reactive-form-structure.component';
import { PersonTableComponent } from '../person-table/person-table.component';
import { SimpleDataTableComponent } from '../simple-data-table/simple-data-table.component';
import { EPerson, ManyPerson } from '../../shared/interfaces/Person';

@Component({
  selector: 'app-reactive-forms-example',
  standalone: true,
  imports: [
    ReactiveFormStructureComponent,
    PersonTableComponent,
    SimpleDataTableComponent,
  ],
  templateUrl: './reactive-forms-example.component.html',
  styleUrl: './reactive-forms-example.component.css',
})
export class ReactiveFormsExampleComponent {
  currentPerson: EPerson | undefined;
  onPerson(person: EPerson) {
    console.log('Parent>>>>>>>>>>>', person);
    this.currentPerson = person;
    ManyPerson.push(person);
  }
}
