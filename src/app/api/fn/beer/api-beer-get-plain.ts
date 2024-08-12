/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Beer } from '../../models/beer';

export interface ApiBeerGet$Plain$Params {
  id?: number;
}

export function apiBeerGet$Plain(http: HttpClient, rootUrl: string, params?: ApiBeerGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Beer>> {
  const rb = new RequestBuilder(rootUrl, apiBeerGet$Plain.PATH, 'get');
  if (params) {
    rb.query('id', params.id, {"style":"form"});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Beer>;
    })
  );
}

apiBeerGet$Plain.PATH = '/api/Beer';
