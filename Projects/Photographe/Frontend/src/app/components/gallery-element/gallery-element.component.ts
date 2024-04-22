import { Component, Input } from "@angular/core";

@Component({
  selector: "app-gallery-element",
  standalone: true,
  templateUrl: `./gallery-element.component.html`,
  styleUrl: `./gallery-element.component.scss`,
})
export class GalleryElementComponent {
  @Input() title: string = "";
  @Input() img: string = "";
}
