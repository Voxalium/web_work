import { Component, Input } from "@angular/core";
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: "app-gallery-element",
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: `./gallery-element.component.html`,
  styleUrl: `./gallery-element.component.scss`,
})
export class GalleryElementComponent {
  @Input() title: string = "";
  @Input() img: string = "";
}
