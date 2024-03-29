'use client';

import { ClipboardIcon, CheckIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { type JSX } from 'react';

export default function Banner ({
  name,
  description,
  tags,
  version,
  tooth,
  releasedAt
}: Readonly<{
  name: string
  description: string
  tags: string[]
  version: string
  tooth: string
  releasedAt: string
}>): JSX.Element {
  const releaseTimeString = new Date(releasedAt).toLocaleString();

  const handleClipboardClick = (): void => {
    navigator.clipboard.writeText(`lip install ${tooth}@${version}`).catch(() => {
      console.error('Failed to copy to clipboard');
    });

    const clipboardIcon = document.querySelector('.lipweb-clipboard-icon');
    const checkIcon = document.querySelector('.lipweb-check-icon');

    clipboardIcon?.classList.add('hidden');
    checkIcon?.classList.remove('hidden');

    // Reset after 1 second
    setTimeout(() => {
      clipboardIcon?.classList.remove('hidden');
      checkIcon?.classList.add('hidden');
    }, 1000);
  };

  return (
    <div className="py-10 bg-background px-3 text-foreground">
      <div className="container mx-auto">
        <div className="flex mt-24">
          <h1 className="text-2xl mr-3">{name}</h1>
          {tags.map(tag => (
            <div
              key={tag}
              className="rounded-lg border bg-secondary flex mx-1 px-4 py-1"
            >
              <span>{tag}</span>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <div className="container mx-auto">
            <span>{description}</span>
          </div>
        </div>
        <div className="flex mt-5 text-sm">
          <span className="mr-2">Version: {version}</span>
          <span className="mr-2">|</span>
          <span>Released: {releaseTimeString}</span>
        </div>
        <div className="mt-5 flex justify-start">
          <div className="flex bg-slate-200 dark:bg-slate-700 p-3 rounded-l-md break-all">
            <code>
              lip install {tooth}@{version}
            </code>
          </div>
          <button
            className="flex bg-slate-300 dark:bg-slate-600 p-3 rounded-r-md hover:bg-slate-400 dark:hover:bg-slate-500 transition"
            onClick={() => handleClipboardClick()}
          >
            <ClipboardIcon className="lipweb-clipboard-icon h-6 w-6" />
            <CheckIcon className="lipweb-check-icon h-6 w-6 hidden" />
          </button>
        </div>
        <Link href={`https://${tooth}`} className='pt-4 text-blue-400'>Go to the repo</Link>
      </div>
    </div>
  );
}
