/**
 * This file is auto-generated by the API client generator.
 * https://github.com/flowup/api-client-generator
 *
 * Avoid editing this file manually unless necessary.
 * Please report any bugs so they can be addressed in future versions.
 */

/* tslint:disable */
/* eslint-disable */

import { HttpClient, HttpResponse, HttpEvent } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { UsersAPIClientInterface } from './users-api-client.interface';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { USE_DOMAIN, USE_HTTP_OPTIONS, UsersAPIClient } from './users-api-client.service';
import { DefaultHttpOptions, HttpOptions } from '../../types';

import * as models from '../../models';
import * as guards from '../../guards';

@Injectable()
export class GuardedUsersAPIClient extends UsersAPIClient implements UsersAPIClientInterface {

  constructor(
    readonly httpClient: HttpClient,
    @Optional() @Inject(USE_DOMAIN) domain?: string,
    @Optional() @Inject(USE_HTTP_OPTIONS) options?: DefaultHttpOptions,
  ) {
    super(httpClient, domain, options);
  }

  /**
   * Get all users.
   * This provides a dump of every user, in the order that they signed up for GitHub.
   * Note: Pagination is powered exclusively by the since parameter. Use the Link
   * header to get the URL for the next page of users.
   *
   * Response generated for [ 200 ] HTTP response code.
   */
  getUsers(
    args?: UsersAPIClientInterface['getUsersParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Users>;
  getUsers(
    args?: UsersAPIClientInterface['getUsersParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Users>>;
  getUsers(
    args?: UsersAPIClientInterface['getUsersParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Users>>;
  getUsers(
    args: UsersAPIClientInterface['getUsersParams'] = {},
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<models.Users | HttpResponse<models.Users> | HttpEvent<models.Users>> {

    return super.getUsers(args, requestHttpOptions, observe)
      .pipe(tap((res: any) => guards.isUsers(res) || console.error(`TypeGuard for response 'models.Users' caught inconsistency.`, res)));
  }

  /**
   * Get a single user.
   * Response generated for [ 200 ] HTTP response code.
   */
  getUsersUsername(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Users>;
  getUsersUsername(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Users>>;
  getUsersUsername(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Users>>;
  getUsersUsername(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<models.Users | HttpResponse<models.Users> | HttpEvent<models.Users>> {

    return super.getUsersUsername(args, requestHttpOptions, observe)
      .pipe(tap((res: any) => guards.isUsers(res) || console.error(`TypeGuard for response 'models.Users' caught inconsistency.`, res)));
  }

  /**
   * If you are authenticated as the given user, you will see your private events. Otherwise, you'll only see public events.
   * Response generated for [ default ] HTTP response code.
   */
  getUsersUsernameEvents(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameEventsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  getUsersUsernameEvents(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameEventsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  getUsersUsernameEvents(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameEventsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;
  getUsersUsernameEvents(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameEventsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<void | HttpResponse<void> | HttpEvent<void>> {

    return super.getUsersUsernameEvents(args, requestHttpOptions, observe);
  }

  /**
   * This is the user's organization dashboard. You must be authenticated as the user to view this.
   * Response generated for [ default ] HTTP response code.
   */
  getUsersUsernameEventsOrg(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameEventsOrgParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  getUsersUsernameEventsOrg(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameEventsOrgParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  getUsersUsernameEventsOrg(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameEventsOrgParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;
  getUsersUsernameEventsOrg(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameEventsOrgParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<void | HttpResponse<void> | HttpEvent<void>> {

    return super.getUsersUsernameEventsOrg(args, requestHttpOptions, observe);
  }

  /**
   * List a user's followers
   * Response generated for [ 200 ] HTTP response code.
   */
  getUsersUsernameFollowers(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameFollowersParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Users>;
  getUsersUsernameFollowers(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameFollowersParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Users>>;
  getUsersUsernameFollowers(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameFollowersParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Users>>;
  getUsersUsernameFollowers(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameFollowersParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<models.Users | HttpResponse<models.Users> | HttpEvent<models.Users>> {

    return super.getUsersUsernameFollowers(args, requestHttpOptions, observe)
      .pipe(tap((res: any) => guards.isUsers(res) || console.error(`TypeGuard for response 'models.Users' caught inconsistency.`, res)));
  }

  /**
   * Check if one user follows another.
   * Response generated for [ 204 ] HTTP response code.
   */
  getUsersUsernameFollowingTargetUser(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameFollowingTargetUserParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  getUsersUsernameFollowingTargetUser(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameFollowingTargetUserParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  getUsersUsernameFollowingTargetUser(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameFollowingTargetUserParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;
  getUsersUsernameFollowingTargetUser(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameFollowingTargetUserParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<void | HttpResponse<void> | HttpEvent<void>> {

    return super.getUsersUsernameFollowingTargetUser(args, requestHttpOptions, observe);
  }

  /**
   * List a users gists.
   * Response generated for [ 200 ] HTTP response code.
   */
  getUsersUsernameGists(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameGistsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Gists>;
  getUsersUsernameGists(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameGistsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Gists>>;
  getUsersUsernameGists(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameGistsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Gists>>;
  getUsersUsernameGists(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameGistsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<models.Gists | HttpResponse<models.Gists> | HttpEvent<models.Gists>> {

    return super.getUsersUsernameGists(args, requestHttpOptions, observe)
      .pipe(tap((res: any) => guards.isGists(res) || console.error(`TypeGuard for response 'models.Gists' caught inconsistency.`, res)));
  }

  /**
   * List public keys for a user.
   * Lists the verified public keys for a user. This is accessible by anyone.
   *
   * Response generated for [ 200 ] HTTP response code.
   */
  getUsersUsernameKeys(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameKeysParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Gitignore>;
  getUsersUsernameKeys(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameKeysParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Gitignore>>;
  getUsersUsernameKeys(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameKeysParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Gitignore>>;
  getUsersUsernameKeys(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameKeysParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<models.Gitignore | HttpResponse<models.Gitignore> | HttpEvent<models.Gitignore>> {

    return super.getUsersUsernameKeys(args, requestHttpOptions, observe)
      .pipe(tap((res: any) => guards.isGitignore(res) || console.error(`TypeGuard for response 'models.Gitignore' caught inconsistency.`, res)));
  }

  /**
   * List all public organizations for a user.
   * Response generated for [ 200 ] HTTP response code.
   */
  getUsersUsernameOrgs(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameOrgsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Gitignore>;
  getUsersUsernameOrgs(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameOrgsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Gitignore>>;
  getUsersUsernameOrgs(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameOrgsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Gitignore>>;
  getUsersUsernameOrgs(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameOrgsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<models.Gitignore | HttpResponse<models.Gitignore> | HttpEvent<models.Gitignore>> {

    return super.getUsersUsernameOrgs(args, requestHttpOptions, observe)
      .pipe(tap((res: any) => guards.isGitignore(res) || console.error(`TypeGuard for response 'models.Gitignore' caught inconsistency.`, res)));
  }

  /**
   * These are events that you'll only see public events.
   * Response generated for [ default ] HTTP response code.
   */
  getUsersUsernameReceivedEvents(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameReceivedEventsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  getUsersUsernameReceivedEvents(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameReceivedEventsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  getUsersUsernameReceivedEvents(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameReceivedEventsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;
  getUsersUsernameReceivedEvents(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameReceivedEventsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<void | HttpResponse<void> | HttpEvent<void>> {

    return super.getUsersUsernameReceivedEvents(args, requestHttpOptions, observe);
  }

  /**
   * List public events that a user has received
   * Response generated for [ default ] HTTP response code.
   */
  getUsersUsernameReceivedEventsPublic(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameReceivedEventsPublicParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  getUsersUsernameReceivedEventsPublic(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameReceivedEventsPublicParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  getUsersUsernameReceivedEventsPublic(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameReceivedEventsPublicParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;
  getUsersUsernameReceivedEventsPublic(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameReceivedEventsPublicParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<void | HttpResponse<void> | HttpEvent<void>> {

    return super.getUsersUsernameReceivedEventsPublic(args, requestHttpOptions, observe);
  }

  /**
   * List public repositories for the specified user.
   * Response generated for [ 200 ] HTTP response code.
   */
  getUsersUsernameRepos(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameReposParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Repos>;
  getUsersUsernameRepos(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameReposParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Repos>>;
  getUsersUsernameRepos(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameReposParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Repos>>;
  getUsersUsernameRepos(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameReposParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<models.Repos | HttpResponse<models.Repos> | HttpEvent<models.Repos>> {

    return super.getUsersUsernameRepos(args, requestHttpOptions, observe)
      .pipe(tap((res: any) => guards.isRepos(res) || console.error(`TypeGuard for response 'models.Repos' caught inconsistency.`, res)));
  }

  /**
   * List repositories being starred by a user.
   * Response generated for [ default ] HTTP response code.
   */
  getUsersUsernameStarred(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameStarredParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  getUsersUsernameStarred(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameStarredParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  getUsersUsernameStarred(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameStarredParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;
  getUsersUsernameStarred(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameStarredParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<void | HttpResponse<void> | HttpEvent<void>> {

    return super.getUsersUsernameStarred(args, requestHttpOptions, observe);
  }

  /**
   * List repositories being watched by a user.
   * Response generated for [ default ] HTTP response code.
   */
  getUsersUsernameSubscriptions(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameSubscriptionsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  getUsersUsernameSubscriptions(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameSubscriptionsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  getUsersUsernameSubscriptions(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameSubscriptionsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;
  getUsersUsernameSubscriptions(
    args: Exclude<UsersAPIClientInterface['getUsersUsernameSubscriptionsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<void | HttpResponse<void> | HttpEvent<void>> {

    return super.getUsersUsernameSubscriptions(args, requestHttpOptions, observe);
  }

}
