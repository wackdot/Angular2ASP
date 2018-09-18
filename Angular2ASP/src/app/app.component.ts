import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
    template: `
        <h1>Hello {{name}}</h1>
        <h2>Hello!</h2>
        <h3>Testing 123</h3>
`,
})
export class AppComponent  { name = 'Angular'; }
