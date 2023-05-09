import clsx from 'clsx';
import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import {
  Honeypot,
  NetlifyFormComponent,
  NetlifyFormProvider,
  useNetlifyForm,
} from 'react-netlify-forms';
import * as Yup from 'yup';
import homepageStyles from '../../pages/index.module.css';
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
      initialValues: {
        email: '',
        referrer_url: '',
      },
      onSubmit: (values) => netlify.handleSubmit(null, values),
      validationSchema: Yup.object().shape({
        email: Yup.string()
          .nullable()
          .required('Please provide a valid email address')
          .email('Please provide a valid email address'),
      }),
    });

  useEffect(() => {
    values.referrer_url = window.location.href;
  }, []);

  return (
    <section className={homepageStyles.section}>
      <div className={clsx(homepageStyles.inner, styles.flex)}>
        <div>
          <h2 className={styles.heading}>
            Resoto <br />
            Newsletter
          </h2>
          <NetlifyFormProvider {...netlify}>
            <NetlifyFormComponent
              onSubmit={handleSubmit}
              className={styles.form}
            >
              <Honeypot />
              {netlify.success ? (
                <p className={styles.alert} role="alert">
                  Thank you for signing up! Please check your inbox to confirm
                  your subscription.
                </p>
              ) : netlify.error ? (
                <p className={styles.alert} role="alert">
                  Sorry, something went wrong.
                </p>
              ) : (
                <>
                  <p className={clsx(styles.error)} aria-live="polite">
                    {touched.email ? errors.email : <>&nbsp;</>}
                  </p>
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="Email address"
                    className={
                      touched.email && errors.email ? styles.inputError : ''
                    }
                  />
                  <button
                    type="submit"
                    className={clsx(
                      homepageStyles.button,
                      homepageStyles.primaryButton
                    )}
                    disabled={netlify.submitting || errors.email}
                  >
                    Subscribe
                  </button>
                  <input
                    type="hidden"
                    name="referrer_url"
                    id="referrer_url"
                    value={values.referrer_url}
                  />
                </>
              )}
            </NetlifyFormComponent>
          </NetlifyFormProvider>
        </div>
        <div className={styles.image} aria-hidden="true" />
      </div>
    </section>
  );
}
