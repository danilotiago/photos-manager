import { UserService } from './../../../core/user/user.service';
import { Directive, Input, ElementRef, Renderer, OnInit } from "@angular/core";

@Directive({
    selector: '[show-if-logged]'
})
export class ShowIfLoggedDirective implements OnInit {

    currentDisplay: string = '';

    constructor(
        private element: ElementRef,
        private renderer: Renderer,
        private userService: UserService
    ) { }

    // so sera carregado ao ser chamado
    ngOnInit(): void {
        
        this.currentDisplay = getComputedStyle(this.element.nativeElement).display;

        // como o getUser eh um subject, toda vez que tiver uma alteracao de usuario
        // o codigo abaixo sera chamado, pois em momento algum removemos a inscricao,
        // logo, o efeito sera aplicado e esta inscricao nunca morrera
        this.userService.getUser().subscribe(user => {
            if(user) {
                this.renderer.setElementStyle(this.element.nativeElement, 'display', this.currentDisplay);
            } else {
                this.renderer.setElementStyle(this.element.nativeElement, 'display', 'none');
            }
       });
    }  
}