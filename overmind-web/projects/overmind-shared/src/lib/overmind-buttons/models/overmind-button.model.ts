import { Directive, Input } from "@angular/core";

@Directive()
export class OvermindButton {
  @Input()
  color:
    | "overmind-btn-primary"
    | "overmind-btn-secondary"
    | "overmind-btn-success"
    | "overmind-btn-danger" = "overmind-btn-primary";

  @Input()
  size: "overmind-btn-sm" | "overmind-btn-md" | "overmind-btn-lg" = "overmind-btn-md";
}
