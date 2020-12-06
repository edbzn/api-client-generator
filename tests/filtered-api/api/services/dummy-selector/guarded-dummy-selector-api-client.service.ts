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
import { USE_DOMAIN, USE_HTTP_OPTIONS, DummySelectorAPIClient } from './dummy-selector-api-client.service';

import * as models from '../../models';
import * as guards from '../../guards';

@Injectable()
export class GuardedDummySelectorAPIClient extends DummySelectorAPIClient {

  constructor(readonly httpClient: HttpClient,
              @Optional() @Inject(USE_DOMAIN) domain?: string,
              @Optional() @Inject(USE_HTTP_OPTIONS) options?: DefaultHttpOptions) {
    super(httpClient, domain, options);
  }

  get(
    args: {
      organizerTaskElementId: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.DummySelectorViewModel> {
    return super.get(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isDummySelectorViewModel(res) || console.error(`TypeGuard for response 'models.DummySelectorViewModel' caught inconsistency.`, res)));
  }

  getSettings(
    args: {
      organizerTaskElementId: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.DummySelectorSettings> {
    return super.getSettings(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isDummySelectorSettings(res) || console.error(`TypeGuard for response 'models.DummySelectorSettings' caught inconsistency.`, res)));
  }

  putSettings(
    args: {
      organizerTaskElementId: number,
      betriebSelectorSettings: models.DummySelectorSettings,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<object> {
    return super.putSettings(args, requestHttpOptions)
      .pipe(tap((res: any) => typeof res === 'object' || console.error(`TypeGuard for response 'object' caught inconsistency.`, res)));
  }

  deleteSettings(
    args: {
      organizerTaskElementId: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<object> {
    return super.deleteSettings(args, requestHttpOptions)
      .pipe(tap((res: any) => typeof res === 'object' || console.error(`TypeGuard for response 'object' caught inconsistency.`, res)));
  }

}
