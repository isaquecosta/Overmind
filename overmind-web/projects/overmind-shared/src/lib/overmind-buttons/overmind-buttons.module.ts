import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { OvermindSimpleButtonModule } from "./overmind-simple-button/overmind-simple-button.module";

@NgModule({
  imports: [CommonModule, OvermindSimpleButtonModule],
  exports: [OvermindSimpleButtonModule],
})
export class OvermindButtonsModule {}
