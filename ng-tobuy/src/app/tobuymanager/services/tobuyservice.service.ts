import { Injectable } from '@angular/core';
import { Tobuy } from '../models/tobuy';

@Injectable({
  providedIn: 'root'
})
export class TobuyserviceService {

  private tobuys: Tobuy[];
  private nextId: number;
  private isCheck = false;

  constructor() {
    this.tobuys = [
      new Tobuy(0, "apple", false),
      new Tobuy(1, "banana", false),
      new Tobuy(2, "cake", false)
    ]

    this.nextId = 3;
  }

  /*
   * get all tobuy 
   */
  public getAllTobuy(): Tobuy[] {
    return this.tobuys;
  }

  /*
   * add new item to list
   */
  public addTobuy(text: string): void {
    this.tobuys.push(new Tobuy(this.nextId, text, false));
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
