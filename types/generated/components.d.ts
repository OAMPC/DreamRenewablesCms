import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutUsPageImageButtonSection extends Schema.Component {
  collectionName: 'components_about_us_page_image_button_sections';
  info: {
    displayName: 'imageButtonSection';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    imageButtons: Attribute.Component<'about-us-page.image-button', true>;
  };
}

export interface AboutUsPageImageButton extends Schema.Component {
  collectionName: 'components_about_us_page_image_buttons';
  info: {
    displayName: 'ImageButton';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
    text: Attribute.String & Attribute.Required;
    subText: Attribute.String & Attribute.Required;
    linkSlug: Attribute.String & Attribute.Required;
  };
}

export interface AboutUsPageLandingImage extends Schema.Component {
  collectionName: 'components_about_us_page_landing_images';
  info: {
    displayName: 'landingImage';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
  };
}

export interface AboutUsPageSection extends Schema.Component {
  collectionName: 'components_about_us_page_sections';
  info: {
    displayName: 'Section';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
    link: Attribute.Component<'utility.standard-link'> & Attribute.Required;
    linkIcon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

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

export interface LandingPageQuoteCarouselItem extends Schema.Component {
  collectionName: 'components_landing_page_quote_carousel_items';
  info: {
    displayName: 'Quote Carousel Item';
  };
  attributes: {
    quoteText: Attribute.Text & Attribute.Required;
    quoteAuthor: Attribute.String & Attribute.Required;
    quoteAuthorRole: Attribute.String & Attribute.Required;
  };
}

export interface LandingPageQuoteSection extends Schema.Component {
  collectionName: 'components_landing_page_quote_sections';
  info: {
    displayName: 'Quote Section';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    quoteCarousel: Attribute.Component<
      'landing-page.quote-carousel-item',
      true
    > &
      Attribute.Required;
    quoteIcon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
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

export interface MissionVisionValuesPageOurMission extends Schema.Component {
  collectionName: 'components_mission_vision_values_page_our_missions';
  info: {
    displayName: 'Our Mission';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    titleIcon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
    sectionImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
    sectionDescription: Attribute.Text;
  };
}

export interface MissionVisionValuesPageOurValues extends Schema.Component {
  collectionName: 'components_mission_vision_values_page_our_values';
  info: {
    displayName: 'Our Values';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    titleIcon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
    ourValuesEntries: Attribute.Component<
      'mission-vision-values-page.values-entries',
      true
    > &
      Attribute.Required;
    sectionImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
  };
}

export interface MissionVisionValuesPageOurVision extends Schema.Component {
  collectionName: 'components_mission_vision_values_page_our_visions';
  info: {
    displayName: 'Our Vision';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    titleIcon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
    sectionImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
    sectionDescription: Attribute.Text & Attribute.Required;
  };
}

export interface MissionVisionValuesPageValuesEntries extends Schema.Component {
  collectionName: 'components_mission_vision_values_page_values_entries';
  info: {
    displayName: 'Values Entries';
  };
  attributes: {
    valueEntry: Attribute.String & Attribute.Required;
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

export interface OurDonorsPageDonorDetail extends Schema.Component {
  collectionName: 'components_our_donors_page_donor_details';
  info: {
    displayName: 'Donor Detail';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
  };
}

export interface OurTeamPageDepartmentSection extends Schema.Component {
  collectionName: 'components_our_team_page_department_sections';
  info: {
    displayName: 'Department Section';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    teamProfileDetails: Attribute.Component<
      'our-team-page.team-profile-details',
      true
    > &
      Attribute.Required;
  };
}

export interface OurTeamPageTeamProfileDetails extends Schema.Component {
  collectionName: 'components_our_team_page_team_profile_details';
  info: {
    displayName: 'Team Profile Details';
  };
  attributes: {
    profileImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
    profileName: Attribute.String & Attribute.Required;
    profileDescription: Attribute.String & Attribute.Required;
  };
}

export interface OurWorkPageAccordionItem extends Schema.Component {
  collectionName: 'components_our_work_page_accordion_items';
  info: {
    displayName: 'Accordion Item';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    linkString: Attribute.String & Attribute.Required;
    linkSlug: Attribute.String & Attribute.Required;
    linkIcon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
  };
}

export interface OurWorkPageAccordionSection extends Schema.Component {
  collectionName: 'components_our_work_page_accordion_sections';
  info: {
    displayName: 'Accordion Section';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    accordionItems: Attribute.Component<'our-work-page.accordion-item', true> &
      Attribute.Required;
  };
}

export interface OurWorkPageLandingImage extends Schema.Component {
  collectionName: 'components_our_work_page_landing_images';
  info: {
    displayName: 'landing Image';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
    title: Attribute.String;
  };
}

export interface OurWorkPageMetric extends Schema.Component {
  collectionName: 'components_our_work_page_metrics';
  info: {
    displayName: 'metric';
  };
  attributes: {
    value: Attribute.String & Attribute.Required;
    valueDescription: Attribute.Text & Attribute.Required;
  };
}

export interface OurWorkPageQuote extends Schema.Component {
  collectionName: 'components_our_work_page_quotes';
  info: {
    displayName: 'quote';
    description: '';
  };
  attributes: {
    body: Attribute.Text & Attribute.Required;
    author: Attribute.String & Attribute.Required;
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
      'about-us-page.image-button-section': AboutUsPageImageButtonSection;
      'about-us-page.image-button': AboutUsPageImageButton;
      'about-us-page.landing-image': AboutUsPageLandingImage;
      'about-us-page.section': AboutUsPageSection;
      'footer.contact-information': FooterContactInformation;
      'footer.navigation-links': FooterNavigationLinks;
      'footer.social-media-links': FooterSocialMediaLinks;
      'landing-page.initial-image': LandingPageInitialImage;
      'landing-page.payment-section': LandingPagePaymentSection;
      'landing-page.quote-carousel-item': LandingPageQuoteCarouselItem;
      'landing-page.quote-section': LandingPageQuoteSection;
      'landing-page.speciality-carousel-item': LandingPageSpecialityCarouselItem;
      'landing-page.specialty-carousel-section': LandingPageSpecialtyCarouselSection;
      'landing-page.video-section': LandingPageVideoSection;
      'mission-vision-values-page.our-mission': MissionVisionValuesPageOurMission;
      'mission-vision-values-page.our-values': MissionVisionValuesPageOurValues;
      'mission-vision-values-page.our-vision': MissionVisionValuesPageOurVision;
      'mission-vision-values-page.values-entries': MissionVisionValuesPageValuesEntries;
      'navigation-bar.button': NavigationBarButton;
      'navigation-bar.drop-down-links': NavigationBarDropDownLinks;
      'our-donors-page.donor-detail': OurDonorsPageDonorDetail;
      'our-team-page.department-section': OurTeamPageDepartmentSection;
      'our-team-page.team-profile-details': OurTeamPageTeamProfileDetails;
      'our-work-page.accordion-item': OurWorkPageAccordionItem;
      'our-work-page.accordion-section': OurWorkPageAccordionSection;
      'our-work-page.landing-image': OurWorkPageLandingImage;
      'our-work-page.metric': OurWorkPageMetric;
      'our-work-page.quote': OurWorkPageQuote;
      'utility.icon-link': UtilityIconLink;
      'utility.payment-option': UtilityPaymentOption;
      'utility.standard-link': UtilityStandardLink;
    }
  }
}
