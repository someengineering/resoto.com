/* eslint-disable no-console */
import { Handler, HandlerEvent } from '@netlify/functions';
import fetch from 'node-fetch';

const handler: Handler = async (event: HandlerEvent) => {
  const { BUTTONDOWN_API_KEY } = process.env;
  const email = JSON.parse(event.body ?? '').payload.email;

  console.log(`Received email signup form submission: ${email}`);

  try {
    const response = await fetch(
      'https://api.buttondown.email/v1/subscribers',
      {
        method: 'post',
        body: JSON.stringify({ email }),
        headers: {
          Authorization: `Token ${BUTTONDOWN_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();

    console.log(`Sent email signup request to Buttondown: ${data}`);

    return {
      statusCode: 200,
      body: JSON.stringify({ data }),
    };
  } catch (error) {
    console.log(`Error sending email signup request to Buttondown: ${error}`);

    return { statusCode: 422, body: JSON.stringify({ error }) };
  }
};

export { handler };
