import {
  Component,
  ElementRef,
  forwardRef,
  Injector,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from "@angular/core";
import {
  ControlValueAccessor,
  NgControl,
  NG_VALUE_ACCESSOR,
} from "@angular/forms";

@Component({
  selector: "overmind-simple-input",
  templateUrl: "./simple-input.component.html",
  styleUrls: ["./simple-input.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SimpleInputComponent),
      multi: true,
    },
  ],
})
export class SimpleInputComponent implements OnInit, ControlValueAccessor {
  @Input()
  title: string;

  @Input()
  max: number = 30;

  @Input()
  type: "text" | "password" | "email" = "text";

  focused = false;

  @ViewChild("inputRef", { static: true, read: ElementRef })
  inputElementRef: ElementRef<HTMLInputElement>;

  onChange: any;
  onTouched: any;
  disabled: boolean;
  ngControl: NgControl;
  valid: boolean;
  constructor(private render2: Renderer2, private injector: Injector) {}

  ngOnInit(): void {
    this.ngControl = this.injector.get(NgControl);
  }

  writeValue(value: string): void {
    const normalizedValue = value == null ? "" : value;
    this.render2.setProperty(
      this.inputElementRef.nativeElement,
      "value",
      normalizedValue
    );
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.render2.setProperty(
      this.inputElementRef.nativeElement,
      "disabled",
      isDisabled
    );
  }

  onInputChange() {
    this.onChange?.(this.inputElementRef.nativeElement.value);
  }
}
