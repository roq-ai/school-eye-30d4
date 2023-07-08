import { UserInterface } from 'interfaces/user';
import { SchoolInterface } from 'interfaces/school';
import { GetQueryInterface } from 'interfaces';

export interface PhotoInterface {
  id?: string;
  title: string;
  image_url: string;
  user_id?: string;
  school_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  school?: SchoolInterface;
  _count?: {};
}

export interface PhotoGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  image_url?: string;
  user_id?: string;
  school_id?: string;
}
