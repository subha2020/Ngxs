import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AnimalGet } from '../models/zoo.model';
import { ZooState } from '../store/animals.state';
import { GetAnimal } from './../store/animals.actions'

@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html',
  styleUrls: ['./zoo.component.css']
})
export class ZooComponent implements OnInit {

  getAllAnimal: AnimalGet[] = [];
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.getAnimal();
  }

  @Select(ZooState.getAnimalsSelector)
  getAnimalObservable$!: Observable<AnimalGet[]>;
  getAnimal() {
    this.store.dispatch(new GetAnimal(''));
    this.getAnimalObservable$?.subscribe(res => {
        this.getAllAnimal = res;
        console.log(res);
    })
  }
}
