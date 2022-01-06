import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MachintestService {

  constructor(private httpClient: HttpClient) { }
   public getAllData() {
		return this.httpClient.get('assets/dummydata.json');
	}
}
