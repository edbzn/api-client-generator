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
import { USE_DOMAIN, USE_HTTP_OPTIONS, EmojisAPIClient } from './emojis-api-client.service';
import { EmojisAPIClientInterface } from './emojis-api-client.interface';

import * as models from '../../models';
import * as guards from '../../guards';

@Injectable()
export class GuardedEmojisAPIClient extends EmojisAPIClient implements EmojisAPIClientInterface {

  constructor(readonly httpClient: HttpClient,
              @Optional() @Inject(USE_DOMAIN) domain?: string,
              @Optional() @Inject(USE_HTTP_OPTIONS) options?: DefaultHttpOptions) {
    super(httpClient, domain, options);
  }

  getEmojis(
    args: Exclude<EmojisAPIClientInterface['getEmojisParams'], undefined>,
    requestHttpOptions?: HttpOptions
  ): Observable<models.Emojis> {
    return super.getEmojis(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isEmojis(res) || console.error(`TypeGuard for response 'models.Emojis' caught inconsistency.`, res)));
  }

}
