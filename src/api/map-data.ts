/* eslint-disable @typescript-eslint/no-explicit-any */
import { PageData } from '../templates/Home';
import { mapMenu } from './map-menu';
import { mapSections } from './map-sections';

export const mapData = (pagesData = [{}] as any): PageData[] => {
  return pagesData.map((data: any): PageData => {
    const {
      footer = '',
      slug = '',
      title = '',
      sections = [],
      menu = {},
    } = data;

    return {
      footerHtml: footer,
      slug,
      title,
      sections: mapSections(sections),
      menu: mapMenu(menu),
    };
  });
};
