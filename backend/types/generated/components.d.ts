import type { Schema, Struct } from '@strapi/strapi';

export interface ContactsDayOffItem extends Struct.ComponentSchema {
  collectionName: 'components_contacts_day_off_items';
  info: {
    description: '';
    displayName: 'dayOffItem';
  };
  attributes: {
    dayOff: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContactsFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_contacts_faq_items';
  info: {
    description: '';
    displayName: 'faqItem';
  };
  attributes: {
    info: Schema.Attribute.Component<'contacts.faq-item-info', true>;
    question: Schema.Attribute.String;
  };
}

export interface ContactsFaqItemInfo extends Struct.ComponentSchema {
  collectionName: 'components_contacts_faq_item_infos';
  info: {
    description: '';
    displayName: 'faqItemInfo';
  };
  attributes: {
    answer: Schema.Attribute.RichText;
    subtitle: Schema.Attribute.String;
  };
}

export interface ContactsPhones extends Struct.ComponentSchema {
  collectionName: 'components_contacts_phones';
  info: {
    description: '';
    displayName: 'phones';
    icon: 'phone';
  };
  attributes: {
    boxOffice: Schema.Attribute.String & Schema.Attribute.Required;
    main: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContactsSocial extends Struct.ComponentSchema {
  collectionName: 'components_contacts_socials';
  info: {
    description: '';
    displayName: 'social';
  };
  attributes: {
    tg: Schema.Attribute.String & Schema.Attribute.Required;
    vk: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContactsWorkingHours extends Struct.ComponentSchema {
  collectionName: 'components_contacts_working_hours';
  info: {
    description: '';
    displayName: 'workingHours';
  };
  attributes: {
    end: Schema.Attribute.String & Schema.Attribute.Required;
    start: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface TheaterInfoPartner extends Struct.ComponentSchema {
  collectionName: 'components_theater_info_partners';
  info: {
    displayName: 'partner';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'contacts.day-off-item': ContactsDayOffItem;
      'contacts.faq-item': ContactsFaqItem;
      'contacts.faq-item-info': ContactsFaqItemInfo;
      'contacts.phones': ContactsPhones;
      'contacts.social': ContactsSocial;
      'contacts.working-hours': ContactsWorkingHours;
      'theater-info.partner': TheaterInfoPartner;
    }
  }
}
