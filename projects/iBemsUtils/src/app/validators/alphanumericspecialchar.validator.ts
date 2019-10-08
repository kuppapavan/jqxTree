import { AbstractControl } from '@angular/forms';

export function alphaNumericSpecialCharactersValidator(control: AbstractControl) {
  const integerPattern = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-\s]+$/;
  if (!control.value.match(integerPattern)) {
      return {inputString: true};
    }
  return null;
}
