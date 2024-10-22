import { Component, Inject } from '@angular/core';
import { SimpleDataTableComponent } from '../simple-data-table/simple-data-table.component';
import { EPerson, Person } from '../../shared/interfaces/Person';
import {
  Dialog,
  DialogRef,
  DIALOG_DATA,
  DialogModule,
} from '@angular/cdk/dialog';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-component-output-example',
  standalone: true,
  imports: [SimpleDataTableComponent, DialogModule],
  templateUrl: './component-output-example.component.html',
  styleUrl: './component-output-example.component.css',
})
export class ComponentOutputExampleComponent {
  constructor(public dialog: Dialog) {}

  showPersonClicked(person: EPerson) {
    //alert(this.personTemplate(person));
    this.dialog.open(PersonDialogueComponent, {
      data: person,
    });
  }

  personTemplate(person: EPerson) {
    return `
    Person Details

    First Name: ${person.givenName}
    Last Name: ${person.surName}
    Age: ${person.age}
    Email: ${person.email}
    Address: ${person.address}
    `;
  }
}

@Component({
  imports: [PersonTableComponent],
  standalone: true,
  template: `
    <app-person-table [person]="person"></app-person-table>
    <button class="btn btn-primary btn-sm" (click)="dialogRef.close()">
      Close
    </button>
  `,
  styles: [
    `
      :host {
        display: block;
        background: #fff;
        border-radius: 8px;
        padding: 16px;
        max-width: 500px;
      }
    `,
  ],
})
export class PersonDialogueComponent {
  constructor(
    public dialogRef: DialogRef,
    @Inject(DIALOG_DATA) public person: Person
  ) {}
}
