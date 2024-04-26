import { Component } from "@angular/core";
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: "app-gallery-modal",
  imports: [ButtonComponent],
  standalone: true,
  templateUrl: `./gallery-modal.html`,
  styleUrl: `./gallery-modal.scss`,
})
export class GalleryModal {}
