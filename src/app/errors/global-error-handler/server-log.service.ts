import { ServerLog } from './server-log';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from '../../../environments/environment';

const API: string = environment.LOG_API_URL;

@Injectable({
    providedIn: 'root'
})
export class ServerLogService {

    constructor(private http: HttpClient) { }

    log(log: ServerLog) {
        return this.http.post(`${API}/infra/log`, log);
    }
}