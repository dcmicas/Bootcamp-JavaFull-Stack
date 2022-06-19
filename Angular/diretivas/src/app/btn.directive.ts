import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appBtn]'
})
export class BtnDirective {

@Input()
  background: string =  '#e5932f'

  constructor(
    private refererencia: ElementRef<HTMLButtonElement>
    ){
    this.refererencia.nativeElement.style.backgroundColor = this.background
    this.refererencia.nativeElement.style.border = 'none'
    this.refererencia.nativeElement.style.color = 'white'
    this.refererencia.nativeElement.style.display = 'block'
    this.refererencia.nativeElement.style.borderRadius = '8px'
    }

    ngOnInit():void{
      this.refererencia.nativeElement.style.backgroundColor = this.background 
    }
}
