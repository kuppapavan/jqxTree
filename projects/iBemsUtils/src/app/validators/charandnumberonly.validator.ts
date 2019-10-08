import { AbstractControl } from '@angular/forms';

export function onlyCharactersAndNumberValidator(control: AbstractControl) {
  const characterPattern = /^[ A-Za-z0-9_./]*$/;
  if (!control.value.match(characterPattern)) {
      return {inputString: true};
    }
  return null;
}
