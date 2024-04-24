import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DataService } from "./data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styles: [],
})
export class AppComponent implements OnInit {
  responseData: any;
  constructor(
    private http: HttpClient,
    private dataService: DataService,
  ) {}

  ngOnInit(): void {
    this.http.get("http://localhost:8000/api/datas").subscribe(
      (data: any) => {
        this.responseData = data;
        this.dataService.setData(data);
      },
      (error) => {
        console.error("Error fetching data:", error);
      },
    );
  }
}
