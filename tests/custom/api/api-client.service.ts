/* tslint:disable */

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { DefaultHttpOptions, HttpOptions, APIClientInterface } from './';

import * as models from './models';

export const USE_DOMAIN = new InjectionToken<string>('APIClient_USE_DOMAIN');
export const USE_HTTP_OPTIONS = new InjectionToken<HttpOptions>('APIClient_USE_HTTP_OPTIONS');

type APIHttpOptions = HttpOptions & {
  headers: HttpHeaders;
  params: HttpParams;
  responseType?: 'arraybuffer' | 'blob' | 'text' | 'json';
};

/**
 * Created with https://github.com/flowup/api-client-generator
 */
@Injectable()
export class APIClient implements APIClientInterface {

  readonly options: APIHttpOptions;

  readonly domain: string = `//${window.location.hostname}${window.location.port ? ':'+window.location.port : ''}`;

  constructor(private readonly http: HttpClient,
              @Optional() @Inject(USE_DOMAIN) domain?: string,
              @Optional() @Inject(USE_HTTP_OPTIONS) options?: DefaultHttpOptions) {

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
   * Response generated for [ 200 ] HTTP response code.
   */
  getItems(
    args: {
      pageSize: number,
      page: number,  // page number
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.ItemList> {
    const path = `/items`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('pageSize' in args) {
      options.params = options.params.set('pageSize', String(args.pageSize));
    }
    if ('page' in args) {
      options.params = options.params.set('page', String(args.page));
    }
    return this.sendRequest<models.ItemList>('GET', path, options);
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  getItemModels(
    args: {
      pageSize: number,
      page: number,  // page number
    },
    requestHttpOptions?: HttpOptions
  ): Observable<object> {
    const path = `/itemModels`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('pageSize' in args) {
      options.params = options.params.set('pageSize', String(args.pageSize));
    }
    if ('page' in args) {
      options.params = options.params.set('page', String(args.page));
    }
    return this.sendRequest<object>('GET', path, options);
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  getPetsId(
    args: {
      id: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Pet[]> {
    const path = `/pets/${args.id}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.Pet[]>('GET', path, options);
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  deletePetsId(
    args: {
      id: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<void> {
    const path = `/pets/${args.id}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<void>('DELETE', path, options);
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  getCustomers(
    requestHttpOptions?: HttpOptions
  ): Observable<(models.Customer[]) | null> {
    const path = `/customers`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<(models.Customer[]) | null>('GET', path, options);
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  getDictionaries(
    requestHttpOptions?: HttpOptions
  ): Observable<models.Dictionary> {
    const path = `/dictionaries`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.Dictionary>('GET', path, options);
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  getFileId(
    args: {
      id: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<File> {
    const path = `/file/${args.id}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
      responseType: 'blob',
    };

    return this.sendRequest<File>('GET', path, options);
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  getRandomObject(
    requestHttpOptions?: HttpOptions
  ): Observable<object> {
    const path = `/randomObject`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<object>('GET', path, options);
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  getRandomModel(
    requestHttpOptions?: HttpOptions
  ): Observable<object> {
    const path = `/randomModel`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<object>('GET', path, options);
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  getRandomString(
    requestHttpOptions?: HttpOptions
  ): Observable<string> {
    const path = `/randomString`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<string>('GET', path, options);
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  getDictionary(
    requestHttpOptions?: HttpOptions
  ): Observable<{ [key: string]: number }> {
    const path = `/store/dictionary`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<{ [key: string]: number }>('GET', path, options);
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  getArrayOfDictionaries(
    requestHttpOptions?: HttpOptions
  ): Observable<{ [key: string]: number }[]> {
    const path = `/store/arrayOfdictionaries`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<{ [key: string]: number }[]>('GET', path, options);
  }

  /**
   * Commits a transaction, while optionally updating documents.
   * Response generated for [ 200 ] HTTP response code.
   */
  firestoreProjectsDatabasesDocumentsCommit(
    args: {
      wololo?: models.NumberEnumParam,  // (optional) - error format - 1 V1 - 2 V2 
      alt?: models.StringEnumParam,  // (optional) Data format for response.
      accessToken?: string,  // (optional) OAuth access token.
      pp?: boolean,  // (optional) Pretty-print response.
      prettyPrint?: boolean,  // (optional) should pretty print
      simpleQueryParam?: string,
      simpleArrayQueryParam?: number[],
      body?: models.Data,
      database: string,  // The database name. In the format `database:{{name}}`
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Dictionary> {
    const path = `/${args.database}/write`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('wololo' in args) {
      options.params = options.params.set('wololo', String(args.wololo));
    }
    if ('alt' in args) {
      options.params = options.params.set('alt', String(args.alt));
    }
    if ('accessToken' in args) {
      options.params = options.params.set('access_token', String(args.accessToken));
    }
    if ('pp' in args) {
      options.params = options.params.set('pp', String(args.pp));
    }
    if ('prettyPrint' in args) {
      options.params = options.params.set('prettyPrint', String(args.prettyPrint));
    }
    if ('simpleQueryParam' in args) {
      options.params = options.params.set('simpleQueryParam', String(args.simpleQueryParam));
    }
    if ('simpleArrayQueryParam' in args) {
      options.params = options.params.set('simpleArrayQueryParam', String(args.simpleArrayQueryParam));
    }
    return this.sendRequest<models.Dictionary>('POST', path, options, JSON.stringify(args.body));
  }

  /**
   * Create a custom Blob.
   * Response generated for [ 201 ] HTTP response code.
   */
  postReposOwnerRepoGitBlobs(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      accept?: string,  // (optional) Is used to set specified media type.
      body: models.Blob,  // Custom blob (should be imported from models)
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Blob[]> {
    const path = `/repos/${args.owner}/${args.repo}/git/blobs`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('accept' in args) {
      options.headers = options.headers.set('Accept', String(args.accept));
    }
    return this.sendRequest<models.Blob[]>('POST', path, options, JSON.stringify(args.body));
  }

  /**
   * Get standard File
   * Response generated for [ 200 ] HTTP response code.
   */
  getReposOwnerRepoGitBlobsShaCode(
    args: {
      body?: models.ModelParam,
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      shaCode: string,  // SHA-1 code.
      accept?: string,  // (optional) Is used to set specified media type.
    },
    requestHttpOptions?: HttpOptions
  ): Observable<File> {
    const path = `/repos/${args.owner}/${args.repo}/git/blobs/${args.shaCode}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
      responseType: 'blob',
    };

    if ('accept' in args) {
      options.headers = options.headers.set('Accept', String(args.accept));
    }
    return this.sendRequest<File>('GET', path, options, JSON.stringify(args.body));
  }

  private sendRequest<T>(method: string, path: string, options: HttpOptions, body?: any): Observable<T> {
    switch (method) {
      case 'DELETE':
        return this.http.delete<T>(`${this.domain}${path}`, options);
      case 'GET':
        return this.http.get<T>(`${this.domain}${path}`, options);
      case 'HEAD':
        return this.http.head<T>(`${this.domain}${path}`, options);
      case 'OPTIONS':
        return this.http.options<T>(`${this.domain}${path}`, options);
      case 'PATCH':
        return this.http.patch<T>(`${this.domain}${path}`, body, options);
      case 'POST':
        return this.http.post<T>(`${this.domain}${path}`, body, options);
      case 'PUT':
        return this.http.put<T>(`${this.domain}${path}`, body, options);
      default:
        console.error(`Unsupported request: ${method}`);
        return throwError(`Unsupported request: ${method}`);
    }
  }
}
