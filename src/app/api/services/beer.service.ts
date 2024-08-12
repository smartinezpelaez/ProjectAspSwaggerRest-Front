/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiBeerGet$Json } from '../fn/beer/api-beer-get-json';
import { ApiBeerGet$Json$Params } from '../fn/beer/api-beer-get-json';
import { apiBeerGet$Plain } from '../fn/beer/api-beer-get-plain';
import { ApiBeerGet$Plain$Params } from '../fn/beer/api-beer-get-plain';
import { Beer } from '../models/beer';

@Injectable({ providedIn: 'root' })
export class BeerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiBeerGet()` */
  static readonly ApiBeerGetPath = '/api/Beer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBeerGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBeerGet$Plain$Response(params?: ApiBeerGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Beer>> {
    return apiBeerGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBeerGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBeerGet$Plain(params?: ApiBeerGet$Plain$Params, context?: HttpContext): Observable<Beer> {
    return this.apiBeerGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Beer>): Beer => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBeerGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBeerGet$Json$Response(params?: ApiBeerGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Beer>> {
    return apiBeerGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBeerGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBeerGet$Json(params?: ApiBeerGet$Json$Params, context?: HttpContext): Observable<Beer> {
    return this.apiBeerGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Beer>): Beer => r.body)
    );
  }

}
