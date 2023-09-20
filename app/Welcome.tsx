/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button';

export function Welcome() {
  return (
    <Card className="max-w-lg">
      <CardHeader>
        <CardTitle>FusionAuth Admin UI</CardTitle>
        <CardDescription>Welcome!</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Link
          href="/admin"
          className={buttonVariants({ variant: 'secondary' })}
        >
          Open Admin Portal
        </Link>
        <p>
          If you don't have an admin account to FusionAuth, no need to click
          there you won't get very far. You'll want to theme this page to either
          redirect to your site, or provide links for your end users to find
          their applications.
        </p>
        <p>
          Here are some links to help you get started! Welcome to the FusionAuth
          community, we're glad to have you!
        </p>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <Link
          href="https://fusionauth.io/docs/v1/tech/getting-started/"
          target="_blank"
          className={buttonVariants({ variant: 'link' })}
        >
          Getting Started
        </Link>
        <Link
          href="https://fusionauth.io/docs/v1/tech/themes"
          target="_blank"
          className={buttonVariants({ variant: 'link' })}
        >
          Themes
        </Link>
        <Link
          href="https://fusionauth.io/docs/"
          target="_blank"
          className={buttonVariants({ variant: 'link' })}
        >
          Documentation
        </Link>
        <Link
          href="https://fusionauth.io/community/"
          target="_blank"
          className={buttonVariants({ variant: 'link' })}
        >
          Community and Support
        </Link>
      </CardFooter>
    </Card>
  );
}
