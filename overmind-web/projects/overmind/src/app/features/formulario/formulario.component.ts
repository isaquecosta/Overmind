import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { equalsTo } from "../../../../../overmind-shared/src/lib";
import { FormularioDto } from "../../shared/models/formulario.dto";
import { FormInputs } from "./models/input-form.enum";

@Component({
  selector: "overmind-admin-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormularioComponent implements OnInit {
  formInputs = FormInputs;

  form: FormGroup;

  label: boolean = true;

  @Output()
  formEvent = new EventEmitter<FormularioDto>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      [FormInputs.name]: [null, [Validators.required]],
      [FormInputs.email]: [null, [Validators.required, Validators.email]],
      [FormInputs.phone]: [null, [Validators.required, Validators.pattern("^[0-9]{11}"), Validators.minLength(11)]],
      [FormInputs.pass]: [null, [Validators.required]],
      [FormInputs.validPass]: [null, [Validators.required, equalsTo("pass")]]
    });
  }

  doSend() {    
    this.formEvent.emit(this.form.getRawValue());
    this.label = false;
    this.form.reset();
    setTimeout(() => {
      this.label = true;      
    }, 1000)
  }

  labelBtn() {
    if(this.label){
      return "Enviar"
    }
    return "Enviado!"
  }
}
