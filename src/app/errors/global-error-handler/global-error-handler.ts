import { ErrorHandler, Injectable, Injector } from "@angular/core";
import * as StackTrace from 'stacktrace-js';
import { LocationStrategy, PathLocationStrategy } from "@angular/common";
import { UserService } from "../../core/user/user.service";
import { ServerLogService } from "./server-log.service";

// ja foi provido pelo error.module, logo, nao precisa de provededIn
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    
    // obtem um injetor de dependencia
    constructor(private injector: Injector) { }

    handleError(error: any): void {

        console.log('passei pelo handler');

        // faz uma injecao de dependencia dentro do metodo manualmente para que seja
        // garantido que o error esteja pronto
        const location = this.injector.get(LocationStrategy);
        const userService = this.injector.get(UserService);
        const serverLogService = this.injector.get(ServerLogService);

        // obtem a url que o usuario esta, se nao for da instancia correta joga url em branco
        const url = location instanceof PathLocationStrategy
            ? location.path()
            : '';

        const message = error.message
            ? error.message
            : error.toString();

        StackTrace.fromError(error)
            .then(stackFrames => {
                const stackAsString = stackFrames
                    .map(st => st.toString())
                    .join('\n');

                console.log(message);
                console.log(stackAsString);

                serverLogService
                    .log({message, url, userName: userService.getUsername(), stack: stackAsString})
                    .subscribe(() => {
                        console.log('error logged on server');
    
                    }, err => {
                        console.log(err);
                        console.log('Fail to send error log to server');
                    });               
            })
    }
}