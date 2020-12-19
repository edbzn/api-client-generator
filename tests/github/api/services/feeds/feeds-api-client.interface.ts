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
export interface FeedsAPIClientInterface {
  /**
   * Arguments object for method `getFeeds`.
   */
  getFeedsParams?: {
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
   * List Feeds.
   * GitHub provides several timeline resources in Atom format. The Feeds API
   *
   *  lists all the feeds available to the authenticating user.
   *
   * Response generated for [ 200 ] HTTP response code.
   */
  getFeeds(
    args?: FeedsAPIClientInterface['getFeedsParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Feeds>;
  getFeeds(
    args?: FeedsAPIClientInterface['getFeedsParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Feeds>>;
  getFeeds(
    args?: FeedsAPIClientInterface['getFeedsParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Feeds>>;

}
