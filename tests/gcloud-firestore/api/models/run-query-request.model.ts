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
  StructuredQuery,
  TransactionOptions,
} from '.';

/**
 * The request for Firestore.RunQuery.
 */
export interface RunQueryRequest {
  newTransaction?: TransactionOptions;  // Starts a new transaction and reads the documents.Defaults to a read-only transaction.The new transaction ID will be returned as the first response in thestream.
  readTime?: string;  // Reads documents as they were at the given time.This may not be older than 60 seconds.
  structuredQuery?: StructuredQuery;  // A structured query.
  transaction?: string;  // Reads documents in a transaction.
}
