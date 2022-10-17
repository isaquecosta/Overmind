import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@overmind-shared";
@Injectable({
  providedIn: "root"
})
export class EmailService {
  constructor(private http: HttpClient) {}

  send(data) {
    return this.http.post(`${environment.apiUrl}/sendmail`, data);
  }
}
