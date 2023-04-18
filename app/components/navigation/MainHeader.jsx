import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { Link } from '@remix-run/react';

const navigation = {
  pages: [
    { name: 'Store', href: '/store' },
    { name: 'Our Story', href: '/our-story' },
    { name: 'Formulation', href: '/ingredients' },
    { name: 'Science', href: '/science' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
    { name: 'Account', href: '/account' },
  ],
};

export default function MainHeader() {
  const [open, setOpen] = useState(false);

  return (
    <div className='bg-white'>
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as='div' className='relative z-40 lg:hidden' onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 z-40 flex'>
            <Transition.Child
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='-translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='-translate-x-full'
            >
              <Dialog.Panel className='relative flex w-full max-w-xs flex-col overflow-y-auto bg-black pb-12 shadow-xl'>
                <div className='flex px-4 pb-2 pt-5'>
                  <button
                    type='button'
                    className='-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-50'
                    onClick={() => setOpen(false)}
                  >
                    <span className='sr-only'>Close menu</span>
                    <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                  </button>
                </div>

                {/* Links */}

                <div className='space-y-6 border-t border-gray-700 px-4 py-6'>
                  {navigation.pages.map((page) => (
                    <div key={page.name} className='flow-root'>
                      <a
                        href={page.href}
                        className='-m-2 block p-2 font-medium text-gray-100'
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className='space-y-6 border-t border-gray-700 px-4 py-6'>
                  <div className='flow-root'>
                    <a
                      href='#'
                      className='-m-2 block p-2 font-medium text-gray-100'
                    >
                      Create an account
                    </a>
                  </div>
                  <div className='flow-root'>
                    <a
                      href='#'
                      className='-m-2 block p-2 font-medium text-gray-100'
                    >
                      Sign in
                    </a>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className='relative'>
        <nav aria-label='Top'>
          {/* Top navigation */}
          <div className='bg-brand-blue'>
            <div className='mx-auto flex h-10 max-w-[1300px] items-center justify-between px-4 sm:px-6 lg:px-8'>
              {/* Currency selector */}
              <div className='hidden lg:block lg:flex-1'></div>

              <p className='flex-1 text-center text-sm font-medium text-gray-900 lg:flex-none'>
                Get free delivery on all US orders
              </p>

              <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
                <a
                  href='#'
                  className='text-sm font-medium text-gray-900 hover:text-gray-800'
                >
                  Create an account
                </a>
                <span className='h-6 w-px bg-gray-600' aria-hidden='true' />
                <a
                  href='#'
                  className='text-sm font-medium text-gray-900 hover:text-gray-800'
                >
                  Sign in
                </a>
              </div>
            </div>
          </div>

          {/* Secondary navigation */}
          <div className='bg-black'>
            <div className='mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8'>
              <div>
                <div className='flex h-20 items-center justify-between'>
                  {/* Logo (lg+) */}
                  <div className='hidden lg:flex lg:items-center'>
                    <Link to='/'>
                      <span className='sr-only'>LMNT</span>
                      <svg
                        className='h-12 w-auto text-white'
                        version='1.0'
                        xmlns='http://www.w3.org/2000/svg'
                        width='100%'
                        height='100%'
                        viewBox='0 0 53.18 53'
                        xmlSpace='preserve'
                      >
                        <g fill='currentColor'>
                          <path d='M29.898 24.068V13.821l4.418 6.683h.09l4.461-6.75v10.317h3.465v-15.8h-3.759l-4.167 6.68-4.168-6.681h-3.76v15.799h3.42zM29.193 32.133h4.825v12.594h3.488V32.133h4.824v-3.205H29.193zM22.239 20.91h-7.906V8.27h-3.487v15.799h11.393z'></path>
                          <path d='M0 0v53h53.18V0H0zm49.693 49.521H3.416V3.476h46.277v46.045z'></path>
                          <path d='M14.288 34.684l7.68 10.043h2.967V28.928h-3.443v9.73l-7.43-9.73h-3.216v15.799h3.442z'></path>
                        </g>
                      </svg>
                    </Link>
                  </div>

                  <div className='hidden h-full lg:flex'>
                    {/* Links */}
                    <ul className='text-white flex items-center gap-8 ml-8 text-lg font-medium '>
                      <li>
                        <Link className='hover:text-brand-blue' to='/our-story'>
                          Our Story
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='hover:text-brand-blue'
                          to='/ingredients'
                        >
                          Formulation
                        </Link>
                      </li>
                      <li>
                        <Link className='hover:text-brand-blue' to='/science'>
                          Science
                        </Link>
                      </li>
                      <li>
                        <Link className='hover:text-brand-blue' to='/store'>
                          Store
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Mobile menu and search (lg-) */}
                  <div className='flex flex-1 items-center lg:hidden'>
                    <button
                      type='button'
                      className='-ml-2 rounded-md  p-2 text-gray-100'
                      onClick={() => setOpen(true)}
                    >
                      <span className='sr-only'>Open menu</span>
                      <Bars3Icon className='h-6 w-6' aria-hidden='true' />
                    </button>

                    {/* Search */}
                    <a
                      href='#'
                      className='ml-2 p-2 text-gray-100 hover:text-gray-200'
                    >
                      <span className='sr-only'>Search</span>
                      <MagnifyingGlassIcon
                        className='h-6 w-6'
                        aria-hidden='true'
                      />
                    </a>
                  </div>

                  {/* Logo (lg-) */}
                  <Link to='/' className='lg:hidden'>
                    <span className='sr-only'>LMNT</span>
                    <svg
                      className='h-12 w-auto text-white'
                      version='1.0'
                      xmlns='http://www.w3.org/2000/svg'
                      width='100%'
                      height='100%'
                      viewBox='0 0 53.18 53'
                      xmlSpace='preserve'
                    >
                      <g fill='currentColor'>
                        <path d='M29.898 24.068V13.821l4.418 6.683h.09l4.461-6.75v10.317h3.465v-15.8h-3.759l-4.167 6.68-4.168-6.681h-3.76v15.799h3.42zM29.193 32.133h4.825v12.594h3.488V32.133h4.824v-3.205H29.193zM22.239 20.91h-7.906V8.27h-3.487v15.799h11.393z'></path>
                        <path d='M0 0v53h53.18V0H0zm49.693 49.521H3.416V3.476h46.277v46.045z'></path>
                        <path d='M14.288 34.684l7.68 10.043h2.967V28.928h-3.443v9.73l-7.43-9.73h-3.216v15.799h3.442z'></path>
                      </g>
                    </svg>
                  </Link>

                  <div className='flex flex-1 items-center justify-end'>
                    <div className='flex items-center lg:ml-8'>
                      <div className='flex space-x-8'>
                        <div className='hidden lg:flex'>
                          <a
                            href='#'
                            className='-m-2 p-2 text-gray-100 hover:text-gray-200'
                          >
                            <span className='sr-only'>Search</span>
                            <MagnifyingGlassIcon
                              className='h-6 w-6'
                              aria-hidden='true'
                            />
                          </a>
                        </div>

                        <div className='flex'>
                          <a
                            href='#'
                            className='-m-2 p-2 text-gray-100 hover:text-gray-200'
                          >
                            <span className='sr-only'>Account</span>
                            <UserIcon className='h-6 w-6' aria-hidden='true' />
                          </a>
                        </div>
                      </div>

                      <span
                        className='mx-4 h-6 w-px bg-gray-200 lg:mx-6'
                        aria-hidden='true'
                      />

                      <div className='flow-root'>
                        <a
                          href='#'
                          className='group -m-2 flex items-center p-2'
                        >
                          <ShoppingCartIcon
                            className='h-6 w-6 flex-shrink-0 text-gray-100 group-hover:text-gray-200'
                            aria-hidden='true'
                          />
                          <span className='ml-2 text-sm font-medium text-brand-blue '>
                            0
                          </span>
                          <span className='sr-only'>
                            items in cart, view bag
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
