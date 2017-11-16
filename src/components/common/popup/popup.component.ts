import {Component, Input} from "@angular/core";

@Component({
  selector: "app-common-popup",
  templateUrl: "./popup.component.html",
  styleUrls: ["./popup.component.scss"]
})
export class PopupComponent {

  @Input()
  title: string;

  @Input()
  content: any;

  @Input()
  visible: boolean;

}
