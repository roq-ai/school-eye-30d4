import axios from 'axios';
import queryString from 'query-string';
import { HomeworkInterface, HomeworkGetQueryInterface } from 'interfaces/homework';
import { GetQueryInterface } from '../../interfaces';

export const getHomework = async (query?: HomeworkGetQueryInterface) => {
  const response = await axios.get(`/api/homework${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createHomework = async (homework: HomeworkInterface) => {
  const response = await axios.post('/api/homework', homework);
  return response.data;
};

export const updateHomeworkById = async (id: string, homework: HomeworkInterface) => {
  const response = await axios.put(`/api/homework/${id}`, homework);
  return response.data;
};

export const getHomeworkById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/homework/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteHomeworkById = async (id: string) => {
  const response = await axios.delete(`/api/homework/${id}`);
  return response.data;
};
