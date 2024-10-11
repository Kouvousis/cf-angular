import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Person } from './shared/interfaces/person';
import { PersonTableComponent } from './components/person-table/person-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'example-2';

  person = {
    givenName: 'Jim',
    surName: 'Kouv',
    email: 'jim@aueb.gr',
    age: 28,
  };

  person0: Person = {
    givenName: 'John',
    surName: 'Doe',
    email: 'john@aueb.gr',
    age: 23,
  };

  person1: Person = {
    givenName: 'Jane',
    surName: 'Doe',
    email: 'jane@aueb.gr',
    age: 33,
  };
}
