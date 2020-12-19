/**
 * This file is auto-generated by the API client generator.
 * https://github.com/flowup/api-client-generator
 *
 * Avoid editing this file manually unless necessary.
 * Please report any bugs so they can be addressed in future versions.
 */

/* tslint:disable */
/* eslint-disable */

import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent } from '@angular/common/http';
import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { FeedsAPIClientInterface } from './feeds-api-client.interface';
import { Observable } from 'rxjs';import { DefaultHttpOptions, HttpOptions } from '../../types';

import * as models from '../../models';
export const USE_DOMAIN = new InjectionToken<string>('FeedsAPIClient_USE_DOMAIN');
export const USE_HTTP_OPTIONS = new InjectionToken<HttpOptions>('FeedsAPIClient_USE_HTTP_OPTIONS');

type APIHttpOptions = HttpOptions & {
  headers: HttpHeaders;
  params: HttpParams;
};

@Injectable()
export class FeedsAPIClient implements FeedsAPIClientInterface {

  readonly options: APIHttpOptions;

  readonly domain: string = `https://api.github.com`;

  constructor(
    private readonly http: HttpClient,
    @Optional() @Inject(USE_DOMAIN) domain?: string,
    @Optional() @Inject(USE_HTTP_OPTIONS) options?: DefaultHttpOptions,
  ) {
    if (domain != null) {
      this.domain = domain;
    }

    this.options = {
      headers: new HttpHeaders(options && options.headers ? options.headers : {}),
      params: new HttpParams(options && options.params ? options.params : {}),
      ...(options && options.reportProgress ? { reportProgress: options.reportProgress } : {}),
      ...(options && options.withCredentials ? { withCredentials: options.withCredentials } : {})
    };
  }

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
  getFeeds(
    args: FeedsAPIClientInterface['getFeedsParams'] = {},
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<models.Feeds | HttpResponse<models.Feeds> | HttpEvent<models.Feeds>> {
    const path = `/feeds`;
    const options = {
      ...this.options,
      ...requestHttpOptions,
      observe,
    };

    if ('xGitHubMediaType' in args) {
      options.headers = options.headers.set('X-GitHub-Media-Type', String(args.xGitHubMediaType));
    }
    if ('accept' in args) {
      options.headers = options.headers.set('Accept', String(args.accept));
    }
    if ('xRateLimit' in args) {
      options.headers = options.headers.set('X-RateLimit-Limit', String(args.xRateLimit));
    }
    if ('xRateLimitRemaining' in args) {
      options.headers = options.headers.set('X-RateLimit-Remaining', String(args.xRateLimitRemaining));
    }
    if ('xRateLimitReset' in args) {
      options.headers = options.headers.set('X-RateLimit-Reset', String(args.xRateLimitReset));
    }
    if ('xGitHubRequestId' in args) {
      options.headers = options.headers.set('X-GitHub-Request-Id', String(args.xGitHubRequestId));
    }
    return this.http.get<models.Feeds>(`${this.domain}${path}`, options);
  }

}
