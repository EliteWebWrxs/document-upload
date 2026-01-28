import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

import createImageUrlBuilder from '@sanity/image-url'

import { dataset, projectId } from './sanity.api'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlForImage = (source: any) => {
  // Ensure that source image contains a valid reference
  if (!source?.asset?._ref) {
    return undefined
  }

  return imageBuilder?.image(source)
}
