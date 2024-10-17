import { Component } from '@angular/core';
import { Person } from '../../shared/interfaces/Person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-component-input-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './component-input-example.component.html',
  styleUrl: './component-input-example.component.css',
})
export class ComponentInputExampleComponent {
  person0: Person = {
    givenName: 'Jim',
    surName: 'Kouv',
    age: 28,
    email: 'kouv@aueb.gr',
    address: 'Athens',
  };

  person1: Person = {
    givenName: 'Chris',
    surName: 'Kyria',
    age: 28,
    email: 'kyria@aueb.gr',
    address: 'Athens',
  };
}
