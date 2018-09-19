import { Component } from "@angular/core"

@Component({
    selector: 'my-app',
    template: `<div>
                    <h1>{{ getFullName() }}</h1>
                    <img src='http://pragimtech.com/{{imagePath}}'/>
                    <my-employee></my-employee>
                    <button [disabled] = 'isDisabled'>Click Me</button>
                    <span [innerHtml]='pageHeader'></span>
                    <div [innerHtml]='badHtml'></div>
               </div>`
})
export class AppComponent {
    pageHeader: string = 'Employee Details';
    imagePath: string = 'images/logo.jpg';
    isDisabled: boolean = true;
    badHtml: string = 'Hello <script>alert("Hacked");</script> World';

    firstName: string = 'Tom';
    lastName: string = 'Hopkins';

    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }

}
