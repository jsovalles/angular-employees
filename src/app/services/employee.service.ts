import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Employee } from '../common/employee';
import Swal from 'sweetalert2';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url = "http://localhost:8080/employees";

  constructor(private httpClient: HttpClient) { }

  getEmployees(): Observable<Employee[]> {

    return this.httpClient.get<Employee[]>(this.url);
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(`${this.url}/?bossId=${employee.bossId}`, employee).pipe(
      catchError(e => {

        if (e.status == 500) {
          Swal.fire('Error al crear', 'Empleado ya existe', 'error');
          return throwError(e);
        }

        Swal.fire('Error al crear', 'Datos erroneos, por favor verifique', 'error');
        return throwError(e);
      })
    );
  }
}
