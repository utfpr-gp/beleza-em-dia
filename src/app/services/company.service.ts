import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError,Subject} from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  url = 'http://localhost:3000/empresas';
  constructor(private httpClient: HttpClient) { }

  httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.url)
    .pipe(
      retry(2),
      catchError(this.handleError))

  }

  getCompanyByCity(idCity: number): Observable<Company[]>{
    return this.httpClient.get<Company[]>(this.url + '/cidade/'+idCity)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getCompanyByName(name: String,idCity: number): Observable<Company[]>{
    if(name.length == 0)
      return  this.getCompanyByCity(idCity);

    return this.httpClient.get<Company[]>(this.url + '?nome='+name+'&cidade='+idCity)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Erro ocorreu no lado do client
        errorMessage = error.error.message;
      } else {
        // Erro ocorreu no lado do servidor
        errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
  };
}
