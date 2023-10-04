import { Button } from '@/components/Elements';
import { ContentLayout } from '@/components/Layout';

export const NotFound = () => {
  return (
    <ContentLayout title="404" description="React front-end developer based in Adelaide">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          <span className="block">404 Not found</span>
        </h2>

        <Button className="mt-4" onClick={() => window.location.assign(window.location.origin)}>
          Home
        </Button>
      </div>
    </ContentLayout>
  );
};
