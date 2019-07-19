import { AbstractControl } from "@angular/forms";

export function lowerCaseValidator(control: AbstractControl) {

    // efetua o teste do caso invalido
    // se invalido, retorna um objeto com qualquer nome de atributo e
    // o valor true
    // se nao, retorna nulo
    if (control.value.trim() && ! /^[a-z0-9_\-]+$/.test(control.value)) {
        return { lowercase: true };
    }
    return null;
}