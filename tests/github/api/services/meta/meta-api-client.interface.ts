/**
 * This file is auto-generated by the API client generator.
 * https://github.com/flowup/api-client-generator
 *
 * Avoid editing this file manually unless necessary.
 * Please report any bugs so they can be addressed in future versions.
 */

/* tslint:disable */
/* eslint-disable */

import { HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';import { HttpOptions } from '../../types';

import * as models from '../../models';
export interface MetaAPIClientInterface {
  /**
   * Arguments object for method `getMeta`.
   */
  getMetaParams?: {
    /**  (optional) You can check the current version of media type in responses.  */
    xGitHubMediaType?: string,
    /**  (optional) Is used to set specified media type. */
    accept?: string,
    xRateLimit?: number,
    xRateLimitRemaining?: number,
    xRateLimitReset?: number,
    xGitHubRequestId?: number,
  };

  /**
   * This gives some information about GitHub.com, the service.
   * Response generated for [ 200 ] HTTP response code.
   */
  getMeta(
    args?: MetaAPIClientInterface['getMetaParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Meta>;
  getMeta(
    args?: MetaAPIClientInterface['getMetaParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Meta>>;
  getMeta(
    args?: MetaAPIClientInterface['getMetaParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Meta>>;

}
