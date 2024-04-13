import { Component } from "@angular/core";
import { HomeComponent } from "./views/home/home.view";
import { LoginComponent } from "./views/login/login.view";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
@Component({
  selector: "app-root",
  standalone: true,
  imports: [HomeComponent, HeaderComponent, FooterComponent, LoginComponent],
  template: ` <div class="view">
    <app-header></app-header>
    <app-home></app-home>
    <app-footer></app-footer>
  </div>`,
  styles: [],
})
export class AppComponent {}
