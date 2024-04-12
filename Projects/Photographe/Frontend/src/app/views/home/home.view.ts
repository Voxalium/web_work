import { Component } from "@angular/core";
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { InfoComponent } from "../../components/info/info.component";
import { GalleryComponent } from "../../components/gallery/gallery.component";
@Component({
  selector: "app-home",
  standalone: true,
  imports: [HeaderComponent, FooterComponent, InfoComponent, GalleryComponent],
  templateUrl: `./home.view.html`,
  styles: ``,
})
export class HomeComponent {}
