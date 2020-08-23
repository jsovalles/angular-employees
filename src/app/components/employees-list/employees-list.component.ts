import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/common/employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService} from 'src/app/services/employee.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.listEmployees();
  }


  listEmployees() {
    this.employeeService.getEmployees().subscribe(employees => this.employees = employees)
  }

}
