import { UserService } from './../../../core/user/user.service';
import { Photo } from './../../../photos/photo/photo.model';
import { Directive, Input, ElementRef, Renderer, OnInit } from "@angular/core";

@Directive({
    selector: '[photo-owner-only]'
})
export class PhotoOwnerOnlyDirective implements OnInit {

    @Input() photo: Photo;

    constructor(
        private element: ElementRef,
        private renderer: Renderer,
        private userService: UserService
    ) { }

    ngOnInit() {
        this.userService.getUser()
            .subscribe(user => {
                if (!user || user.id !== this.photo.userId) {
                    this.renderer.setElementStyle(this.element.nativeElement, 'display', 'none');
                }
            })
    }
}