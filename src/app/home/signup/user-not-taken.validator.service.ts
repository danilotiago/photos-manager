import { SignupService } from './signup.service';
import { Injectable } from "@angular/core";
import { AbstractControl } from '@angular/forms';
import { debounceTime, switchMap, map, first } from 'rxjs/operators';

// quem fara a injecao sera o signup.component
@Injectable()
export class UserNotTakenValidatorService {
    
    constructor(private signupService: SignupService) { }

    // funcao que retorna a funcao validadora,
    // precisamos exporta-la de dentro de uma classe para que possamos
    // usar o signupService
    checkUserNameTaken() {
        return (control: AbstractControl) => {
            return control.valueChanges // retorna um observable para a alteracao do valor, por ser uma validacao assincrona
                .pipe(debounceTime(500)) // aplica o delay
                .pipe(switchMap(username => // switchMap => para de ouvir o observable anterior e foca no abaixo
                    this.signupService.chackUsernameTaken(username)
                ))
                // aplica o map para conversao do resultado (pois por default o 
                // resultado eh apenas true ou false, logo, temos que adaptar a 
                // resposta)
                .pipe(map(isTaken => isTaken ? { userNametaken: true } : null)) 
                .pipe(first()) // completa o observable do signupService com o primeiro valor emitido

        }
    }
}