import {
  AfterContentChecked,
  OnInit,
  Directive,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appImageValidator]',
})
export class ImageValidatorDirective implements OnInit {
  public defaultUrl =
    'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg';
  constructor(private elem: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    console.log(this.elem.nativeElement.src);
    var src = this.elem.nativeElement.src;
    if (
      src == undefined ||
      src === '' ||
      !src.startsWith('https://m.media-amazon.com')
    ) {
      this.renderer.setAttribute(
        this.elem.nativeElement,
        'src',
        this.defaultUrl
      );
    }
  }
}
