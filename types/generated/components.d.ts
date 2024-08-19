import type { Schema, Attribute } from '@strapi/strapi';

export interface NavigationBarButton extends Schema.Component {
  collectionName: 'components_navigation_bar_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    buttonString: Attribute.String;
    buttonSlug: Attribute.String;
  };
}

export interface NavigationBarDropDownLinks extends Schema.Component {
  collectionName: 'components_navigation_bar_drop_down_links';
  info: {
    displayName: 'Drop Down Link';
    description: '';
  };
  attributes: {
    dropDownLinkString: Attribute.String;
    dropDownLinkSlug: Attribute.String;
    dropDownLinks: Attribute.Component<'navigation-bar.link', true>;
  };
}

export interface NavigationBarLink extends Schema.Component {
  collectionName: 'components_navigation_bar_links';
  info: {
    displayName: 'Standard Link';
    description: '';
  };
  attributes: {
    linkString: Attribute.String;
    linkSlug: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'navigation-bar.button': NavigationBarButton;
      'navigation-bar.drop-down-links': NavigationBarDropDownLinks;
      'navigation-bar.link': NavigationBarLink;
    }
  }
}
