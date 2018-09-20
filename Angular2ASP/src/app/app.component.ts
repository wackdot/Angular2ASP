import { Component } from "@angular/core"

@Component({
    selector: 'my-app',
    template: `<button class="colorClass" [class]='classesToApply'>Button</button>`
})
export class AppComponent {
    classesToApply: string = 'italicsClass boldClass';
}
