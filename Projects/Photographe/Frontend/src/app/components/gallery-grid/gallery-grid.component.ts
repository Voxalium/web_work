import { Component } from "@angular/core";
import { GalleryElementComponent } from "../gallery-element/gallery-element.component";

@Component({
  selector: "app-gallery-grid",
  standalone: true,
  imports: [GalleryElementComponent],
  templateUrl: `./gallery-grid.component.html`,
  styleUrl: `./gallery-grid.component.scss`,
})
export class GalleryGridComponent {}
