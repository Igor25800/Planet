import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IPeople } from 'src/app/shared/interfaces/people.interface';
import { PeopleService } from 'src/app/shared/services/people/people.service';


@Component({
  selector: 'app-modal-people',
  templateUrl: './modal-people.component.html',
  styleUrls: ['./modal-people.component.scss']
})
export class ModalPeopleComponent implements OnInit {

  arrPeople: Array<IPeople> = [];

  constructor(
    private people: PeopleService,
    public dialogRef: MatDialogRef<ModalPeopleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }


  ngOnInit(): void {
    this.getPeople()
  }

  getPeople(): void {
    this.data.residents.map(el => {
      const name = el.split('/');
      this.people.getPeople(name[5]).subscribe(people =>  {
      this.arrPeople.push(people)
       }
      )
    })
  }

}
