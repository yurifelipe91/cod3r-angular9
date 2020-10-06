import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  @Input('myForEm') numbers: number[];
  @Input('myForUsando') texto: string;

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) { }

  ngOnInit(): void {
    //renderizando o for na tela
    for (let number of this.numbers) {
      this.container.createEmbeddedView(
        this.template, { $implicit: number }
      )
    }
    //renderizando o for no console
    console.log(this.numbers);
    console.log(this.texto);
  }
}

//a propriedade de (myForEm), ela pega oq vem depois da palavra "em" no li do footer, no caso o array [1, 2, 3], da mesma forma o "usando"

//exemplo de diretiva estutural está sendo chamdo no footer como: *myFor