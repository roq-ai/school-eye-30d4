import { HomeworkInterface } from 'interfaces/homework';
import { PhotoInterface } from 'interfaces/photo';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface SchoolInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  homework?: HomeworkInterface[];
  photo?: PhotoInterface[];
  user?: UserInterface;
  _count?: {
    homework?: number;
    photo?: number;
  };
}

export interface SchoolGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
