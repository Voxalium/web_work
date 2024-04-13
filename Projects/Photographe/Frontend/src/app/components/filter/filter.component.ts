import { Component } from "@angular/core";
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: "app-filter",
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: `./filter.component.html`,
  styleUrl: `./filter.component.scss`,
})
export class FilterComponent {}
