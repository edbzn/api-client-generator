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
import { GitignoreAPIClientInterface } from './gitignore-api-client.interface';
import { Observable } from 'rxjs';import { DefaultHttpOptions, HttpOptions } from '../../types';

import * as models from '../../models';
export const USE_DOMAIN = new InjectionToken<string>('GitignoreAPIClient_USE_DOMAIN');
export const USE_HTTP_OPTIONS = new InjectionToken<HttpOptions>('GitignoreAPIClient_USE_HTTP_OPTIONS');

type APIHttpOptions = HttpOptions & {
  headers: HttpHeaders;
  params: HttpParams;
};

@Injectable()
export class GitignoreAPIClient implements GitignoreAPIClientInterface {

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
   * Listing available templates.
   * List all templates available to pass as an option when creating a repository.
   *
   * Response generated for [ 200 ] HTTP response code.
   */
  getGitignoreTemplates(
    args?: GitignoreAPIClientInterface['getGitignoreTemplatesParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Gitignore>;
  getGitignoreTemplates(
    args?: GitignoreAPIClientInterface['getGitignoreTemplatesParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Gitignore>>;
  getGitignoreTemplates(
    args?: GitignoreAPIClientInterface['getGitignoreTemplatesParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Gitignore>>;
  getGitignoreTemplates(
    args: GitignoreAPIClientInterface['getGitignoreTemplatesParams'] = {},
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<models.Gitignore | HttpResponse<models.Gitignore> | HttpEvent<models.Gitignore>> {
    const path = `/gitignore/templates`;
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
    return this.http.get<models.Gitignore>(`${this.domain}${path}`, options);
  }

  /**
   * Get a single template.
   * Response generated for [ 200 ] HTTP response code.
   */
  getGitignoreTemplatesLanguage(
    args: Exclude<GitignoreAPIClientInterface['getGitignoreTemplatesLanguageParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.GitignoreLang>;
  getGitignoreTemplatesLanguage(
    args: Exclude<GitignoreAPIClientInterface['getGitignoreTemplatesLanguageParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.GitignoreLang>>;
  getGitignoreTemplatesLanguage(
    args: Exclude<GitignoreAPIClientInterface['getGitignoreTemplatesLanguageParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.GitignoreLang>>;
  getGitignoreTemplatesLanguage(
    args: Exclude<GitignoreAPIClientInterface['getGitignoreTemplatesLanguageParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<models.GitignoreLang | HttpResponse<models.GitignoreLang> | HttpEvent<models.GitignoreLang>> {
    const path = `/gitignore/templates/${args.language}`;
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
    return this.http.get<models.GitignoreLang>(`${this.domain}${path}`, options);
  }

}
