import { ModuleWithProviders, NgModule } from "@angular/core";
import { EmailService } from "./email/email.service";

@NgModule()
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        EmailService
      ],
    };
  }
}
