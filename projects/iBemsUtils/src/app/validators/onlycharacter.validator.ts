import { AbstractControl } from '@angular/forms';

export function onlyCharactersValidator(control: AbstractControl) {
  const characterPattern = /^[A-Za-z]+$/;
  if (!control.value.match(characterPattern)) {
      return  {inputString: true};
    }
  return null;
}
