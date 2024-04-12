import { Component } from "@angular/core";
import { FilterComponent } from "../filter/filter.component";

@Component({
  selector: "app-gallery",
  standalone: true,
  imports: [FilterComponent],
  templateUrl: "./gallery.component.html",
  styleUrl: "./gallery.component.scss",
})
export class GalleryComponent {}
