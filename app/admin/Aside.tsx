import { ScrollArea } from '@/components/ui/scroll-area';
import NavGroup from './NavGroup';

export default function Aside() {
  return (
    <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
      <ScrollArea className="h-full w-full p-4">
        <NavGroup
          heading=""
          links={[
            { name: 'Dashboard', href: '/admin' },
            { name: 'Users', href: '/admin/user' },
            { name: 'Applications', href: '/admin/application' },
            { name: 'Groups', href: '/admin/group' },
            { name: 'Tenants', href: '/admin/tenant' },
          ]}
        />
      </ScrollArea>
    </aside>
  );
}
