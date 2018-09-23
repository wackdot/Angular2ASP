import { Component } from "@angular/core"

@Component({
    selector: 'my-app',
    template: ` <button class="colorClass" [class]='classesToApply'>My Button</button>
                <br/><br/>
                <button class="colorClass italicsClass boldClass" [class.boldClass]='applyBoldClass'>My Button</button>
                <br/><br/>
                <button class="colorClass" [ngClass]='addClasses()'>My Button</button>
               `
})
export class AppComponent {
    classesToApply: string = 'italicsClass boldClass';
    applyBoldClass: boolean = true;
    applyItalicsClass: boolean = false;

    addClasses() {
        let classes = {
            boldClass: this.applyBoldClass,
            italicsClass: this.applyItalicsClass            
        };
        return classes;
    }
}
