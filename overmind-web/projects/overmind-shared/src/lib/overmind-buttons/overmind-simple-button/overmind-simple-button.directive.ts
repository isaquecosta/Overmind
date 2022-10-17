import { Directive, ElementRef, Renderer2 } from "@angular/core";
import { OvermindButton } from "../models/overmind-button.model";

@Directive({
  selector: "[overmindButton]",
})
export class OvermindSimpleButtonDirective extends OvermindButton {
  constructor(
    private render2: Renderer2,
    private elementRef: ElementRef<HTMLButtonElement>
  ) {
    super();
    this.render2.addClass(this.elementRef.nativeElement, "overmind-simple-button");
    this.render2.addClass(this.elementRef.nativeElement, this.size);
    this.render2.addClass(this.elementRef.nativeElement, this.color);
  }
}
