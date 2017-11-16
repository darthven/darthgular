import {NgModule} from "@angular/core";
import {PopupComponent} from "../components/common/popup/popup.component";
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
  declarations: [PopupComponent],
  imports: [
    BrowserModule,
  ],
  exports: [
    PopupComponent
  ],
  providers: []
})
export class CommonComponentsModule {}
