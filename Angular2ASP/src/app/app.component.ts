import { Component } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'my-app',
    template: `
                <list-employee></list-employee>
               `
})
export class AppComponent {
    name: string = 'Tom';
}
