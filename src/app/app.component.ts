import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public draggableData = [{
    id: 1,
    name: 'venky',
    isDragged: false
  },
  {
    id: 2,
    name: 'swaroop',
    isDragged: false
  },
  {
    id: 3,
    name: 'siva',
    isDragged: true
  },
  {
    id: 4,
    name: 'tom',
    isDragged: false
  },
  {
    id: 5,
    name: 'sam',
    isDragged: false
  },
  {
    id: 6,
    name: 'tom6',
    isDragged: true
  },
  {
    id: 7,
    name: 'dan',
    isDragged: false
  }, {
    id: 8,
    name: 'testde',
    isDragged: false
  },
  {
    id: 9,
    name: 'king',
    isDragged: false
  }]

  public dataNotDraggable = []
  constructor() { }
  updateDraggableData(data: any) {
    const droppedItem = JSON.parse(data)
    this.draggableData = this.draggableData.map(item => {
      if (item.id == droppedItem.id) {
        return Object.assign({}, item, { isDragged: true })
      }
      return item;
    })

    this.dataNotDraggable.push(droppedItem);
    this.dataNotDraggable.sort((n1, n2) => n1.id - n2.id);
  }
  onDelete(index, obj) {
    this.dataNotDraggable.splice(index, 1);

    this.draggableData = this.draggableData.map(item => {
      if (item.id == obj.id) {
        return Object.assign({}, item, { isDragged: false })
      }
      return item;
    })
    console.log('dataNotDraggable', this.dataNotDraggable, this.draggableData);
  }
}
