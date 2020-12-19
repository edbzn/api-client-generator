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
export interface DashboardAPIClientInterface {
  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  getWidgetTypes(
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.WidgetTypeViewModel[]>;
  getWidgetTypes(
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.WidgetTypeViewModel[]>>;
  getWidgetTypes(
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.WidgetTypeViewModel[]>>;

  /**
   * Arguments object for method `get`.
   */
  getParams?: {
    dashboardId: number,
  };

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  get(
    args: Exclude<DashboardAPIClientInterface['getParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.DashboardViewModel>;
  get(
    args: Exclude<DashboardAPIClientInterface['getParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.DashboardViewModel>>;
  get(
    args: Exclude<DashboardAPIClientInterface['getParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.DashboardViewModel>>;

  /**
   * Arguments object for method `getSettings`.
   */
  getSettingsParams?: {
    dashboardId: number,
  };

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  getSettings(
    args: Exclude<DashboardAPIClientInterface['getSettingsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.RowModel[]>;
  getSettings(
    args: Exclude<DashboardAPIClientInterface['getSettingsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.RowModel[]>>;
  getSettings(
    args: Exclude<DashboardAPIClientInterface['getSettingsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.RowModel[]>>;

  /**
   * Arguments object for method `putSettings`.
   */
  putSettingsParams?: {
    dashboardId: number,
    rows: models.RowModel[],
  };

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  putSettings(
    args: Exclude<DashboardAPIClientInterface['putSettingsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<object>;
  putSettings(
    args: Exclude<DashboardAPIClientInterface['putSettingsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<object>>;
  putSettings(
    args: Exclude<DashboardAPIClientInterface['putSettingsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<object>>;

}
