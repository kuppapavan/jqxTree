import { AbstractControl } from '@angular/forms';

export function onlyIntegerValidator(control: AbstractControl) {
  const integerPattern = /^[0-9]+$/;
  if (!control.value.match(integerPattern)) {
      return  {inputString: true};
    }
  return null;
}
