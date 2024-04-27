import { Component } from "@angular/core";
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: "app-add-modal",
  imports: [ButtonComponent],
  standalone: true,
  templateUrl: `./add-modal.html`,
  styleUrl: `./add-modal.scss`,
})
export class AddModal {}
