import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { OvermindButtonsModule, SimpleInputModule } from "@overmind-shared";
import { AppLogoModule } from "../../shared/components/app-logo/app-logo.module";
import { FormularioComponent } from "./formulario.component";

@NgModule({
  declarations: [FormularioComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SimpleInputModule,
    OvermindButtonsModule,
    AppLogoModule,
  ],
  exports: [FormularioComponent],
})
export class FormularioModule {}
