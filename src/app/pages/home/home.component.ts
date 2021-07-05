import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalPeopleComponent } from 'src/app/components/modal-people/modal-people.component';
import { IPlanet } from 'src/app/shared/interfaces/planet.interface';
import { PlanetsService } from 'src/app/shared/services/planets/planets.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']


})




export class HomeComponent implements OnInit {

  displayedColumns: string[] = [
    'Назва',
    'Діаметер',
    'Клімат',
    'Кількість населення'
  ];

  arrPlanets: Array<IPlanet> = [];
  clickedRows = new Set<any>();


  constructor(
    private planets: PlanetsService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getPlanets()
  }

  getPlanets(): void {
    this.planets.getPlanets().subscribe((planet: any) => {
      this.arrPlanets = planet
    })
  } 

  openDialog(event: any): void {
    const dialogRef = this.dialog.open(ModalPeopleComponent, {
      width: '50%',
      data:  event
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

}