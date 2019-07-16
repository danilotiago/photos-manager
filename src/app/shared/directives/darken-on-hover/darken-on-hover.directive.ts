import { Directive, ElementRef, HostListener, Renderer, Input } from "@angular/core";

@Directive({
    selector: '[appDarkenOnHover]'
})
export class DarkenOnHoverDirective {

    @Input() brightness: string = '70%';

    // ElementRef: Obtem o elemento do DOM do component que a diretiva foi adicionada
    // Renderer: Artefato do angular que protege de manipular o DOM diretamente, isso
    // protege no caso de ser renderizado essa aplicacao no backend
    constructor(
        private el: ElementRef,
        private render: Renderer
    ) { }

    // escuta a acao do elemento hospedeiro (do component que a diretiva foi adicionada)
    // e chama a funcao darkenOn()
    // podemos passar a acao JS que queremos chamar a funcao
    @HostListener('mouseover')
    darkenOn() {
        // passamos o elemento nativo e as configuracoes de estilo
        this.render.setElementStyle(
            this.el.nativeElement, 
            'filter', `brightness(${this.brightness})`
        );
    }

    @HostListener('mouseleave')
    darkenOff() {
        this.render.setElementStyle(
            this.el.nativeElement, 
            'filter', 'brightness(100%)'
        );
    }
}