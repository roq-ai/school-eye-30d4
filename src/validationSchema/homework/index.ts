import * as yup from 'yup';

export const homeworkValidationSchema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
  user_id: yup.string().nullable(),
  school_id: yup.string().nullable(),
});
