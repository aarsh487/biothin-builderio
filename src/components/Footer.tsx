import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { About } from '@/data/about';
import { SocialLink } from '@/data/social-links';
import { FooterLink } from '@/data/footer-links';

export type FooterProps = {
  about: About;
  socialLinks: SocialLink[];
  footerLinks: FooterLink[];
};

export default function Footer({ about, socialLinks, footerLinks }: FooterProps) {
  const shortDescription = about?.data?.shortDescription;
  const brandLogo = about?.data?.brandLogo;
  const socialLinksStringify = JSON.stringify(socialLinks);


  return (
    <footer className="not-prose container flex flex-col gap-y-12 py-12 px-20 lg:flex-row lg:justify-between lg:gap-x-24 lg:py-16">
      <div className='flex items-center gap-20'>
        <div className="flex flex-col gap-3 lg:gap-6">
          {shortDescription && (
            <p className="text-xl/8 font-extrabold text-muted-foreground lg:text-[1.5rem]/8">
              {shortDescription}
            </p>
          )}

          {brandLogo && (
            <Link
              className="block h-[50px] w-max hover:brightness-125 lg:h-[72px]"
              href="https://dr-pfleger.de/"
            >
              <Image
                className="h-full w-auto"
                alt="Go to home"
                src={brandLogo}
                width={304}
                height={72}
              />
            </Link>
          )}
        </div>
        {socialLinksStringify.length > 0 && (
          <div className="flex flex-wrap max-w-42 items-center gap-10 lg:gap-8 lg:gap-y-4">
            {socialLinks.map((data, idx) => (
              <Link
                key={data.label ?? idx}
                href={data.url}
                className={cn(
                  'flex w-max shrink-0 items-center gap-4 text-xl/8 font-extrabold text-accent2 hover:brightness-125 lg:gap-8 lg:text-2xl/8',
                  data.showTitle && 'md:w-full md:grow'
                )}
              >
                <Image
                  src={data.icon}
                  alt={`${data.label} icon`}
                  width={42}
                  height={42}
                  unoptimized
                  className="size-9 shrink-0 lg:size-[42px]"
                />
              </Link>
            ))}
          </div>
        )}
      </div>

      {footerLinks.length > 0 && (
        <nav className="flex flex-col gap-5 lg:gap-2">
          {footerLinks.map((data, idx) => (
            <Link
              key={data.label ?? idx}
              href={"/sigma"}
              className="w-max text-xl/8 text-info font-extrabold text-accent2 hover:brightness-125 lg:text-xl/8"
            >
              {data.label}
            </Link>
          ))}
        </nav>
      )}
    </footer>
  );
}
