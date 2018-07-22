import { Tobuy } from "./tobuy";

export class Shoppinglist {
    id: number;
    toBuys: Tobuy[] = [];
    weekDay: string;

    constructor(id:number,toBuys:Tobuy[],weekDay:string){
        this.id=id;
        this.toBuys=toBuys;
        this.weekDay=weekDay;
    }
}