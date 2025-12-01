import type { Schema, Struct } from '@strapi/strapi';

export interface BodyBody extends Struct.ComponentSchema {
  collectionName: 'components_body_bodies';
  info: {
    displayName: 'Body';
    icon: 'file';
  };
  attributes: {
    body: Schema.Attribute.Blocks;
  };
}

export interface GalleryGridGalleryGrid extends Struct.ComponentSchema {
  collectionName: 'components_gallery_grid_gallery_grids';
  info: {
    displayName: 'GalleryGrid';
    icon: 'grid';
  };
  attributes: {};
}

export interface HeroHero extends Struct.ComponentSchema {
  collectionName: 'components_hero_heroes';
  info: {
    displayName: 'Hero';
    icon: 'apps';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface TagTags extends Struct.ComponentSchema {
  collectionName: 'components_tag_tags';
  info: {
    displayName: 'tags';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'body.body': BodyBody;
      'gallery-grid.gallery-grid': GalleryGridGalleryGrid;
      'hero.hero': HeroHero;
      'tag.tags': TagTags;
    }
  }
}
