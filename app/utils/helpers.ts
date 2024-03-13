import { SlugifyFunction } from './types';

/**
 * Function to create a slug from a given text.
 * @param {string} text - The text to slugify.
 * @returns {string} - The slugified text.
 */
export const slugify: SlugifyFunction = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[ıİ]/g, 'i') // Replace special Turkish characters with their English equivalents
    .replace(/[^\w\s]/g, '') // Remove characters other than alphanumeric and space
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .trim();
};
