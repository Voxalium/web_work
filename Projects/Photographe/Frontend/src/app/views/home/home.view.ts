import { Component, Input } from "@angular/core";
import { InfoComponent } from "../../components/info/info.component";
import { GalleryComponent } from "../../components/gallery/gallery.component";
@Component({
  selector: "app-home",
  standalone: true,
  imports: [InfoComponent, GalleryComponent],
  templateUrl: `./home.view.html`,
  styleUrl: `./home.view.scss`,
})
export class HomeComponent {
  @Input() data: any;
}
