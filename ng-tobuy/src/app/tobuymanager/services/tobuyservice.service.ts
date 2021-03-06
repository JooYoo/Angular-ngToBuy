import { Injectable } from '@angular/core';
import { Tobuy } from '../models/tobuy';
import { Shoppinglist } from '../models/shoppinglist';
import { BehaviorSubject } from '../../../../node_modules/rxjs';
import { forEach } from '@angular/router/src/utils/collection';


@Injectable({
  providedIn: 'root'
})
export class TobuyserviceService {

  public shoppinglists: Shoppinglist[];
  public displaylist: Shoppinglist;
  
  private nextId: number;
  private isInit: boolean = true;

  private messageSource = new BehaviorSubject<string>(this.getWeekDayNow());
  currentWeekDay = this.messageSource.asObservable();

  constructor() {
    
    this.nextId = 3;

    
    this.mockShoppinglists();
    
  }

  // pass data between unrelated components
  changeMessage(message: string){
    this.messageSource.next(message)
  }

  // create mock shoppinglists
  public mockShoppinglists(): Shoppinglist[] {

    var mondayTobuys = [
      new Tobuy(0, "eg. apple", false),
    ]
    var tuesdayTobuys = [
      new Tobuy(0, "eg. Huawei", true),
    ]
    var wednesdayTobuys = [
      new Tobuy(0, "eg. Oppo", true),
    ]
    var thursdayTobuys = [
      new Tobuy(0, "eg. Honor", true),
    ]
    var fridayTobuys = [
      new Tobuy(0, "eg. Smartisan", true),
    ]
    var saturdayTobuys = [
      new Tobuy(0, "eg. Vivo", true),
    ]
    var sundayTobuys = [
      new Tobuy(0, "eg. Mi", true),
    ]
 
    var test = new Shoppinglist(3, this.toLoad('3',thursdayTobuys), 'Thursday')

    this.shoppinglists = [
      new Shoppinglist(0, this.toLoad('0',mondayTobuys), 'Monday'),
      new Shoppinglist(1, this.toLoad('1',tuesdayTobuys), 'Tuesday'),
      new Shoppinglist(2, this.toLoad('2',wednesdayTobuys), 'Wednesday'),
      new Shoppinglist(3, this.toLoad('3',thursdayTobuys), 'Thursday'),
      new Shoppinglist(4, this.toLoad('4',fridayTobuys), 'Friday'),
      new Shoppinglist(5, this.toLoad('5',saturdayTobuys), 'Saturday'),
      new Shoppinglist(6, this.toLoad('6',sundayTobuys), 'Sunday'),
    ]

    return this.shoppinglists;
  }

  // add new item to target list
  public addTobuyToList(text: string, currentDay: string): void {
    var currentTobuys = this.shoppinglists.find(x => x.weekDay == currentDay);
    currentTobuys.toBuys.push(new Tobuy(this.nextId, text, false));
    
    // save Data
    this.toSave(currentTobuys);

    this.nextId++;
  }

    /*
   * remove item:
   * return the items which not included selected id
   */
  public removeItem(id: number, currentDay: string): void {
    var currentTobuys = this.shoppinglists.find(x=>x.weekDay == currentDay)
    currentTobuys.toBuys = currentTobuys.toBuys.filter(x=>x.id != id)
    console.log("Filter Result:"+currentTobuys.toBuys)
    // save result
    this.toSave(currentTobuys)
  }


  public checkItem(tobuy:Tobuy, currentDay: string){
    //console.log("init status:" + tobuy.isDone)
    //change the check status
    //tobuy.isDone = !tobuy.isDone
    
    

     //var switcher = tobuy.isDone
       tobuy.isDone = !tobuy.isDone
     // console.log(tobuy.isDone)


     // get current shoppinglist
     var currentShoppinglist = this.shoppinglists.find(x=>x.weekDay==currentDay)

    
    // currentShoppinglist.toBuys.forEach(function(element){
    //   element.isDone=!element.isDone
    // })

     // save the result
    //  this.toSave(currentShoppinglist)
     localStorage.setItem(currentShoppinglist.id.toString(),JSON.stringify(currentShoppinglist));
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
  


  // get today's weekDay 
  public getWeekDayNow(): string {
    var date = new Date();
    const dayOfWeek = [ 'Sunday','Monday', 'Tuesday', 'Wednesday',
      'Thursday', 'Friday', 'Saturday'];
    return dayOfWeek[date.getDay()];
  }

  // to save data
  public toSave(shoppingList:Shoppinglist){
    localStorage.setItem(shoppingList.id.toString(),JSON.stringify(shoppingList));
  }

  /*
   * to load data
   * if the list is empty, return initial data
   */
  public toLoad(key:string, initList: Tobuy[]):any{
    var shoppingList = JSON.parse(localStorage.getItem(key));

    if(shoppingList === null){
      return initList
    }

    return shoppingList.toBuys;
  }




   // get weekDay name
   private getWeekDayName(dayIndex:number): string{
    const dayOfWeek = [ 'Monday', 'Tuesday', 'Wednesday',
      'Thursday', 'Friday', 'Saturday','Sunday'];

      return dayOfWeek[dayIndex];
  }
}
