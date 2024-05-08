import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  constructor(private http: HttpClient) {}

  getRequest(route: string, queries?: any, headers?: any) {
    let config: any = {
      responseType: "json",
      withCredentials: true,
    };

    if (headers) {
      let header = new HttpHeaders();
      Object.getOwnPropertyNames(headers).forEach((key) => {
        header = header.set(key, headers[key]);
      });
      config["headers"] = header;
    }

    if (queries) {
      let params = new HttpParams();
      Object.getOwnPropertyNames(queries).forEach((key) => {
        params.set(key, queries[key]);
      });
      config["params"] = params;
    }

    return this.http.get(route, config);
  }

  postRequest(route: string, data?: any, queries?: any, headers?: any) {
    let config: any = {
      responseType: "json",
      withCredentials: true,
    };

    if (headers) {
      let header = new HttpHeaders();
      Object.getOwnPropertyNames(headers).forEach((key) => {
        header.set(key, headers[key]);
        console.log(key, headers[key]);
      });
      config["headers"] = header;
    }

    if (queries) {
      let params = new HttpParams();
      Object.getOwnPropertyNames(queries).forEach((key) => {
        params.set(key, queries[key]);
        console.log(key, queries[key]);
      });
      config["params"] = params;
    }

    return this.http.post(route, data, config);
  }
}
