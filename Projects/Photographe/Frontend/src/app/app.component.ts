import { Component } from "@angular/core";
import { HomeComponent } from "./views/home/home.view";
@Component({
  selector: "app-root",
  standalone: true,
  imports: [HomeComponent],
  template: `<app-home></app-home>`,
  styles: [],
})
export class AppComponent {}
