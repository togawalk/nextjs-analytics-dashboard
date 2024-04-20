'use client'

import * as RadixAvatar from '@radix-ui/react-avatar';

export const Avatar = () => {
  return (
    <div>
      <RadixAvatar.Root
        className="relative inline-flex h-10 w-10 bg-black/5 rounded-full overflow-hidden "
      >
        <RadixAvatar.Image
          className='h-full w-full object-cover '
          src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
          alt="Colm Tuite"
          draggable="false"
        />
        <RadixAvatar.Fallback delayMs={600}
          className='flex h-full w-full items-center justify-center bg-white dark:bg-gray-800'
        >
          <span
            className='text-sm font-medium uppercase text-gray-700 dark:text-gray-400'
          >
            CT
          </span>
        </RadixAvatar.Fallback>
      </RadixAvatar.Root>
    </div>
  )
}
