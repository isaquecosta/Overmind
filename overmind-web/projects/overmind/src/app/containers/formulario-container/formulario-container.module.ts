import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormularioModule } from "../../features/formulario/formulario.module";
import { FormularioContainerRoutingModule } from "./formulario-container-routing.module";
import { FormularioContainerComponent } from "./formulario-container.component";

@NgModule({
  declarations: [FormularioContainerComponent],
  imports: [CommonModule, FormularioContainerRoutingModule, FormularioModule],
})
export class FormularioContainerModule {}
