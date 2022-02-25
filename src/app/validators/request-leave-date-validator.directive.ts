import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";


@Directive({
  selector: '[appDateValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: DateValidatorDirective,
    multi: true}]

})

export class DateValidatorDirective implements Validator{

  constructor(){}

  
  validate(control: AbstractControl): ValidationErrors | null {
    throw new Error("Method not implemented.");
  }

}
