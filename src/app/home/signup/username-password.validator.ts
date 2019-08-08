import { ValidatorFn, FormGroup } from "@angular/forms";

export const userNamePasswordValidator: ValidatorFn = (formGroup: FormGroup) => {
    
    const userName = formGroup.get('userName').value;
    const password = formGroup.get('password').value;

    if (password.trim() == '') {
        return null;
    }

    // se for igual, retorna o objeto de erro
    if (userName == password) {
        return { userNamePassword: true }
    }
    return null;
}