import { Component } from "@angular/core";


@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css'],
})
export class EmployeeListComponent {
    employees: any[] = [
        { code: 'emp101', name: 'tom', gender: 'male', annualSalary: 5500, dateOfbirth: '25/6/1988' },
        { code: 'emp102', name: 'alex', gender: 'male', annualSalary: 5700.95, dateOfbirth: '9/6/1982' },
        { code: 'emp103', name: 'mike', gender: 'male', annualSalary: 5900, dateOfbirth: '12/8/1979' },
        { code: 'emp104', name: 'mary', gender: 'female', annualSalary: 6500.90, dateOfbirth: '14/10/1980' },
    ];
}