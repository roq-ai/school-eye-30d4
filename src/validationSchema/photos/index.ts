import * as yup from 'yup';

export const photoValidationSchema = yup.object().shape({
  title: yup.string().required(),
  image_url: yup.string().required(),
  user_id: yup.string().nullable(),
  school_id: yup.string().nullable(),
});
