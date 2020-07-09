import { Component } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MatChipInputEvent } from '@angular/material/chips';


export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  title: string = 'Quick Message';
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
   readonly separatorKeysCodes: number[] = [ENTER, COMMA];
    fruits: Fruit[] = [
    {name: 'React'},
    {name: 'Angular'},

  ];
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {
      this.fruits.push({name: value.trim()});
    }
    if (input) {
      input.value = '';
    }
  }
  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);
    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Chat', cols: 1, rows: 2 },

        ];
      }

      return [
        { title: 'Chat', cols: 1, rows: 2 },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) { }
}
