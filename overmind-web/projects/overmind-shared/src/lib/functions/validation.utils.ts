import { FormControl, FormGroup } from '@angular/forms';

export function equalsTo(otherField: string) {
  const validator = (formControl: FormControl) => {

    if (!formControl.root || !(<FormGroup>formControl.root).controls) {
      return null;
    }

    const field = (<FormGroup>formControl.root).get(otherField);


    if (field.value !== formControl.value) {
      return { equalsTo : otherField };
    }

    return null;
  };
  return validator;
}
