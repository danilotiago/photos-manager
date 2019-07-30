import { PlatformDetectorService } from './../../../core/platform/platform-detector.service';
import { element } from 'protractor';
import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[immediateClick]'
})
export class ImmediateClickDirective implements OnInit {

    constructor(
        private element: ElementRef,
        private platformDetectorService: PlatformDetectorService
    ) { }

    ngOnInit() {
        if (this.platformDetectorService.isPlatformBrowser()) {
            this.element.nativeElement.click();
        }
    }

}