/* tslint:disable */
import {
  Pet,
} from '.';

export interface Dog extends Pet {
  bark?: boolean;
  breed?: ('Dingo' | 'Husky' | 'Retriever' | 'Shepherd');
}
