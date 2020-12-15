/**
 * CICBO
 * This is the API of CICBO - CICBO is a Corona Business Optimizer.  By Deborah Djon and Ferdinand Koenig for Web Engineering 2 at Cooperative State University Stuttgart (DHBW Stuttgart)  Lecturer: Danny Amor (DXC)
 *
 * OpenAPI spec version: 2.2
 * Contact: inf19211@lehre.dhbw-stuttgart.de
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable} from "rxjs";

import { AlarmQueryObject } from '../model/alarmQueryObject';
import { ContactList } from '../model/contactList';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class AlarmService {

  protected basePath = 'http://localhost3000';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Creates contact list with potential contaminated persons
     *
     * @param searchFilter Alarm query object
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createContactList(searchFilter: AlarmQueryObject, observe?: 'body', reportProgress?: boolean): Observable<ContactList>;
    public createContactList(searchFilter: AlarmQueryObject, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ContactList>>;
    public createContactList(searchFilter: AlarmQueryObject, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ContactList>>;
    public createContactList(searchFilter: AlarmQueryObject, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (searchFilter === null || searchFilter === undefined) {
            throw new Error('Required parameter searchFilter was null or undefined when calling createContactList.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.get<ContactList>(`${this.basePath}/alarm`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
