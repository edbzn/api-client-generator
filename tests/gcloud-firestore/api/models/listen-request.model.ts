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
  Target,
} from '.';

/**
 * A request for Firestore.Listen
 */
export interface ListenRequest {
  addTarget?: Target;  // A target to add to this stream.
  labels?: { [key: string]: string };  // Labels associated with this target change.
  removeTarget?: number;  // The ID of a target to remove from this stream.
}
