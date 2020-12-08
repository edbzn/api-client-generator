/**
 * This file is auto-generated by the API client generator.
 * https://github.com/flowup/api-client-generator
 *
 * Avoid editing this file manually unless necessary.
 * Please report any bugs so they can be addressed in future versions.
 */

/* tslint:disable */
/* eslint-disable */

import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DefaultHttpOptions, HttpOptions } from './types';
import { USE_DOMAIN, USE_HTTP_OPTIONS, APIClient } from './api-client.service';
import { APIClientInterface } from './api-client.interface';

import * as models from './models';
import * as guards from './guards';

@Injectable()
export class GuardedAPIClient extends APIClient implements APIClientInterface {

  constructor(readonly httpClient: HttpClient,
              @Optional() @Inject(USE_DOMAIN) domain?: string,
              @Optional() @Inject(USE_HTTP_OPTIONS) options?: DefaultHttpOptions) {
    super(httpClient, domain, options);
  }

  firestoreProjectsDatabasesDocumentsBatchGet(
    args: Exclude<APIClientInterface['firestoreProjectsDatabasesDocumentsBatchGetParams'], undefined>,
    requestHttpOptions?: HttpOptions
  ): Observable<models.BatchGetDocumentsResponse> {
    return super.firestoreProjectsDatabasesDocumentsBatchGet(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isBatchGetDocumentsResponse(res) || console.error(`TypeGuard for response 'models.BatchGetDocumentsResponse' caught inconsistency.`, res)));
  }

  firestoreProjectsDatabasesDocumentsBeginTransaction(
    args: Exclude<APIClientInterface['firestoreProjectsDatabasesDocumentsBeginTransactionParams'], undefined>,
    requestHttpOptions?: HttpOptions
  ): Observable<models.BeginTransactionResponse> {
    return super.firestoreProjectsDatabasesDocumentsBeginTransaction(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isBeginTransactionResponse(res) || console.error(`TypeGuard for response 'models.BeginTransactionResponse' caught inconsistency.`, res)));
  }

  firestoreProjectsDatabasesDocumentsCommit(
    args: Exclude<APIClientInterface['firestoreProjectsDatabasesDocumentsCommitParams'], undefined>,
    requestHttpOptions?: HttpOptions
  ): Observable<models.CommitResponse> {
    return super.firestoreProjectsDatabasesDocumentsCommit(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isCommitResponse(res) || console.error(`TypeGuard for response 'models.CommitResponse' caught inconsistency.`, res)));
  }

  firestoreProjectsDatabasesDocumentsListen(
    args: Exclude<APIClientInterface['firestoreProjectsDatabasesDocumentsListenParams'], undefined>,
    requestHttpOptions?: HttpOptions
  ): Observable<models.ListenResponse> {
    return super.firestoreProjectsDatabasesDocumentsListen(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isListenResponse(res) || console.error(`TypeGuard for response 'models.ListenResponse' caught inconsistency.`, res)));
  }

  firestoreProjectsDatabasesDocumentsRollback(
    args: Exclude<APIClientInterface['firestoreProjectsDatabasesDocumentsRollbackParams'], undefined>,
    requestHttpOptions?: HttpOptions
  ): Observable<models.Empty> {
    return super.firestoreProjectsDatabasesDocumentsRollback(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isEmpty(res) || console.error(`TypeGuard for response 'models.Empty' caught inconsistency.`, res)));
  }

  firestoreProjectsDatabasesDocumentsWrite(
    args: Exclude<APIClientInterface['firestoreProjectsDatabasesDocumentsWriteParams'], undefined>,
    requestHttpOptions?: HttpOptions
  ): Observable<models.WriteResponse> {
    return super.firestoreProjectsDatabasesDocumentsWrite(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isWriteResponse(res) || console.error(`TypeGuard for response 'models.WriteResponse' caught inconsistency.`, res)));
  }

  firestoreProjectsDatabasesIndexesDelete(
    args: Exclude<APIClientInterface['firestoreProjectsDatabasesIndexesDeleteParams'], undefined>,
    requestHttpOptions?: HttpOptions
  ): Observable<models.Empty> {
    return super.firestoreProjectsDatabasesIndexesDelete(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isEmpty(res) || console.error(`TypeGuard for response 'models.Empty' caught inconsistency.`, res)));
  }

  firestoreProjectsDatabasesIndexesGet(
    args: Exclude<APIClientInterface['firestoreProjectsDatabasesIndexesGetParams'], undefined>,
    requestHttpOptions?: HttpOptions
  ): Observable<models.Index> {
    return super.firestoreProjectsDatabasesIndexesGet(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isIndex(res) || console.error(`TypeGuard for response 'models.Index' caught inconsistency.`, res)));
  }

  firestoreProjectsDatabasesDocumentsPatch(
    args: Exclude<APIClientInterface['firestoreProjectsDatabasesDocumentsPatchParams'], undefined>,
    requestHttpOptions?: HttpOptions
  ): Observable<models.Document> {
    return super.firestoreProjectsDatabasesDocumentsPatch(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isDocument(res) || console.error(`TypeGuard for response 'models.Document' caught inconsistency.`, res)));
  }

  firestoreProjectsDatabasesIndexesList(
    args: Exclude<APIClientInterface['firestoreProjectsDatabasesIndexesListParams'], undefined>,
    requestHttpOptions?: HttpOptions
  ): Observable<models.ListIndexesResponse> {
    return super.firestoreProjectsDatabasesIndexesList(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isListIndexesResponse(res) || console.error(`TypeGuard for response 'models.ListIndexesResponse' caught inconsistency.`, res)));
  }

  firestoreProjectsDatabasesIndexesCreate(
    args: Exclude<APIClientInterface['firestoreProjectsDatabasesIndexesCreateParams'], undefined>,
    requestHttpOptions?: HttpOptions
  ): Observable<models.Operation> {
    return super.firestoreProjectsDatabasesIndexesCreate(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isOperation(res) || console.error(`TypeGuard for response 'models.Operation' caught inconsistency.`, res)));
  }

  firestoreProjectsDatabasesDocumentsList(
    args: Exclude<APIClientInterface['firestoreProjectsDatabasesDocumentsListParams'], undefined>,
    requestHttpOptions?: HttpOptions
  ): Observable<models.ListDocumentsResponse> {
    return super.firestoreProjectsDatabasesDocumentsList(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isListDocumentsResponse(res) || console.error(`TypeGuard for response 'models.ListDocumentsResponse' caught inconsistency.`, res)));
  }

  firestoreProjectsDatabasesDocumentsCreateDocument(
    args: Exclude<APIClientInterface['firestoreProjectsDatabasesDocumentsCreateDocumentParams'], undefined>,
    requestHttpOptions?: HttpOptions
  ): Observable<models.Document> {
    return super.firestoreProjectsDatabasesDocumentsCreateDocument(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isDocument(res) || console.error(`TypeGuard for response 'models.Document' caught inconsistency.`, res)));
  }

  firestoreProjectsDatabasesDocumentsListCollectionIds(
    args: Exclude<APIClientInterface['firestoreProjectsDatabasesDocumentsListCollectionIdsParams'], undefined>,
    requestHttpOptions?: HttpOptions
  ): Observable<models.ListCollectionIdsResponse> {
    return super.firestoreProjectsDatabasesDocumentsListCollectionIds(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isListCollectionIdsResponse(res) || console.error(`TypeGuard for response 'models.ListCollectionIdsResponse' caught inconsistency.`, res)));
  }

  firestoreProjectsDatabasesDocumentsRunQuery(
    args: Exclude<APIClientInterface['firestoreProjectsDatabasesDocumentsRunQueryParams'], undefined>,
    requestHttpOptions?: HttpOptions
  ): Observable<models.RunQueryResponse> {
    return super.firestoreProjectsDatabasesDocumentsRunQuery(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isRunQueryResponse(res) || console.error(`TypeGuard for response 'models.RunQueryResponse' caught inconsistency.`, res)));
  }

}
