import * as React from 'react';

import { Head } from '../Head';

type ContentLayoutProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
};

export const ContentLayout = ({ children, title, description }: ContentLayoutProps) => {
  return (
    <>
      <Head title={title} description={description} />
      <div className="bg-white h-[100vh] flex items-center">
        <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">{children}</div>
      </div>
    </>
  );
};
