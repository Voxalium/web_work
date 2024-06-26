import { Component } from "@angular/core";
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: `./login.view.html`,
  styleUrl: `./login.view.scss`,
})
export class LoginComponent {}
