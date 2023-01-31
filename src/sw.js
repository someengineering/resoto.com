import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

export default function swCustom(params) {
  // Cache responses from external resources
  registerRoute(
    (context) =>
      [/cdn\.some.engineering/, /avatars\.githubusercontent/].some((regex) =>
        context.url.href.match(regex)
      ),
    new StaleWhileRevalidate()
  );
}
