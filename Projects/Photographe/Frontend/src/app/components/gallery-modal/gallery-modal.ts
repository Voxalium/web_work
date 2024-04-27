import { Component } from "@angular/core";

@Component({
  selector: "app-gallery-modal",
  standalone: true,
  templateUrl: "./gallery-modal.html",
  styleUrl: "./gallery-modal.scss",
})
export class GalleryModal {
  public showModal: boolean = true;

  public toggleModal(): void {
    this.showModal = !this.showModal;
  }
}
