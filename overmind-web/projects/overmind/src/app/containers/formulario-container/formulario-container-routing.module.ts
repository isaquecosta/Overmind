import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormularioContainerComponent } from "./formulario-container.component";

const routes: Routes = [
  {
    path: "",
    component: FormularioContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormularioContainerRoutingModule {}
