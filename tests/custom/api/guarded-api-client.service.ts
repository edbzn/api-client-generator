/* tslint:disable */

import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DefaultHttpOptions, HttpOptions } from './';
import { USE_DOMAIN, USE_HTTP_OPTIONS, APIClient } from './api-client.service';

import * as models from './models';
import * as guards from './guards';

/**
 * Created with https://github.com/flowup/api-client-generator
 */
@Injectable()
export class GuardedAPIClient extends APIClient {

  constructor(readonly httpClient: HttpClient,
              @Optional() @Inject(USE_DOMAIN) domain?: string,
              @Optional() @Inject(USE_HTTP_OPTIONS) options?: DefaultHttpOptions) {
    super(httpClient, domain, options);
  }

  getItems(
    args: {
      pageSize: number,
      page: number,  // page number
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.ItemList> {
    return super.getItems(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isItemList(res) || console.error(`TypeGuard for response 'models.ItemList' caught inconsistency.`, res)));
  }

  getItemModels(
    args: {
      pageSize: number,
      page: number,  // page number
    },
    requestHttpOptions?: HttpOptions
  ): Observable<object> {
    return super.getItemModels(args, requestHttpOptions)
      .pipe(tap((res: any) => typeof res === 'object' || console.error(`TypeGuard for response 'object' caught inconsistency.`, res)));
  }

  getPetsId(
    args: {
      id: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Pet[]> {
    return super.getPetsId(args, requestHttpOptions)
      .pipe(tap((res: any) => ( Array.isArray(res) && res.every((item: unknown) => guards.isPet(item)) ) || console.error(`TypeGuard for response 'models.Pet[]' caught inconsistency.`, res)));
  }

  getCustomers(
    requestHttpOptions?: HttpOptions
  ): Observable<(models.Customer[]) | null> {
    return super.getCustomers(requestHttpOptions)
      .pipe(tap((res: any) => (res == null || ( Array.isArray(res) && res.every((item: unknown) => guards.isCustomer(item)) )) || console.error(`TypeGuard for response '(models.Customer[]) | null' caught inconsistency.`, res)));
  }

  getDictionaries(
    requestHttpOptions?: HttpOptions
  ): Observable<models.Dictionary> {
    return super.getDictionaries(requestHttpOptions)
      .pipe(tap((res: any) => guards.isDictionary(res) || console.error(`TypeGuard for response 'models.Dictionary' caught inconsistency.`, res)));
  }

  getFileId(
    args: {
      id: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<File> {
    return super.getFileId(args, requestHttpOptions)
      .pipe(tap((res: any) => res instanceof File || console.error(`TypeGuard for response 'File' caught inconsistency.`, res)));
  }

  getRandomObject(
    requestHttpOptions?: HttpOptions
  ): Observable<object> {
    return super.getRandomObject(requestHttpOptions)
      .pipe(tap((res: any) => typeof res === 'object' || console.error(`TypeGuard for response 'object' caught inconsistency.`, res)));
  }

  getRandomModel(
    requestHttpOptions?: HttpOptions
  ): Observable<object> {
    return super.getRandomModel(requestHttpOptions)
      .pipe(tap((res: any) => typeof res === 'object' || console.error(`TypeGuard for response 'object' caught inconsistency.`, res)));
  }

  getRandomString(
    requestHttpOptions?: HttpOptions
  ): Observable<string> {
    return super.getRandomString(requestHttpOptions)
      .pipe(tap((res: any) => typeof res === 'string' || console.error(`TypeGuard for response 'string' caught inconsistency.`, res)));
  }

  getDictionary(
    requestHttpOptions?: HttpOptions
  ): Observable<{ [key: string]: number }> {
    return super.getDictionary(requestHttpOptions)
      .pipe(tap((res: any) => Object.values(res).every((value: unknown) => typeof value === 'number') || console.error(`TypeGuard for response '{ [key: string]: number }' caught inconsistency.`, res)));
  }

  getArrayOfDictionaries(
    requestHttpOptions?: HttpOptions
  ): Observable<{ [key: string]: number }[]> {
    return super.getArrayOfDictionaries(requestHttpOptions)
      .pipe(tap((res: any) => ( Array.isArray(res) && res.every((item: unknown) => Object.values(item).every((value: unknown) => typeof value === 'number')) ) || console.error(`TypeGuard for response '{ [key: string]: number }[]' caught inconsistency.`, res)));
  }

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
    return super.firestoreProjectsDatabasesDocumentsCommit(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isDictionary(res) || console.error(`TypeGuard for response 'models.Dictionary' caught inconsistency.`, res)));
  }

  postReposOwnerRepoGitBlobs(
    args: {
      owner: string,  // Name of repository owner.
      repo: string,  // Name of repository.
      accept?: string,  // (optional) Is used to set specified media type.
      body: models.Blob,  // Custom blob (should be imported from models)
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.Blob[]> {
    return super.postReposOwnerRepoGitBlobs(args, requestHttpOptions)
      .pipe(tap((res: any) => ( Array.isArray(res) && res.every((item: unknown) => guards.isBlob(item)) ) || console.error(`TypeGuard for response 'models.Blob[]' caught inconsistency.`, res)));
  }

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
    return super.getReposOwnerRepoGitBlobsShaCode(args, requestHttpOptions)
      .pipe(tap((res: any) => res instanceof File || console.error(`TypeGuard for response 'File' caught inconsistency.`, res)));
  }

}
