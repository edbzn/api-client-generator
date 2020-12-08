/**
 * This file is auto-generated by the API client generator.
 * https://github.com/flowup/api-client-generator
 *
 * Avoid editing this file manually unless necessary.
 * Please report any bugs so they can be addressed in future versions.
 */

/* tslint:disable */
/* eslint-disable */

import { Observable } from 'rxjs';
import { HttpOptions } from '../../types';

import * as models from '../../models';

export interface DashboardAPIClientInterface {

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  getWidgetTypes(
    requestHttpOptions?: HttpOptions
  ): Observable<models.WidgetTypeViewModel[]>;

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
    requestHttpOptions?: HttpOptions
  ): Observable<models.DashboardViewModel>;

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
    requestHttpOptions?: HttpOptions
  ): Observable<models.RowModel[]>;

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
    requestHttpOptions?: HttpOptions
  ): Observable<object>;


}
