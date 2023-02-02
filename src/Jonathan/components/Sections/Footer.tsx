import {ChevronUpIcon} from '@heroicons/react/outline';
import Link from 'next/link';
import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import Socials from '../Socials';

const Footer: FC = memo(() => (
  <div className="relative bg-neutral-900 px-4 pb-6 pt-12 sm:px-8 sm:pt-14 sm:pb-8">
    <div className="absolute inset-x-0 -top-4 flex justify-center sm:-top-6">
      <Link href={`/Jonathan/#${SectionId.Hero}`} passHref>
        <a className="rounded-full bg-neutral-100 p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2">
          <ChevronUpIcon className="h-6 w-6 bg-transparent sm:h-8 sm:w-8" />
        </a>
      </Link>
    </div>
    <div className="flex flex-col items-center gap-y-6">
      <div className="flex gap-x-4 text-neutral-500">
        <Socials />
      </div>
      <span className="text-sm text-neutral-700">
        Designed & Built by
        <a
          href="https://github.com/ChrisBJHU/Website"
          rel="noreferrer"
          style={{textDecoration: 'none', color: 'inherit'}}
          target="_blank">
          {' '}
          Christian Bakhit & Jonathan Bakhit
        </a>
      </span>
      <span className="text-sm text-neutral-700">Version 2.0.0</span>
    </div>
  </div>
));

Footer.displayName = 'Footer';
export default Footer;
