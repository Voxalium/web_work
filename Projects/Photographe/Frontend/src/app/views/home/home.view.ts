import { Component } from "@angular/core";
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { InfoComponent } from "../../components/info/info.component";
@Component({
  selector: "app-home",
  standalone: true,
  imports: [HeaderComponent, FooterComponent, InfoComponent],
  templateUrl: `./home.view.html`,
  styles: ``,
})
export class HomeComponent {}
