import { Component, Input } from "@angular/core";

@Component({
  selector: "app-button",
  standalone: true,
  imports: [],
  template: `<span class="button">{{ name }}</span>`,
  styleUrl: `./button.component.scss`,
})
export class ButtonComponent {
  @Input() name: string = "";
}
