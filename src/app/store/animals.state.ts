import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { ApiService } from "../apiService/api.service";
import { AnimalAdd, AnimalGet } from "../models/zoo.model";
import { GetAnimal } from "./animals.actions";
import {tap} from "rxjs/operators";

export interface ZooStateModel {
    getAnimal: AnimalGet[],
    addAnimal: AnimalAdd[]
}

@State<ZooStateModel>({
    name: "Zoo",
    defaults: {
        getAnimal: [],
        addAnimal: []
    }
})

@Injectable()
export class ZooState {

    constructor(private api:ApiService){}

    @Selector()
    static getAnimalsSelector(state: ZooStateModel) {
        return state.getAnimal
    }

    @Action(GetAnimal)
    getAnimalsStateAction(ctx:StateContext<ZooStateModel>){
        return this.api.getAnimalService().pipe(tap((res:AnimalGet)=>{
            const state=ctx.getState();
            ctx.setState({
                ...state,
                getAnimal:[res]
            })
        }))
    }
}