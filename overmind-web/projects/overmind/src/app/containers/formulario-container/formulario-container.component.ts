import { Component, OnDestroy, OnInit } from "@angular/core";
import { EmailService } from "../../core/email/email.service";
import { FormularioDto } from "../../shared/models/formulario.dto";

@Component({
  templateUrl: "./formulario-container.component.html",
  styleUrls: ["./formulario-container.component.scss"],
})
export class FormularioContainerComponent implements OnInit, OnDestroy {
  constructor(
    private emailService: EmailService,
  ) {}

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }

  doSend(formDto: FormularioDto) {
    console.log(formDto);
    this.emailService.send(formDto).subscribe(
      err => {
        console.log(err);
      }
    );
  }
}
