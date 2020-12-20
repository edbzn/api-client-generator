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
export interface UserAPIClientInterface {
  /**
   * Arguments object for method `getUser`.
   */
  getUserParams?: {
    /**
     * You can check the current version of media type in responses.
     * 
     */
    xGitHubMediaType?: string,
    /** Is used to set specified media type. */
    accept?: string,
    xRateLimit?: number,
    xRateLimitRemaining?: number,
    xRateLimitReset?: number,
    xGitHubRequestId?: number,
  };

  /**
   * Get the authenticated user.
   * Response generated for [ 200 ] HTTP response code.
   */
  getUser(
    args?: UserAPIClientInterface['getUserParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.User>;
  getUser(
    args?: UserAPIClientInterface['getUserParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.User>>;
  getUser(
    args?: UserAPIClientInterface['getUserParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.User>>;

  /**
   * Arguments object for method `patchUser`.
   */
  patchUserParams?: {
    /**
     * You can check the current version of media type in responses.
     * 
     */
    xGitHubMediaType?: string,
    /** Is used to set specified media type. */
    accept?: string,
    xRateLimit?: number,
    xRateLimitRemaining?: number,
    xRateLimitReset?: number,
    xGitHubRequestId?: number,
    body: models.UserUpdate,
  };

  /**
   * Update the authenticated user.
   * Response generated for [ 200 ] HTTP response code.
   */
  patchUser(
    args: Exclude<UserAPIClientInterface['patchUserParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.User>;
  patchUser(
    args: Exclude<UserAPIClientInterface['patchUserParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.User>>;
  patchUser(
    args: Exclude<UserAPIClientInterface['patchUserParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.User>>;

  /**
   * Arguments object for method `deleteUserEmails`.
   */
  deleteUserEmailsParams?: {
    /**
     * You can check the current version of media type in responses.
     * 
     */
    xGitHubMediaType?: string,
    /** Is used to set specified media type. */
    accept?: string,
    xRateLimit?: number,
    xRateLimitRemaining?: number,
    xRateLimitReset?: number,
    xGitHubRequestId?: number,
    body: models.UserEmails,
  };

  /**
   * Delete email address(es).
   * You can include a single email address or an array of addresses.
   * 
   * Response generated for [ 204 ] HTTP response code.
   */
  deleteUserEmails(
    args: Exclude<UserAPIClientInterface['deleteUserEmailsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  deleteUserEmails(
    args: Exclude<UserAPIClientInterface['deleteUserEmailsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  deleteUserEmails(
    args: Exclude<UserAPIClientInterface['deleteUserEmailsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;

  /**
   * Arguments object for method `getUserEmails`.
   */
  getUserEmailsParams?: {
    /**
     * You can check the current version of media type in responses.
     * 
     */
    xGitHubMediaType?: string,
    /** Is used to set specified media type. */
    accept?: string,
    xRateLimit?: number,
    xRateLimitRemaining?: number,
    xRateLimitReset?: number,
    xGitHubRequestId?: number,
  };

  /**
   * List email addresses for a user.
   * In the final version of the API, this method will return an array of hashes
   * with extended information for each email address indicating if the address
   * has been verified and if it's primary email address for GitHub.
   * Until API v3 is finalized, use the application/vnd.github.v3 media type to
   * get other response format.
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getUserEmails(
    args?: UserAPIClientInterface['getUserEmailsParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.UserEmails>;
  getUserEmails(
    args?: UserAPIClientInterface['getUserEmailsParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.UserEmails>>;
  getUserEmails(
    args?: UserAPIClientInterface['getUserEmailsParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.UserEmails>>;

  /**
   * Arguments object for method `postUserEmails`.
   */
  postUserEmailsParams?: {
    /**
     * You can check the current version of media type in responses.
     * 
     */
    xGitHubMediaType?: string,
    /** Is used to set specified media type. */
    accept?: string,
    xRateLimit?: number,
    xRateLimitRemaining?: number,
    xRateLimitReset?: number,
    xGitHubRequestId?: number,
    body: models.EmailsPost,
  };

  /**
   * Add email address(es).
   * You can post a single email address or an array of addresses.
   * 
   * Response generated for [ default ] HTTP response code.
   */
  postUserEmails(
    args: Exclude<UserAPIClientInterface['postUserEmailsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  postUserEmails(
    args: Exclude<UserAPIClientInterface['postUserEmailsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  postUserEmails(
    args: Exclude<UserAPIClientInterface['postUserEmailsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;

  /**
   * Arguments object for method `getUserFollowers`.
   */
  getUserFollowersParams?: {
    /**
     * You can check the current version of media type in responses.
     * 
     */
    xGitHubMediaType?: string,
    /** Is used to set specified media type. */
    accept?: string,
    xRateLimit?: number,
    xRateLimitRemaining?: number,
    xRateLimitReset?: number,
    xGitHubRequestId?: number,
  };

  /**
   * List the authenticated user's followers
   * Response generated for [ 200 ] HTTP response code.
   */
  getUserFollowers(
    args?: UserAPIClientInterface['getUserFollowersParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Users>;
  getUserFollowers(
    args?: UserAPIClientInterface['getUserFollowersParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Users>>;
  getUserFollowers(
    args?: UserAPIClientInterface['getUserFollowersParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Users>>;

  /**
   * Arguments object for method `getUserFollowing`.
   */
  getUserFollowingParams?: {
    /**
     * You can check the current version of media type in responses.
     * 
     */
    xGitHubMediaType?: string,
    /** Is used to set specified media type. */
    accept?: string,
    xRateLimit?: number,
    xRateLimitRemaining?: number,
    xRateLimitReset?: number,
    xGitHubRequestId?: number,
  };

  /**
   * List who the authenticated user is following.
   * Response generated for [ 200 ] HTTP response code.
   */
  getUserFollowing(
    args?: UserAPIClientInterface['getUserFollowingParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Users>;
  getUserFollowing(
    args?: UserAPIClientInterface['getUserFollowingParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Users>>;
  getUserFollowing(
    args?: UserAPIClientInterface['getUserFollowingParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Users>>;

  /**
   * Arguments object for method `deleteUserFollowingUsername`.
   */
  deleteUserFollowingUsernameParams?: {
    /** Name of user. */
    username: string,
    /**
     * You can check the current version of media type in responses.
     * 
     */
    xGitHubMediaType?: string,
    /** Is used to set specified media type. */
    accept?: string,
    xRateLimit?: number,
    xRateLimitRemaining?: number,
    xRateLimitReset?: number,
    xGitHubRequestId?: number,
  };

  /**
   * Unfollow a user.
   * Unfollowing a user requires the user to be logged in and authenticated with
   * basic auth or OAuth with the user:follow scope.
   * 
   * Response generated for [ 204 ] HTTP response code.
   */
  deleteUserFollowingUsername(
    args: Exclude<UserAPIClientInterface['deleteUserFollowingUsernameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  deleteUserFollowingUsername(
    args: Exclude<UserAPIClientInterface['deleteUserFollowingUsernameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  deleteUserFollowingUsername(
    args: Exclude<UserAPIClientInterface['deleteUserFollowingUsernameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;

  /**
   * Arguments object for method `getUserFollowingUsername`.
   */
  getUserFollowingUsernameParams?: {
    /** Name of user. */
    username: string,
    /**
     * You can check the current version of media type in responses.
     * 
     */
    xGitHubMediaType?: string,
    /** Is used to set specified media type. */
    accept?: string,
    xRateLimit?: number,
    xRateLimitRemaining?: number,
    xRateLimitReset?: number,
    xGitHubRequestId?: number,
  };

  /**
   * Check if you are following a user.
   * Response generated for [ 204 ] HTTP response code.
   */
  getUserFollowingUsername(
    args: Exclude<UserAPIClientInterface['getUserFollowingUsernameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  getUserFollowingUsername(
    args: Exclude<UserAPIClientInterface['getUserFollowingUsernameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  getUserFollowingUsername(
    args: Exclude<UserAPIClientInterface['getUserFollowingUsernameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;

  /**
   * Arguments object for method `putUserFollowingUsername`.
   */
  putUserFollowingUsernameParams?: {
    /** Name of user. */
    username: string,
    /**
     * You can check the current version of media type in responses.
     * 
     */
    xGitHubMediaType?: string,
    /** Is used to set specified media type. */
    accept?: string,
    xRateLimit?: number,
    xRateLimitRemaining?: number,
    xRateLimitReset?: number,
    xGitHubRequestId?: number,
  };

  /**
   * Follow a user.
   * Following a user requires the user to be logged in and authenticated with
   * basic auth or OAuth with the user:follow scope.
   * 
   * Response generated for [ 204 ] HTTP response code.
   */
  putUserFollowingUsername(
    args: Exclude<UserAPIClientInterface['putUserFollowingUsernameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  putUserFollowingUsername(
    args: Exclude<UserAPIClientInterface['putUserFollowingUsernameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  putUserFollowingUsername(
    args: Exclude<UserAPIClientInterface['putUserFollowingUsernameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;

  /**
   * Arguments object for method `getUserIssues`.
   */
  getUserIssuesParams?: {
    /**
     * Issues assigned to you / created by you / mentioning you / you're
     * subscribed to updates for / All issues the authenticated user can see
     * 
     * If not set, server will use the default value: all
     */
    filter: ('assigned' | 'created' | 'mentioned' | 'subscribed' | 'all'),
    /** If not set, server will use the default value: open */
    state: ('open' | 'closed'),
    /** String list of comma separated Label names. Example - bug,ui,@high. */
    labels: string,
    /** If not set, server will use the default value: created */
    sort: ('created' | 'updated' | 'comments'),
    /** If not set, server will use the default value: desc */
    direction: ('asc' | 'desc'),
    /**
     * Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
     * Only issues updated at or after this time are returned.
     * 
     */
    since?: string,
    /**
     * You can check the current version of media type in responses.
     * 
     */
    xGitHubMediaType?: string,
    /** Is used to set specified media type. */
    accept?: string,
    xRateLimit?: number,
    xRateLimitRemaining?: number,
    xRateLimitReset?: number,
    xGitHubRequestId?: number,
  };

  /**
   * List issues.
   * List all issues across owned and member repositories for the authenticated
   * user.
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getUserIssues(
    args: Exclude<UserAPIClientInterface['getUserIssuesParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Issues>;
  getUserIssues(
    args: Exclude<UserAPIClientInterface['getUserIssuesParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Issues>>;
  getUserIssues(
    args: Exclude<UserAPIClientInterface['getUserIssuesParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Issues>>;

  /**
   * Arguments object for method `getUserKeys`.
   */
  getUserKeysParams?: {
    /**
     * You can check the current version of media type in responses.
     * 
     */
    xGitHubMediaType?: string,
    /** Is used to set specified media type. */
    accept?: string,
    xRateLimit?: number,
    xRateLimitRemaining?: number,
    xRateLimitReset?: number,
    xGitHubRequestId?: number,
  };

  /**
   * List your public keys.
   * Lists the current user's keys. Management of public keys via the API requires
   * that you are authenticated through basic auth, or OAuth with the 'user', 'write:public_key' scopes.
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getUserKeys(
    args?: UserAPIClientInterface['getUserKeysParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Gitignore>;
  getUserKeys(
    args?: UserAPIClientInterface['getUserKeysParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Gitignore>>;
  getUserKeys(
    args?: UserAPIClientInterface['getUserKeysParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Gitignore>>;

  /**
   * Arguments object for method `postUserKeys`.
   */
  postUserKeysParams?: {
    /**
     * You can check the current version of media type in responses.
     * 
     */
    xGitHubMediaType?: string,
    /** Is used to set specified media type. */
    accept?: string,
    xRateLimit?: number,
    xRateLimitRemaining?: number,
    xRateLimitReset?: number,
    xGitHubRequestId?: number,
    body: models.UserKeysPost,
  };

  /**
   * Create a public key.
   * Response generated for [ 201 ] HTTP response code.
   */
  postUserKeys(
    args: Exclude<UserAPIClientInterface['postUserKeysParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.UserKeysKeyId>;
  postUserKeys(
    args: Exclude<UserAPIClientInterface['postUserKeysParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.UserKeysKeyId>>;
  postUserKeys(
    args: Exclude<UserAPIClientInterface['postUserKeysParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.UserKeysKeyId>>;

  /**
   * Arguments object for method `deleteUserKeysKeyId`.
   */
  deleteUserKeysKeyIdParams?: {
    /** ID of key. */
    keyId: number,
    /**
     * You can check the current version of media type in responses.
     * 
     */
    xGitHubMediaType?: string,
    /** Is used to set specified media type. */
    accept?: string,
    xRateLimit?: number,
    xRateLimitRemaining?: number,
    xRateLimitReset?: number,
    xGitHubRequestId?: number,
  };

  /**
   * Delete a public key. Removes a public key. Requires that you are authenticated via Basic Auth or via OAuth with at least admin:public_key scope.
   * Response generated for [ 204 ] HTTP response code.
   */
  deleteUserKeysKeyId(
    args: Exclude<UserAPIClientInterface['deleteUserKeysKeyIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  deleteUserKeysKeyId(
    args: Exclude<UserAPIClientInterface['deleteUserKeysKeyIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  deleteUserKeysKeyId(
    args: Exclude<UserAPIClientInterface['deleteUserKeysKeyIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;

  /**
   * Arguments object for method `getUserKeysKeyId`.
   */
  getUserKeysKeyIdParams?: {
    /** ID of key. */
    keyId: number,
    /**
     * You can check the current version of media type in responses.
     * 
     */
    xGitHubMediaType?: string,
    /** Is used to set specified media type. */
    accept?: string,
    xRateLimit?: number,
    xRateLimitRemaining?: number,
    xRateLimitReset?: number,
    xGitHubRequestId?: number,
  };

  /**
   * Get a single public key.
   * Response generated for [ 200 ] HTTP response code.
   */
  getUserKeysKeyId(
    args: Exclude<UserAPIClientInterface['getUserKeysKeyIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.UserKeysKeyId>;
  getUserKeysKeyId(
    args: Exclude<UserAPIClientInterface['getUserKeysKeyIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.UserKeysKeyId>>;
  getUserKeysKeyId(
    args: Exclude<UserAPIClientInterface['getUserKeysKeyIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.UserKeysKeyId>>;

  /**
   * Arguments object for method `getUserOrgs`.
   */
  getUserOrgsParams?: {
    /**
     * You can check the current version of media type in responses.
     * 
     */
    xGitHubMediaType?: string,
    /** Is used to set specified media type. */
    accept?: string,
    xRateLimit?: number,
    xRateLimitRemaining?: number,
    xRateLimitReset?: number,
    xGitHubRequestId?: number,
  };

  /**
   * List public and private organizations for the authenticated user.
   * Response generated for [ 200 ] HTTP response code.
   */
  getUserOrgs(
    args?: UserAPIClientInterface['getUserOrgsParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Gitignore>;
  getUserOrgs(
    args?: UserAPIClientInterface['getUserOrgsParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Gitignore>>;
  getUserOrgs(
    args?: UserAPIClientInterface['getUserOrgsParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Gitignore>>;

  /**
   * Arguments object for method `getUserRepos`.
   */
  getUserReposParams?: {
    /** If not set, server will use the default value: all */
    type?: ('all' | 'public' | 'private' | 'forks' | 'sources' | 'member'),
    /**
     * You can check the current version of media type in responses.
     * 
     */
    xGitHubMediaType?: string,
    /** Is used to set specified media type. */
    accept?: string,
    xRateLimit?: number,
    xRateLimitRemaining?: number,
    xRateLimitReset?: number,
    xGitHubRequestId?: number,
  };

  /**
   * List repositories for the authenticated user. Note that this does not include
   * repositories owned by organizations which the user can access. You can lis
   * user organizations and list organization repositories separately.
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getUserRepos(
    args?: UserAPIClientInterface['getUserReposParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Repos>;
  getUserRepos(
    args?: UserAPIClientInterface['getUserReposParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Repos>>;
  getUserRepos(
    args?: UserAPIClientInterface['getUserReposParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Repos>>;

  /**
   * Arguments object for method `postUserRepos`.
   */
  postUserReposParams?: {
    /**
     * You can check the current version of media type in responses.
     * 
     */
    xGitHubMediaType?: string,
    /** Is used to set specified media type. */
    accept?: string,
    xRateLimit?: number,
    xRateLimitRemaining?: number,
    xRateLimitReset?: number,
    xGitHubRequestId?: number,
    body: models.PostRepo,
  };

  /**
   * Create a new repository for the authenticated user. OAuth users must supply
   * repo scope.
   * 
   * Response generated for [ 201 ] HTTP response code.
   */
  postUserRepos(
    args: Exclude<UserAPIClientInterface['postUserReposParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Repos>;
  postUserRepos(
    args: Exclude<UserAPIClientInterface['postUserReposParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Repos>>;
  postUserRepos(
    args: Exclude<UserAPIClientInterface['postUserReposParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Repos>>;

  /**
   * Arguments object for method `getUserStarred`.
   */
  getUserStarredParams?: {
    /** Ignored without 'sort' parameter. */
    direction?: string,
    /** If not set, server will use the default value: created */
    sort?: ('created' | 'updated'),
    /**
     * You can check the current version of media type in responses.
     * 
     */
    xGitHubMediaType?: string,
    /** Is used to set specified media type. */
    accept?: string,
    xRateLimit?: number,
    xRateLimitRemaining?: number,
    xRateLimitReset?: number,
    xGitHubRequestId?: number,
  };

  /**
   * List repositories being starred by the authenticated user.
   * Response generated for [ 200 ] HTTP response code.
   */
  getUserStarred(
    args?: UserAPIClientInterface['getUserStarredParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Gitignore>;
  getUserStarred(
    args?: UserAPIClientInterface['getUserStarredParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Gitignore>>;
  getUserStarred(
    args?: UserAPIClientInterface['getUserStarredParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Gitignore>>;

  /**
   * Arguments object for method `deleteUserStarredOwnerRepo`.
   */
  deleteUserStarredOwnerRepoParams?: {
    /** Name of a repository owner. */
    owner: string,
    /** Name of a repository. */
    repo: string,
    /**
     * You can check the current version of media type in responses.
     * 
     */
    xGitHubMediaType?: string,
    /** Is used to set specified media type. */
    accept?: string,
    xRateLimit?: number,
    xRateLimitRemaining?: number,
    xRateLimitReset?: number,
    xGitHubRequestId?: number,
  };

  /**
   * Unstar a repository
   * Response generated for [ 204 ] HTTP response code.
   */
  deleteUserStarredOwnerRepo(
    args: Exclude<UserAPIClientInterface['deleteUserStarredOwnerRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  deleteUserStarredOwnerRepo(
    args: Exclude<UserAPIClientInterface['deleteUserStarredOwnerRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  deleteUserStarredOwnerRepo(
    args: Exclude<UserAPIClientInterface['deleteUserStarredOwnerRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;

  /**
   * Arguments object for method `getUserStarredOwnerRepo`.
   */
  getUserStarredOwnerRepoParams?: {
    /** Name of a repository owner. */
    owner: string,
    /** Name of a repository. */
    repo: string,
    /**
     * You can check the current version of media type in responses.
     * 
     */
    xGitHubMediaType?: string,
    /** Is used to set specified media type. */
    accept?: string,
    xRateLimit?: number,
    xRateLimitRemaining?: number,
    xRateLimitReset?: number,
    xGitHubRequestId?: number,
  };

  /**
   * Check if you are starring a repository.
   * Response generated for [ 204 ] HTTP response code.
   */
  getUserStarredOwnerRepo(
    args: Exclude<UserAPIClientInterface['getUserStarredOwnerRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  getUserStarredOwnerRepo(
    args: Exclude<UserAPIClientInterface['getUserStarredOwnerRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  getUserStarredOwnerRepo(
    args: Exclude<UserAPIClientInterface['getUserStarredOwnerRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;

  /**
   * Arguments object for method `putUserStarredOwnerRepo`.
   */
  putUserStarredOwnerRepoParams?: {
    /** Name of a repository owner. */
    owner: string,
    /** Name of a repository. */
    repo: string,
    /**
     * You can check the current version of media type in responses.
     * 
     */
    xGitHubMediaType?: string,
    /** Is used to set specified media type. */
    accept?: string,
    xRateLimit?: number,
    xRateLimitRemaining?: number,
    xRateLimitReset?: number,
    xGitHubRequestId?: number,
  };

  /**
   * Star a repository.
   * Response generated for [ 204 ] HTTP response code.
   */
  putUserStarredOwnerRepo(
    args: Exclude<UserAPIClientInterface['putUserStarredOwnerRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  putUserStarredOwnerRepo(
    args: Exclude<UserAPIClientInterface['putUserStarredOwnerRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  putUserStarredOwnerRepo(
    args: Exclude<UserAPIClientInterface['putUserStarredOwnerRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;

  /**
   * Arguments object for method `getUserSubscriptions`.
   */
  getUserSubscriptionsParams?: {
    /**
     * You can check the current version of media type in responses.
     * 
     */
    xGitHubMediaType?: string,
    /** Is used to set specified media type. */
    accept?: string,
    xRateLimit?: number,
    xRateLimitRemaining?: number,
    xRateLimitReset?: number,
    xGitHubRequestId?: number,
  };

  /**
   * List repositories being watched by the authenticated user.
   * Response generated for [ 200 ] HTTP response code.
   */
  getUserSubscriptions(
    args?: UserAPIClientInterface['getUserSubscriptionsParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.UserIdSubscribitions>;
  getUserSubscriptions(
    args?: UserAPIClientInterface['getUserSubscriptionsParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.UserIdSubscribitions>>;
  getUserSubscriptions(
    args?: UserAPIClientInterface['getUserSubscriptionsParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.UserIdSubscribitions>>;

  /**
   * Arguments object for method `deleteUserSubscriptionsOwnerRepo`.
   */
  deleteUserSubscriptionsOwnerRepoParams?: {
    /** Name of the owner. */
    owner: string,
    /** Name of repository. */
    repo: string,
    /**
     * You can check the current version of media type in responses.
     * 
     */
    xGitHubMediaType?: string,
    /** Is used to set specified media type. */
    accept?: string,
    xRateLimit?: number,
    xRateLimitRemaining?: number,
    xRateLimitReset?: number,
    xGitHubRequestId?: number,
  };

  /**
   * Stop watching a repository
   * Response generated for [ 204 ] HTTP response code.
   */
  deleteUserSubscriptionsOwnerRepo(
    args: Exclude<UserAPIClientInterface['deleteUserSubscriptionsOwnerRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  deleteUserSubscriptionsOwnerRepo(
    args: Exclude<UserAPIClientInterface['deleteUserSubscriptionsOwnerRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  deleteUserSubscriptionsOwnerRepo(
    args: Exclude<UserAPIClientInterface['deleteUserSubscriptionsOwnerRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;

  /**
   * Arguments object for method `getUserSubscriptionsOwnerRepo`.
   */
  getUserSubscriptionsOwnerRepoParams?: {
    /** Name of the owner. */
    owner: string,
    /** Name of repository. */
    repo: string,
    /**
     * You can check the current version of media type in responses.
     * 
     */
    xGitHubMediaType?: string,
    /** Is used to set specified media type. */
    accept?: string,
    xRateLimit?: number,
    xRateLimitRemaining?: number,
    xRateLimitReset?: number,
    xGitHubRequestId?: number,
  };

  /**
   * Check if you are watching a repository.
   * Response generated for [ 204 ] HTTP response code.
   */
  getUserSubscriptionsOwnerRepo(
    args: Exclude<UserAPIClientInterface['getUserSubscriptionsOwnerRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  getUserSubscriptionsOwnerRepo(
    args: Exclude<UserAPIClientInterface['getUserSubscriptionsOwnerRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  getUserSubscriptionsOwnerRepo(
    args: Exclude<UserAPIClientInterface['getUserSubscriptionsOwnerRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;

  /**
   * Arguments object for method `putUserSubscriptionsOwnerRepo`.
   */
  putUserSubscriptionsOwnerRepoParams?: {
    /** Name of the owner. */
    owner: string,
    /** Name of repository. */
    repo: string,
    /**
     * You can check the current version of media type in responses.
     * 
     */
    xGitHubMediaType?: string,
    /** Is used to set specified media type. */
    accept?: string,
    xRateLimit?: number,
    xRateLimitRemaining?: number,
    xRateLimitReset?: number,
    xGitHubRequestId?: number,
  };

  /**
   * Watch a repository.
   * Response generated for [ 204 ] HTTP response code.
   */
  putUserSubscriptionsOwnerRepo(
    args: Exclude<UserAPIClientInterface['putUserSubscriptionsOwnerRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  putUserSubscriptionsOwnerRepo(
    args: Exclude<UserAPIClientInterface['putUserSubscriptionsOwnerRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  putUserSubscriptionsOwnerRepo(
    args: Exclude<UserAPIClientInterface['putUserSubscriptionsOwnerRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;

  /**
   * Arguments object for method `getUserTeams`.
   */
  getUserTeamsParams?: {
    /**
     * You can check the current version of media type in responses.
     * 
     */
    xGitHubMediaType?: string,
    /** Is used to set specified media type. */
    accept?: string,
    xRateLimit?: number,
    xRateLimitRemaining?: number,
    xRateLimitReset?: number,
    xGitHubRequestId?: number,
  };

  /**
   * List all of the teams across all of the organizations to which the authenticated user belongs. This method requires user or repo scope when authenticating via OAuth.
   * Response generated for [ 200 ] HTTP response code.
   */
  getUserTeams(
    args?: UserAPIClientInterface['getUserTeamsParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.TeamsList>;
  getUserTeams(
    args?: UserAPIClientInterface['getUserTeamsParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.TeamsList>>;
  getUserTeams(
    args?: UserAPIClientInterface['getUserTeamsParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.TeamsList>>;

}
