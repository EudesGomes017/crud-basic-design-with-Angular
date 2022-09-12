import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: "[myfor]",
})
export class ForDirective implements OnInit{

  //pegar i qye vem depois da palavra em
  @Input('myForEm')
  numbrs: number[] = [];
  
  
  constructor(private container: ViewContainerRef, private template: TemplateRef<any>) {


   }

  ngOnInit(): void {
    for(let number of this.numbrs) {
      this.container.createEmbeddedView(this.template, {$implicit: number});
    }
  }


}
