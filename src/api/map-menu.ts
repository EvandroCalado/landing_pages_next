/* eslint-disable @typescript-eslint/no-explicit-any */
import { MenuLinkProps } from '../components/MenuLink';
import { PageData } from '../templates/Home';

export const mapMenu = (menu = {} as any): PageData['menu'] => {
  const {
    open_in_new_tab: newTab = false,
    logo_text: text = '',
    logo_link: link = '',
    logo: { data: { attributes: { url: image = '' } = '' } = '' } = '',
    menu_links: links = [],
  } = menu;

  return {
    newTab,
    text,
    link,
    image,
    links: mapMenuLinks(links),
  };
};

export const mapMenuLinks = (links = [] as any[]): MenuLinkProps[] => {
  return links.map((item): MenuLinkProps => {
    const {
      link_text: children = '',
      url: link = '',
      open_in_new_tab: newTab = false,
    } = item;

    return {
      children,
      link,
      newTab,
    };
  });
};
