/* eslint-disable @typescript-eslint/no-explicit-any */
import { GridContentProps } from '../components/GridContent';
import { GridImageElementProps, GridImageProps } from '../components/GridImage';
import {
  GridSectionElementProps,
  GridSectionProps,
} from '../components/GridSection';
import { GridTwoColumnProps } from '../components/GridTwoColumn';
import { PricingProps } from '../components/Pricing';
import { SectionContactProps } from '../components/SectionContact';
import { SectionProps } from '../templates/Home';

export const mapSections = (sections = []): SectionProps[] => {
  return sections.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      return mapSectionTwoColumns(section);
    }

    if (section.__component === 'section.section-content') {
      return mapSectionContent(section);
    }

    if (section.__component === 'section.section-grid-text') {
      return mapTextGrid(section);
    }

    if (section.__component === 'section.section-grid-image') {
      return mapImageGrid(section);
    }

    if (section.__component === 'section.section-pricing') {
      return mapPricing(section);
    }

    if (section.__component === 'section.section-contact') {
      return mapSectionContact(section);
    }

    return section;
  });
};

export const mapSectionTwoColumns = (
  section = {} as any,
): GridTwoColumnProps => {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    image: { data: { attributes: { url: image = '' } = '' } = '' } = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  return {
    component,
    title,
    text,
    image,
    background,
    sectionId,
  };
};

export const mapSectionContent = (section = {} as any): GridContentProps => {
  const {
    __component: component = '',
    title = '',
    content: html = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  return {
    component,
    title,
    html,
    background,
    sectionId,
  };
};

export const mapTextGrid = (section = {} as any): GridSectionProps => {
  const {
    __component: component = '',
    title = '',
    description = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
    text_grid: grid = [],
  } = section;

  return {
    component,
    title,
    description,
    background,
    sectionId,
    grid: grid.map((text: any): GridSectionElementProps => {
      const { title = '', description = '' } = text;

      return {
        title,
        description,
      };
    }),
  };
};

export const mapImageGrid = (section = {} as any): GridImageProps => {
  const {
    __component: component = '',
    title = '',
    description = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
    image_grid,
  } = section;

  return {
    component,
    title,
    description,
    background,
    sectionId,
    grid: image_grid?.data?.map((img: any): GridImageElementProps => {
      const { url: image, name: altText } = img.attributes;

      return {
        image,
        altText,
      };
    }),
  };
};

export const mapPricing = (section = {} as any): PricingProps => {
  const {
    __component: component = '',
    title = '',
    description_one = '',
    description_two = '',
    table = [],
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  return {
    component,
    title,
    description_one,
    description_two,
    table,
    background,
    sectionId,
  };
};

export const mapSectionContact = (section = {} as any): SectionContactProps => {
  const {
    contact: {
      first_name = '',
      last_name = '',
      email = '',
      message = '',
      button = '',
    } = false,
  } = section;

  const {
    __component: component = '',
    metadata: {
      background = true,
      section_id: sectionId = '',
      name = '',
    } = false,
  } = section;

  return {
    component,
    name,
    first_name,
    last_name,
    email,
    message,
    button,
    background,
    sectionId,
  };
};
