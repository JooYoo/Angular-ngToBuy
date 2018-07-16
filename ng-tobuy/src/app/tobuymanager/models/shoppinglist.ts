import { Tobuy } from "./tobuy";
import { WeekDay } from "../../../../node_modules/@angular/common";

export class Shoppinglist {
    id: number;
    toBuys: Tobuy[] = [];
    weekDay: WeekDay;
}