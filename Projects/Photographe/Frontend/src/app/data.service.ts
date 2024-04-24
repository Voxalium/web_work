import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DataService {
  private sharedData: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() {}

  setData(data: any) {
    this.sharedData.next(data);
  }

  getDataObservable(): Observable<any> {
    return this.sharedData.asObservable();
  }
}
