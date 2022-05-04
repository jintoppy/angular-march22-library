import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-shared-components',
  template: `
    <p>
      shared-components modified another
    </p>
  `,
  styles: [
  ]
})
export class SharedComponentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
