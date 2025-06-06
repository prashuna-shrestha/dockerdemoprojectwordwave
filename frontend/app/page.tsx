import { Suspense } from 'react';
import HomeClient from '@/components/HomeClient';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading homepage...</div>}>
      <HomeClient />
    </Suspense>
  );
}
