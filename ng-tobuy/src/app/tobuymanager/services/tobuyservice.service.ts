import { Injectable } from '@angular/core';
import { Tobuy } from '../models/tobuy';
import { Shoppinglist } from '../models/shoppinglist';

@Injectable({
  providedIn: 'root'
})
export class TobuyserviceService {

  public shoppinglists: Shoppinglist[];
  public displaylist: Shoppinglist;
  private tobuys: Tobuy[];
  private nextId: number;
  private isCheck = false;

  constructor() {

    this.tobuys = [
      new Tobuy(0, "apple", false),
      new Tobuy(1, "banana", true),
      new Tobuy(2, "cake", false)
    ]
    this.nextId = 3;

    this.mockShoppinglists();
  }

  // create mock shoppinglists
  public mockShoppinglists(): Shoppinglist[] {

    var mondayTobuys = [
      new Tobuy(0, "apple", false),
    ]
    var tuesdayTobuys = [
      new Tobuy(0, "banana", true),
      new Tobuy(1, "cake", false)
    ]
    var wednesdayTobuys = [
      new Tobuy(0, "desk", true),
      new Tobuy(1, "egg", false),
      new Tobuy(2, "fish", false)
    ]
    var thursdayTobuys = [
      new Tobuy(0, "glove", true),
      new Tobuy(1, "hill", false),
      new Tobuy(2, "iPhone", false),
      new Tobuy(3, "jack", false)
    ]
    var fridayTobuys = [
      new Tobuy(0, "k", true),
      new Tobuy(1, "l", false),
      new Tobuy(2, "m", false),
      new Tobuy(3, "n", false),
      new Tobuy(4, "o", false)
    ]
    var saturdayTobuys = [
      new Tobuy(0, "p", true),
      new Tobuy(1, "q", false),
      new Tobuy(2, "r", false),
      new Tobuy(3, "s", false),
      new Tobuy(4, "t", false),
      new Tobuy(5, "u", false),
    ]
    var sundayTobuys = [
      new Tobuy(0, "v", true),
      new Tobuy(1, "w", false),
      new Tobuy(2, "x", false),
      new Tobuy(3, "y", false),
      new Tobuy(4, "z", false),
      new Tobuy(5, "a", false),
      new Tobuy(6, "b", false)
    ]

    this.shoppinglists = [
      new Shoppinglist(0, mondayTobuys, 'Monday'),
      new Shoppinglist(1, tuesdayTobuys, 'Tuesday'),
      new Shoppinglist(2, wednesdayTobuys, 'Wednesday'),
      new Shoppinglist(3, thursdayTobuys, 'Thursday'),
      new Shoppinglist(4, fridayTobuys, 'Friday'),
      new Shoppinglist(5, saturdayTobuys, 'Saturday'),
      new Shoppinglist(6, sundayTobuys, 'Sunday'),
    ]

    return this.shoppinglists;
  }
  // get all tobuy 
  public getAllTobuy(): Tobuy[] {
    return this.tobuys;
  }
  // get current shoppinglist
  public getCurrentList():Shoppinglist{
    var currentWeekDay = this.getWeekDayNow();
    return this.shoppinglists.find(x=>x.weekDay == currentWeekDay);
  }
  // get target shoppinglist
  public getTargetShoppingList(targetWeekDay:string):Shoppinglist{
    return this.shoppinglists.find(x=>x.weekDay == targetWeekDay);
  }

  shoppinglistByWeekday(weekday:string){
    return this.shoppinglists.find(x=>x.weekDay== weekday);
  }
  


  //add new item to list
  public addTobuy(text: string): void {
    this.tobuys.push(new Tobuy(this.nextId, text, false));
    this.nextId++;
  }
  // add new item to list of shoppinglists
  public addTobuyToList(text: string, currentDay: string): void {
    var currentTobuys = this.shoppinglists.find(x => x.weekDay == currentDay);
    currentTobuys.toBuys.push(new Tobuy(this.nextId, text, false));
    this.nextId++;
  }

  /*
   * remove item:
   * only display the items which are not match the id
   */
  public removeItem(id: number): void {
    this.tobuys = this.tobuys.filter(x => x.id != id);
  }

  /*
   * check the 
   */
  public isChecked(tobuy: Tobuy): void {
    this.tobuys.find(x => x.id == tobuy.id).isDone == !this.isCheck;
  }

  // get the weekDay
  public getWeekDayNow(): string {
    var date = new Date();

    const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
      'Thursday', 'Friday', 'Saturday'];

    return dayOfWeek[date.getDay()];
  }
}
