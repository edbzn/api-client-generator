/**
 * This file is auto-generated by the API client generator.
 * https://github.com/flowup/api-client-generator
 *
 * Avoid editing this file manually unless necessary.
 * Please report any bugs so they can be addressed in future versions.
 */

/* tslint:disable */
/* eslint-disable */

import {
  WriteResult,
} from '.';

/**
 * The response for Firestore.Commit.
 */
export interface CommitResponse {
  commitTime?: string;  // The time at which the commit occurred.
  writeResults?: WriteResult[];  // The result of applying the writes.This i-th write result corresponds to the i-th write in therequest.
}
