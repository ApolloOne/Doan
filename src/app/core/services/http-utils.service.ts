import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';


@Injectable()
export class HttpUtilsService {
	constructor(
		private http: HttpClient
	) { }
	getFindHTTPParams(queryParams): HttpParams {
		const params = new HttpParams()
			.set('lastNamefilter', queryParams.filter)
			.set('sortOrder', queryParams.sortOrder)
			.set('sortField', queryParams.sortField)
			.set('pageNumber', queryParams.pageNumber.toString())
			.set('pageSize', queryParams.pageSize.toString());

		return params;
	}

	httpOption = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
		})
	}
	URLAPI: string = "35.239.173.22:1405/v1/auth/login";

	getAPIUser(): Observable<{}> {
		return this.http.get<{}>(this.URLAPI, this.httpOption).pipe(
			tap(result => console.log(result)),
			catchError(err => of([]))
		);
	};
	postAPIUser(user): Observable<{}> {
		return this.http.post<{}>(this.URLAPI, user, this.httpOption).pipe(
			tap(result => console.log(result))
		);
	};
}