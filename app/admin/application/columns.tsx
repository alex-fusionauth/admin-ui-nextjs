'use client';

import { Button, buttonVariants } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';
import { BiEdit } from 'react-icons/bi';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Application } from '@fusionauth/typescript-client';

export const columns: ColumnDef<Application>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'id',
    header: 'Id',
  },
  {
    accessorFn: (originalRow) => originalRow.roles?.length,
    header: 'Roles',
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const app = row.original;

      return (
        <div className="flex gap-2 xl:gap-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Link
                  href={`/admin/application/edit/${app.id}`}
                  className={buttonVariants({
                    variant: 'default',
                    size: 'icon',
                  })}
                >
                  <BiEdit />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Edit</p>
              </TooltipContent>
            </Tooltip>

            <Dialog>
              <DialogTrigger asChild>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant={'outline'}>
                      <FaMagnifyingGlass />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Add to library</p>
                  </TooltipContent>
                </Tooltip>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Details</DialogTitle>
                  <DialogDescription>
                    <ScrollArea>{JSON.stringify(app)}</ScrollArea>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </TooltipProvider>
        </div>
      );
    },
  },
];
