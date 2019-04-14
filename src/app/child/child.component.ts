import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  onClick(): void {
    this.notify.emit('Message from the child component');
  }



  ngOnInit() {
  }

}
