import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[colorRed]'
})
export class RedDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = '#ff6347'
  }
}

// @diretiva de atributo: capaz de mexer com comportamente ou estilo do componente (atribui a um componente ou tag html)