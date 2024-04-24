import { Component, Input } from "@angular/core";
import { FilterComponent } from "../filter/filter.component";
import { GalleryElementComponent } from "../gallery-element/gallery-element.component";
import { NgFor } from "@angular/common";

@Component({
  selector: "app-gallery",
  standalone: true,
  imports: [FilterComponent, NgFor, GalleryElementComponent],
  templateUrl: "./gallery.component.html",
  styleUrl: "./gallery.component.scss",
})
export class GalleryComponent {
  @Input() data: any;
}
