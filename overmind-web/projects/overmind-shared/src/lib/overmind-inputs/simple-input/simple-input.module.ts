import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SimpleInputComponent } from "./simple-input.component";

@NgModule({
  declarations: [SimpleInputComponent],
  imports: [CommonModule],
  exports: [SimpleInputComponent],
})
export class SimpleInputModule {}
