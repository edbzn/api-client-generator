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
import { RepositoriesAPIClientInterface } from './repositories-api-client.interface';
import { Observable } from 'rxjs';import { DefaultHttpOptions, HttpOptions } from '../../types';

import * as models from '../../models';
export const USE_DOMAIN = new InjectionToken<string>('RepositoriesAPIClient_USE_DOMAIN');
export const USE_HTTP_OPTIONS = new InjectionToken<HttpOptions>('RepositoriesAPIClient_USE_HTTP_OPTIONS');

type APIHttpOptions = HttpOptions & {
  headers: HttpHeaders;
  params: HttpParams;
};

@Injectable()
export class RepositoriesAPIClient implements RepositoriesAPIClientInterface {

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
   * List all public repositories.
   * This provides a dump of every public repository, in the order that they
   * were created.
   * Note: Pagination is powered exclusively by the since parameter. is the
   * Link header to get the URL for the next page of repositories.
   *
   * Response generated for [ 200 ] HTTP response code.
   */
  getRepositories(
    args?: RepositoriesAPIClientInterface['getRepositoriesParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Repositories>;
  getRepositories(
    args?: RepositoriesAPIClientInterface['getRepositoriesParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Repositories>>;
  getRepositories(
    args?: RepositoriesAPIClientInterface['getRepositoriesParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Repositories>>;
  getRepositories(
    args: RepositoriesAPIClientInterface['getRepositoriesParams'] = {},
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<models.Repositories | HttpResponse<models.Repositories> | HttpEvent<models.Repositories>> {
    const path = `/repositories`;
    const options = {
      ...this.options,
      ...requestHttpOptions,
      observe,
    };

    if ('since' in args) {
      options.params = options.params.set('since', String(args.since));
    }
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
    return this.http.get<models.Repositories>(`${this.domain}${path}`, options);
  }

}
