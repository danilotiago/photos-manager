import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-message',
  templateUrl: './input-message.component.html',
  styleUrls: ['./input-message.component.css']
})
export class InputMessageComponent implements OnInit {

  @Input() text: string = '';

  constructor() { }

  ngOnInit() {
  }

}
