import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { OvermindSimpleButtonDirective } from "./overmind-simple-button.directive";

@NgModule({
  declarations: [OvermindSimpleButtonDirective],
  imports: [CommonModule],
  exports: [OvermindSimpleButtonDirective],
})
export class OvermindSimpleButtonModule {}
