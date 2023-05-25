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

export default function ContactForm(): JSX.Element {
  const netlify = useNetlifyForm({
    name: 'contact',
    honeypotName: 'bot-field',
    onSuccess: () => {
      // eslint-disable-next-line no-console
      console.log('Successfully sent form data to Netlify Server');
    },
  });

  const { handleSubmit, handleChange, handleBlur, touched, errors, values } =
    useFormik({
      initialValues: {
        name: '',
        email: '',
        subject: '',
        message: '',
        referrer: '',
      },
      onSubmit: (values) => netlify.handleSubmit(null, values),
      validationSchema: Yup.object().shape({
        name: Yup.string().nullable().required('Please tell us your name'),
        email: Yup.string()
          .nullable()
          .required('Please enter a valid email address')
          .email('Please enter a valid email address'),
        message: Yup.string().nullable().required('Please enter a message'),
      }),
    });

  useEffect(() => {
    values.referrer = window.location.href;
  }, []);

  useEffect(() => {
    values.subject = `[Resoto] Inquiry from ${values.name}`;
  }, [values.name]);

  return (
    <section className={homepageStyles.section}>
      <div className={clsx(homepageStyles.inner, styles.flex)}>
        <div>
          <h2 className={styles.heading}>Contact Us</h2>
          <NetlifyFormProvider {...netlify}>
            <NetlifyFormComponent
              onSubmit={handleSubmit}
              className={styles.form}
            >
              <Honeypot />
              {netlify.success ? (
                <p className={styles.alert} role="alert">
                  Thank you for your message. We&rsquo;ll be in touch soon!
                </p>
              ) : netlify.error ? (
                <p className={styles.alert} role="alert">
                  Sorry, something went wrong.
                </p>
              ) : (
                <>
                  <p className={clsx(styles.error)} aria-live="polite">
                    {(touched.name ? errors.name : null) ?? <>&nbsp;</>}
                  </p>
                  <input
                    aria-label="Name"
                    placeholder="Your name"
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    className={
                      (touched.name && errors.name) ?? <>&nbsp;</>
                        ? styles.inputError
                        : ''
                    }
                  />

                  <p className={clsx(styles.error)} aria-live="polite">
                    {(touched.email ? errors.email : null) ?? <>&nbsp;</>}
                  </p>
                  <input
                    aria-label="Email address"
                    placeholder="Your email address"
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className={
                      touched.email && errors.email ? styles.inputError : ''
                    }
                  />

                  <input
                    type="hidden"
                    name="subject"
                    id="subject"
                    value={values.subject}
                  />

                  <p className={clsx(styles.error)} aria-live="polite">
                    {(touched.message ? errors.message : null) ?? <>&nbsp;</>}
                  </p>
                  <textarea
                    aria-label="Message"
                    placeholder="Your message"
                    id="message"
                    name="message"
                    autoComplete="on"
                    autoCorrect="on"
                    rows={5}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    className={
                      touched.message && errors.message ? styles.inputError : ''
                    }
                  />

                  <input
                    type="hidden"
                    name="referrer"
                    id="referrer"
                    value={values.referrer}
                  />

                  <button
                    type="submit"
                    className={clsx(
                      homepageStyles.button,
                      homepageStyles.primaryButton
                    )}
                    disabled={
                      netlify.submitting ||
                      errors.name ||
                      errors.email ||
                      errors.message
                    }
                  >
                    Submit
                  </button>
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
