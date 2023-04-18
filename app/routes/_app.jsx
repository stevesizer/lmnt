import { Outlet } from '@remix-run/react';
import Navigation from '~/components/navigation/MainHeader';

export default function AppLayout() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}
