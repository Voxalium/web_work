import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";

import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./views/home/home.view";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [HeaderComponent, HomeComponent, FooterComponent, HttpClientModule],
  template: ` <div class="view">
    <app-header></app-header>
    <app-home></app-home>
    <app-footer></app-footer>
  </div>`,
  styles: [],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.http.get("http://localhost:8000/api/datas").subscribe(
      (data: any) => {
        console.log("Data from server:", data);
      },
      (error) => {
        console.error("Error fetching data:", error);
      },
    );
  }
}
