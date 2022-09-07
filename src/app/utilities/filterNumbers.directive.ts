import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: 'input[numbersOnly]',
})
export class FilterNumberDirective {
  constructor(private _el: ElementRef) {}

  @HostListener('keydown', ['$event']) onInputChange(e: any) {
    if (
      [46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
      // Allow: Ctrl+A
      (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
      // Allow: Ctrl+C
      (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
      // Allow: Ctrl+V
      (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
      // Allow: Ctrl+X
      (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
      // Allow: home, end, left, right
      (e.keyCode >= 35 && e.keyCode <= 39)
    ) {
      // let it happen, don't do anything
      return;
    }
    if (!/^[0-9]*\.?[0-9]*$/.test(e.key)) {
      e.preventDefault();
    }
    if (e.target.value.includes('.')) {
      if (!/[0-9]/.test(e.key)) {
        e.preventDefault();
      }
    }
  }
}
