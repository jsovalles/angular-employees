import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/common/employee';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styleUrls: ['./employees-form.component.css']
})
export class EmployeesFormComponent implements OnInit {

  employee: Employee = new Employee();

  public errores: string[];

  constructor(private employeeService: EmployeeService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  createEmployee(): void {
    this.employeeService.createEmployee(this.employee).subscribe(
      employee => {
        this.router.navigate(['/employees'])
        swal.fire('Nuevo Empleado', `Empleado ${employee.fullName} creado exitosamente`, 'success')
      },
      err => {
        this.errores = err.error.errors as string[];
      })
  }


}
