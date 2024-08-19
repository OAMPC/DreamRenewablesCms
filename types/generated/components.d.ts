import type { Schema, Attribute } from '@strapi/strapi';

export interface NavigationBarButton extends Schema.Component {
  collectionName: 'components_navigation_bar_buttons';
  info: {
    displayName: 'Button';
    description: '';
  };
  attributes: {
    buttonString: Attribute.String & Attribute.Required;
    buttonSlug: Attribute.String & Attribute.Required;
  };
}

export interface NavigationBarDropDownLinks extends Schema.Component {
  collectionName: 'components_navigation_bar_drop_down_links';
  info: {
    displayName: 'Drop Down Link';
    description: '';
  };
  attributes: {
    dropdownLinkString: Attribute.String & Attribute.Required;
    dropdownLinkSlug: Attribute.String & Attribute.Required;
    nestedLinks: Attribute.Component<'navigation-bar.link', true>;
  };
}

export interface NavigationBarLink extends Schema.Component {
  collectionName: 'components_navigation_bar_links';
  info: {
    displayName: 'Standard Link';
    description: '';
  };
  attributes: {
    linkString: Attribute.String & Attribute.Required;
    linkSlug: Attribute.String & Attribute.Required;
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
