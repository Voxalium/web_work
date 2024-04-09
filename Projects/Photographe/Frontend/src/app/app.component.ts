import { Component } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
@Component({
  selector: "app-root",
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  template: ` <main>
    <app-header></app-header>
    <app-footer></app-footer>
  </main>`,
  styles: [],
})
export class AppComponent {}
