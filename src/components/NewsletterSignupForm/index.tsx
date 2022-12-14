import clsx from 'clsx';
import { useFormik } from 'formik';
import React from 'react';
import {
  Honeypot,
  NetlifyFormComponent,
  NetlifyFormProvider,
  useNetlifyForm,
} from 'react-netlify-forms';
import * as Yup from 'yup';
import styles from './index.module.css';

export default function NewsletterSignupForm(): JSX.Element {
  const netlify = useNetlifyForm({
    name: 'newsletter-signup',
    honeypotName: 'bot-field',
    onSuccess: () => {
      // eslint-disable-next-line no-console
      console.log('Successfully sent form data to Netlify Server');
    },
  });
  const { handleSubmit, handleChange, handleBlur, touched, errors, values } =
    useFormik({
      initialValues: { email: '' },
      onSubmit: (values) => netlify.handleSubmit(null, values),
      validationSchema: Yup.object().shape({
        email: Yup.string()
          .nullable()
          .required('Please provide a valid email address')
          .email('Please provide a valid email address'),
      }),
    });

  return (
    <NetlifyFormProvider {...netlify}>
      <NetlifyFormComponent onSubmit={handleSubmit} className={styles.form}>
        <Honeypot />
        {netlify.success ? (
          <p
            className={clsx('alert alert--success', styles.alert)}
            role="alert"
          >
            Thank you for signing up!
          </p>
        ) : netlify.error ? (
          <p className={clsx('alert alert--danger', styles.alert)} role="alert">
            Sorry, something went wrong.
          </p>
        ) : (
          <>
            <label htmlFor="email">Email address</label>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Email address"
              />
              <button
                type="submit"
                className="button button--lg button--primary"
                disabled={netlify.submitting || errors.email}
              >
                Subscribe
              </button>
            </div>
            <p className={clsx(styles.error)} aria-live="polite">
              {touched.email ? errors.email : <>&nbsp;</>}
            </p>
          </>
        )}
      </NetlifyFormComponent>
    </NetlifyFormProvider>
  );
}
