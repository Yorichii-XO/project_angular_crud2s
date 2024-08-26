import { Component } from '@angular/core';

@Component({
  selector: 'app-my-content', // Make sure this matches
  templateUrl: './my-content.component.html',
  styleUrls: ['./my-content.component.css']
})
export class MyContentComponent {
  content: string = 'Hello, Angular marwa!';
}
