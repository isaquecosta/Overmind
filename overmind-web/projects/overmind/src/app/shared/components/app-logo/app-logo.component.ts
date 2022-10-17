import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "overmind-admin-app-logo",
  templateUrl: "./app-logo.component.html",
  styleUrls: ["./app-logo.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppLogoComponent {
  @Input()
  size: "sm" | "md" | "lg" = "sm";
}
