import { Component } from '@angular/core';
import { Race } from './race';
import { RACES } from './mocks';

@Component({
  selector: 'my-races',
  templateUrl: 'app/races.component.html',
  styleUrls: ['app/races.component.css']
})
export class RacesComponent {
  races: Race[];

  ngOnInit(){
    this.races = RACES;
  }

  totalCost(){
    let cost = 0;
    for(let race of this.races){
      if(race.isRacing){
        cost += race.entryFee;
      }
    }
    return cost;
  }
}
