import { IWorkType } from './../workType/workType';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRegister } from '../register/register';
import { IWorkItem } from '../workItem/workItem';

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  private empMockUrl = 'http://localhost:3000';
  private workTypeMockUrl = 'http://localhost:3001';
  private workItemMockUrl = 'http://localhost:3002';

  constructor(private http: HttpClient) {
  }

 getAllEmployees(): Observable<IRegister[]> {
   const endPoint = '/registers';
   return this.http.get<IRegister[]>(this.empMockUrl + endPoint);
 }

 deleteEmployee(id: number): Observable<IRegister> {
   const endpoint = '/registers' + '/' + id;
   return this.http.delete<IRegister>(this.empMockUrl + endpoint);
 }

 postWorkType(workType: IWorkType): Observable<IWorkType> {
  const endPoint = '/workTypes';
  return this.http.post<IWorkType>(this.workTypeMockUrl + endPoint , workType);
 }

 postWorkItem(workItem: IWorkItem): Observable<IWorkItem> {
  const endPoint = '/workItems';
  return this.http.post<IWorkItem>(this.workItemMockUrl + endPoint , workItem);
 }

 getWorkTypes(): Observable<IWorkType[]> {
  const endPoint = '/workTypes';
  return this.http.get<IWorkType[]>(this.workTypeMockUrl + endPoint);
}

}
