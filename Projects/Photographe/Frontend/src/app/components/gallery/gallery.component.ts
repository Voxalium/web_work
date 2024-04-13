import { Component } from "@angular/core";
import { FilterComponent } from "../filter/filter.component";
import { GalleryGridComponent } from "../gallery-grid/gallery-grid.component";

@Component({
  selector: "app-gallery",
  standalone: true,
  imports: [FilterComponent, GalleryGridComponent],
  templateUrl: "./gallery.component.html",
  styleUrl: "./gallery.component.scss",
})
export class GalleryComponent {}
