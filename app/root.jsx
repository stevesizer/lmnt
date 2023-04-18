import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
  Link,
} from '@remix-run/react';
import stylesheet from '~/styles/tailwind.css';
import favicon from '../public/LMNT_Favicon_32x32.png';
import MainHeader from '~/components/navigation/MainHeader';

export default function App() {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function links() {
  return [
    { rel: 'stylesheet', href: stylesheet },
    { rel: 'icon', type: 'image/svg+xml', href: favicon },
  ];
}

export function ErrorBoundary() {
  let error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <html lang='en'>
        <head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width,initial-scale=1' />
          <Links />
        </head>
        <body>
          <MainHeader />
          <div className='text-center my-12 px-8 md:px-0'>
            <h1 className='text-4xl font-bold'>
              {error.status} {error.statusText}
            </h1>
            <p className='text-lg mt-4'>{error.data}</p>
            <Link
              className='flex w-full max-w-lg mx-auto mt-6 flex-1 items-center justify-center rounded-md border border-transparent bg-brand-blue px-8 py-3 text-base font-medium text-gray-900  focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full'
              to='/'
            >
              Back to safety
            </Link>
          </div>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  } else if (error instanceof Error) {
    return (
      <html lang='en'>
        <head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width,initial-scale=1' />
          <Links />
        </head>
        <body>
          <MainHeader />
          <div className='text-center my-12 px-8 md:px-0'>
            <h1 className='text-4xl font-bold'>Error</h1>
            <p className='text-lg mt-4'>{error.message}</p>
            <Link
              className='flex w-full max-w-lg mx-auto mt-6 flex-1 items-center justify-center rounded-md border border-transparent bg-brand-blue px-8 py-3 text-base font-medium text-gray-900  focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full'
              to='/'
            >
              Back to safety
            </Link>
          </div>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  } else {
    return (
      <html lang='en'>
        <head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width,initial-scale=1' />
          <Links />
        </head>
        <body>
          <MainHeader />
          <div className='text-center my-12 px-8 md:px-0'>
            <h1 className='text-4xl font-bold'>Unknown Error</h1>
            <p className='text-lg mt-4'>An unknown error occurred.</p>
            <Link
              className='flex w-full max-w-lg mx-auto mt-6 flex-1 items-center justify-center rounded-md border border-transparent bg-brand-blue px-8 py-3 text-base font-medium text-gray-900  focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full'
              to='/'
            >
              Back to safety
            </Link>
          </div>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  }
}
