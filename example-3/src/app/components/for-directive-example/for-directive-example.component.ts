import { Component } from '@angular/core';
import { Person } from '../../shared/interfaces/Person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-for-directive-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './for-directive-example.component.html',
  styleUrl: './for-directive-example.component.css',
})
export class ForDirectiveExampleComponent {
  users: Person[] = [
    {
      givenName: 'Brian',
      surName: 'Ward',
      email: 'brian.wayne.ward92@gmail.com',
      age: 47,
      address: 'Yellow Spring',
    },
    {
      givenName: 'Sean',
      surName: 'Morgan',
      email: 's.morgan19@hotmail.com',
      age: 67,
      address: 'Blythe',
    },
    {
      givenName: 'Kyle',
      surName: 'Watson',
      email: 'kyle.watson@live.com',
      age: 18,
      address: 'Federal Way',
    },
    {
      givenName: 'Nicole',
      surName: 'Johnson',
      email: 'nicole.m77@hotmail.com',
      age: 63,
      address: 'Morgan',
    },
    {
      givenName: 'Julian',
      surName: 'King',
      email: 'julian.king@ymail.com',
      age: 26,
      address: 'Moose Lake',
    },
    {
      givenName: 'Natalie',
      surName: 'Rodriguez',
      email: 'natalie_rodriguez@yahoo.com',
      age: 59,
      address: 'Seal Beach',
    },
    {
      givenName: 'Jose',
      surName: 'Ross',
      email: 'jose.ross@aol.com',
      age: 40,
      address: 'Williamstown',
    },
    {
      givenName: 'Alexander',
      surName: 'Rogers',
      email: 'arogers13@live.com',
      age: 41,
      address: 'Macdoel',
    },
    {
      givenName: 'James',
      surName: 'Barnes',
      email: 'j.barnes@yahoo.com',
      age: 65,
      address: 'Towanda',
    },
    {
      givenName: 'Michael',
      surName: 'Howard',
      email: 'michael@rocketmail.com',
      age: 56,
      address: 'Manset',
    },
  ];
}
