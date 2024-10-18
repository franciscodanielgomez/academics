import { DocsLayout } from 'fumadocs-ui/layout';
import type { ReactNode } from 'react';
import { baseOptions } from '../layout.config';
import { source } from '@/app/source';
import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle';

export default function Layout({ children }: { children: ReactNode }) {
  return (
      <DocsLayout
          tree={source.pageTree}
          {...baseOptions}
          sidebar={{
            banner: (
                <RootToggle
                    options={[
                      {
                        title: 'Física 2',
                        description: 'Ejemplo',
                        url: '/docs',
                      },

                    ]}
                />
            ),
          }}
      >
        {children}
      </DocsLayout>
  );
}