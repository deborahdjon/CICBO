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

import { Room } from '../model/room';
import { RoomConstructor } from '../model/roomConstructor';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class RoomService {

    protected basePath = 'http://localhost3000:';
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
     * Add a new room
     *
     * @param room Room object that needs to be added to the room list
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addRoom(room: RoomConstructor, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public addRoom(room: RoomConstructor, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public addRoom(room: RoomConstructor, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public addRoom(room: RoomConstructor, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (room === null || room === undefined) {
            throw new Error('Required parameter room was null or undefined when calling addRoom.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/room`,
            room,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Deletes a room
     * Deletes a room if not in use. If it is in use, it sets the active-flag to false.  In a later version, this could be extended to automatically deleting inactive rooms if they are not in use
     * @param roomNr room number to delete
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteRoom(roomNr: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteRoom(roomNr: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteRoom(roomNr: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteRoom(roomNr: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (roomNr === null || roomNr === undefined) {
            throw new Error('Required parameter roomNr was null or undefined when calling deleteRoom.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<any>(`${this.basePath}/room/${encodeURIComponent(String(roomNr))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List all rooms
     *
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listRooms(observe?: 'body', reportProgress?: boolean): Observable<Array<Room>>;
    public listRooms(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Room>>>;
    public listRooms(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Room>>>;
    public listRooms(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<Array<Room>>(`${this.basePath}/room`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}