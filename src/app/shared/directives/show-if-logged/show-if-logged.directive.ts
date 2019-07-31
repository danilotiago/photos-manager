import { UserService } from './../../../core/user/user.service';
import { Directive, Input, ElementRef, Renderer, OnInit } from "@angular/core";

@Directive({
    selector: '[show-if-logged]'
})
export class ShowIfLoggedDirective implements OnInit {

    constructor(
        private element: ElementRef,
        private renderer: Renderer,
        private userService: UserService
    ) { }

    ngOnInit(): void {
        if(! this.userService.isLogged()) {
            this.renderer.setElementStyle(this.element.nativeElement, 'display', 'none');
        }
    }
}