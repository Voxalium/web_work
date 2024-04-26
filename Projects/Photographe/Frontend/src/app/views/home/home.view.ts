import { Component, OnInit } from "@angular/core";
import { InfoComponent } from "../../components/info/info.component";
import { GalleryComponent } from "../../components/gallery/gallery.component";
import { GalleryModal } from "../../components/gallery/gallery-modal";
import { DataService } from "../../data.service";
import { Subscription } from "rxjs";
@Component({
  selector: "app-home",
  standalone: true,
  imports: [InfoComponent, GalleryComponent, GalleryModal],
  templateUrl: `./home.view.html`,
  styleUrl: `./home.view.scss`,
})
export class HomeComponent implements OnInit {
  data: any;
  private dataSubscription!: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // Subscribe to changes in the data service
    this.dataSubscription = this.dataService
      .getDataObservable()
      .subscribe((data) => {
        this.data = data;
      });
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }
}
