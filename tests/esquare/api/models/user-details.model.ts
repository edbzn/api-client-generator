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
  UserStatus,
} from '.';

export interface UserDetails {
  email?: string;
  entities?: number[];
  firstName?: string;
  id?: number;
  imageData?: string;  // base64 user uploaded image string
  imageUrl?: string;  // url to user avatar image
  lastName?: string;
  login?: string;
  phone?: string;
  roleId?: number;
  status?: UserStatus;
  title?: string;
}
