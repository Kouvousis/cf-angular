import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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

  person0 = {
    givenName: 'John',
    surName: 'Doe',
    email: 'john@aueb.gr',
    age: 23,
  };

  person1 = {
    givenName: 'Jane',
    surName: 'Doe',
    email: 'jane@aueb.gr',
    age: 33,
  };
}
