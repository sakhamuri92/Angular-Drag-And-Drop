import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDraggleDirective]'
})
export class DraggleDirectiveDirective {
  @Input() public selectedData;
  constructor() { }
  // Drag Start Listener 
  @HostListener('dragstart', ['$event']) onDragStart(event) {
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('DATA', JSON.stringify(this.selectedData));
    event.dataTransfer.setData('EID', event.target.getAttribute('id'));
    event.dataTransfer.setDragImage(event.target, 0, 0); return true;
  }
  // Drag Over listener
  @HostListener('dragenter', ['$event']) onDragOver(evt) {
    evt.preventDefault(); evt.stopPropagation(); return false;
  }
  // Drag Leave listener 
  @HostListener('dragover', ['$event']) onDragLeave(evt) {
    evt.preventDefault(); evt.stopPropagation();
    return false;
  }
}
