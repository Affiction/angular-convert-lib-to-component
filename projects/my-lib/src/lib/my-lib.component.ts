import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-my-lib',
  template: `
    <p>
      Text should be here --> <strong>{{ this.text }} !!!</strong>
    </p>
  `,
  styles: [
    `
      :host {
        color: red;
      }

      strong {
        font-size: 25px;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class MyLibComponent implements OnInit {
  @Input() text: string = '';

  ngOnInit(): void {
    console.log('Component initiated!');
  }
}
