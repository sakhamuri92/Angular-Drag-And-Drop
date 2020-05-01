import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appDroppableDirective]'
})
export class DroppableDirectiveDirective {
  @Output() draggedItem = new EventEmitter();

  constructor() { }
  // Drag Over listener
  @HostListener('dragenter', ['$event']) onDragOver(evt) {
    evt.preventDefault(); evt.stopPropagation();
    return false;
  }
  // Drag Leave listener
  @HostListener('dragover', ['$event']) onDragLeave(evt) {
    evt.preventDefault(); evt.stopPropagation(); return false;
  }
  // Drop listener
  @HostListener('drop', ['$event']) onDrop(event) {
    this.draggedItem.emit(event.dataTransfer.getData('DATA'));
  }
}
