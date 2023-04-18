import { Link } from '@remix-run/react';
import FlavorsGrid from '~/components/FlavorsGrid';
import ScrollableFlavors from '~/components/ScrollableFlavors';
export default function Home() {
  return (
    <article>
      <section className='py-16'>
        <h2 className='text-5xl font-bold text-center'>More salt not less.</h2>
        <p className='text-center mt-8 max-w-lg text-lg text-gray-800 mx-auto'>
          A growing body of research reveals that optimal health outcomes occur
          at sodium levels 2-3x government recommendations. That’s why we say,
          More Salt, Not Less.{' '}
          <Link className='font-bold hover:underline' to='/science'>
            Read more...
          </Link>
        </p>
      </section>
      <section className='py-16 bg-gray-950'>
        <div className='mx-auto max-w-[1300px]'>
          <h2 className='text-4xl lg:text-5xl font-bold text-center text-white max-w-2xl mx-auto mb-16'>
            A flavor for every occasion. One tasty formulation.
          </h2>

          {/* this will only display on large tablets and smaller */}
          <ScrollableFlavors />

          {/* this will only display on large desktops and larger */}
          <FlavorsGrid />

          <div className='flex justify-center mt-6'>
            <Link
              to='/store'
              className='text-white border border-white rounded-l-full rounded-r-full py-4 px-7 hover:bg-brand-blue hover:text-gray-900 hover:border-brand-blue'
            >
              Get Yours
            </Link>
          </div>
        </div>
      </section>
      <section className='py-16'>
        <h2 className='text-5xl font-bold text-center'>Health is a process.</h2>
        <p className='text-center mt-8 max-w-lg text-lg text-gray-800 mx-auto'>
          LMNT co-founder Robb Wolf shares the health journey that sparked a
          salty rebellion.
          <Link className='font-bold hover:underline' to='/science'>
            Read more...
          </Link>
        </p>
      </section>
    </article>
  );
}

export const meta = () => {
  return [{ title: 'New Remix App' }];
};
