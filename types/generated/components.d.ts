import type { Schema, Attribute } from '@strapi/strapi';

export interface FooterContactInformation extends Schema.Component {
  collectionName: 'components_footer_contact_informations';
  info: {
    displayName: 'Contact Information';
  };
  attributes: {
    contactInformationTitle: Attribute.String & Attribute.Required;
    contactInformationName: Attribute.String & Attribute.Required;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
    email: Attribute.String & Attribute.Required;
  };
}

export interface FooterNavigationLinks extends Schema.Component {
  collectionName: 'components_footer_navigation_links';
  info: {
    displayName: 'Navigation Links';
    description: '';
  };
  attributes: {
    navigationLinksTitle: Attribute.String & Attribute.Required;
    standardLinks: Attribute.Component<'utility.standard-link', true>;
  };
}

export interface FooterSocialMediaLinks extends Schema.Component {
  collectionName: 'components_footer_social_media_links';
  info: {
    displayName: 'Social Media Links';
  };
  attributes: {
    socialMediaLinksTitle: Attribute.String & Attribute.Required;
    iconLinks: Attribute.Component<'utility.icon-link', true>;
  };
}

export interface LandingPageInitialImage extends Schema.Component {
  collectionName: 'components_landing_page_initial_images';
  info: {
    displayName: 'Landing Image';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
    title: Attribute.String & Attribute.Required;
    subTitle: Attribute.String;
  };
}

export interface LandingPagePaymentSection extends Schema.Component {
  collectionName: 'components_landing_page_payment_sections';
  info: {
    displayName: 'Payment Section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.String;
    paymentOptions: Attribute.Component<'utility.payment-option', true>;
    paymentOptionIcon: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface LandingPageSpecialityCarouselItem extends Schema.Component {
  collectionName: 'components_landing_page_speciality_carousel_items';
  info: {
    displayName: 'Speciality Carousel Item';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Attribute.Component<'utility.standard-link'>;
    linkIcon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface LandingPageSpecialtyCarouselSection extends Schema.Component {
  collectionName: 'components_landing_page_specialty_carousel_sections';
  info: {
    displayName: 'Specialty Carousel Section';
  };
  attributes: {
    title: Attribute.String;
    specialityCarousel: Attribute.Component<
      'landing-page.speciality-carousel-item',
      true
    >;
  };
}

export interface LandingPageVideoSection extends Schema.Component {
  collectionName: 'components_landing_page_video_sections';
  info: {
    displayName: 'Video Section';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subTitle: Attribute.String & Attribute.Required;
    videoLink: Attribute.String & Attribute.Required;
  };
}

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
    nestedLinks: Attribute.Component<'utility.standard-link', true>;
  };
}

export interface UtilityIconLink extends Schema.Component {
  collectionName: 'components_utility_icon_links';
  info: {
    displayName: 'Icon Link';
    description: '';
  };
  attributes: {
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
    linkSlug: Attribute.String & Attribute.Required;
  };
}

export interface UtilityPaymentOption extends Schema.Component {
  collectionName: 'components_utility_payment_options';
  info: {
    displayName: 'Payment Option';
    description: '';
  };
  attributes: {
    amount: Attribute.Decimal;
    description: Attribute.Text;
  };
}

export interface UtilityStandardLink extends Schema.Component {
  collectionName: 'components_utility_standard_links';
  info: {
    displayName: 'Standard Link';
  };
  attributes: {
    linkString: Attribute.String;
    linkSlug: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'footer.contact-information': FooterContactInformation;
      'footer.navigation-links': FooterNavigationLinks;
      'footer.social-media-links': FooterSocialMediaLinks;
      'landing-page.initial-image': LandingPageInitialImage;
      'landing-page.payment-section': LandingPagePaymentSection;
      'landing-page.speciality-carousel-item': LandingPageSpecialityCarouselItem;
      'landing-page.specialty-carousel-section': LandingPageSpecialtyCarouselSection;
      'landing-page.video-section': LandingPageVideoSection;
      'navigation-bar.button': NavigationBarButton;
      'navigation-bar.drop-down-links': NavigationBarDropDownLinks;
      'utility.icon-link': UtilityIconLink;
      'utility.payment-option': UtilityPaymentOption;
      'utility.standard-link': UtilityStandardLink;
    }
  }
}
