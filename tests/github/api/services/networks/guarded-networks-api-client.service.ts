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
import { DefaultHttpOptions, HttpOptions } from '../../types';
import { USE_DOMAIN, USE_HTTP_OPTIONS, NetworksAPIClient } from './networks-api-client.service';
import { NetworksAPIClientInterface } from './networks-api-client.interface';

import * as models from '../../models';
import * as guards from '../../guards';

@Injectable()
export class GuardedNetworksAPIClient extends NetworksAPIClient implements NetworksAPIClientInterface {

  constructor(readonly httpClient: HttpClient,
              @Optional() @Inject(USE_DOMAIN) domain?: string,
              @Optional() @Inject(USE_HTTP_OPTIONS) options?: DefaultHttpOptions) {
    super(httpClient, domain, options);
  }

  getNetworksOwnerRepoEvents(
    args: Exclude<NetworksAPIClientInterface['getNetworksOwnerRepoEventsParams'], undefined>,
    requestHttpOptions?: HttpOptions
  ): Observable<models.Events> {
    return super.getNetworksOwnerRepoEvents(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isEvents(res) || console.error(`TypeGuard for response 'models.Events' caught inconsistency.`, res)));
  }

}
