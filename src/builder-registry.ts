"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import { RegistryBanner } from "./components/HomePage/Hero/Hero";
import { BundleTeaser } from "./components/HomePage/Bundle/Bundle";
import { ProblemBlock } from "./components/HomePage/ProblemBlock/ProblemBlock";
import { Testimonials } from "./components/HomePage/Testimonials/Testimonials";
import { ProductTeaser } from "./components/HomePage/ProductTeaser/ProductTeaser";
import { AssortmentTeaser } from "./components/HomePage/AssortmentTeaser/AssortmentTeaser";
import CommunityHero from "./components/Posts/CommunityHero/CommunityHero";
import RichTextBlock from "./components/Posts/RichTextBlock/RichTextBlock";
import PostList from "./components/Posts/PostList/PostList";
import ContactForm from "./components/Posts/ContactForm/ContactForm";
import QuoteBlock from "./components/PostPage/PostQuote/PostQuote";
import RelatedPosts from "./components/PostPage/RelatedPost/RelatedPost";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(RegistryBanner, {
  name: 'Registry Banner',
  inputs: [
    {
      name: 'image',
      type: 'file',
      allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'],
      defaultValue: '',
      friendlyName: 'Banner Image',
    },
    {
      name: 'text',
      type: 'string',
      defaultValue: 'Your Text Here',
    },
    {
      name: 'variant',
      type: 'string',
      enum: ['hero', 'caption'],
      defaultValue: 'hero',
    },
  ],
});


Builder.registerComponent(BundleTeaser, {
  name: 'BundleTeaser',
  inputs: [
    {
      name: 'badgeText',
      type: 'text',
      defaultValue: 'JETZT IN APOTHEKE UND ONLINE',
    },
    {
      name: 'badgeBgColor',
      type: 'color',
      defaultValue: '#F59E0B',
    },
    {
      name: 'badgeTextColor',
      type: 'color',
      defaultValue: '#FFFFFF',
    },
    {
      name: 'productImage',
      type: 'file',
      allowedFileTypes: ['jpeg', 'png', 'webp'],
    },
    {
      name: 'title',
      type: 'text',
      defaultValue: 'BEI ERBLICH BEDINGTEM HAARAUSFALL',
    },
    {
      name: 'buttons',
      type: 'list',
      subFields: [
        { name: 'text', type: 'text', defaultValue: 'FÜR MÄNNER' },
        { name: 'url', type: 'url', defaultValue: '#' },
        { name: 'backgroundColor', type: 'color', defaultValue: '#0369A1' },
        { name: 'textColor', type: 'color', defaultValue: '#FFFFFF' },
      ],
    },
    {
      name: 'ctaText',
      type: 'text',
      defaultValue: 'BUNDLE ANSEHEN',
    },
    {
      name: 'ctaUrl',
      type: 'url',
      defaultValue: '#',
    },
  ],
});

Builder.registerComponent(ProblemBlock, {
  name: "ProblemBlock",
  inputs: [
    { name: "label", type: "text", defaultValue: "Bedürfnisse sind verschieden" },
    { name: "headline", type: "text", defaultValue: "KANN MIR BIO-H-TIN BEI MEINEN HAAR- UND NAGEL-PROBLEMEN HELFEN?" },
    { name: "headlineColor", type: "color", defaultValue: "#F59E0B" },
    { name: "ctaText", type: "text", defaultValue: "MEIN PROBLEM VERSTEHEN" },
    { name: "ctaUrl", type: "url", defaultValue: "#" },
    {
      name: "icons",
      type: "list",
      subFields: [
        { name: "icon", type: "file", allowedFileTypes: ["svg", "png", "webp"] },
        { name: "text", type: "text" },
      ],
    },
  ],
});

Builder.registerComponent(Testimonials, {
  name: "Testimonials",
  inputs: [
    {
      name: "testimonials",
      type: "list",
      subFields: [
        { name: "quote", type: "text" },
        { name: "rating", type: "number" },
        { name: "author", type: "text" },
        { name: "linkText", type: "text" },
        { name: "linkUrl", type: "url" },
      ],
    },
    {
      name: "images",
      type: "list",
      subFields: [{ name: "image", type: "file", allowedFileTypes: ["jpeg", "png", "webp"] }],
    },
    {
      name: "ctaText",
      type: "text",
      defaultValue: "ZUR COMMUNITY",
    },
    {
      name: "ctaUrl",
      type: "url",
      defaultValue: "#",
    },
  ],
});

Builder.registerComponent(ProductTeaser, {
  name: "ProductTeaser",
  inputs: [
    { name: "headline", type: "text", defaultValue: "DAS BEHANDLUNGS-SYSTEM FÜR NACHHALTIG GESUNDE HAARE UND NÄGEL." },
    { name: "headlineColor", type: "color", defaultValue: "#F59E0B" },
    { name: "ctaText", type: "text", defaultValue: "JETZT ENTDECKEN" },
    { name: "ctaUrl", type: "url", defaultValue: "#" },
    { name: "ctaBgColor", type: "color", defaultValue: "#F59E0B" },
    { name: "ctaTextColor", type: "color", defaultValue: "#FFFFFF" },
    { name: "productImage", type: "file", allowedFileTypes: ["png", "webp", "jpeg"] },
  ],
});


Builder.registerComponent(AssortmentTeaser, {
  name: "AssortmentTeaser",
  inputs: [
    { name: "brand", type: "text", defaultValue: "BIO-H-TIN" },
    { name: "highlightColor", type: "color", defaultValue: "#F59E0B" },
    { name: "headline", type: "text", defaultValue: "DAS BEHANDLUNGS-SYSTEM FÜR NACHHALTIG GESUNDE HAARE UND NÄGEL." },
    { name: "paragraph", type: "richText" },
    { name: "buttonText", type: "text", defaultValue: "WIRKT VON AUSSEN + INNEN" },
    { name: "buttonUrl", type: "url", defaultValue: "#" },
  ],
});

Builder.registerComponent(CommunityHero, {
  name: 'CommunityHero',
  inputs: [
    {
      name: 'text',
      type: 'string',
      defaultValue: 'Von Anderen Lernen',
    },
    {
      name: 'image',
      type: 'file',
      allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'],
    },
  ],
});


Builder.registerComponent(RichTextBlock, {
  name: 'TextBlock',
  inputs: [
    {
      name: 'content',
      type: 'richText',
      defaultValue: `<p>Hallo! Wie geht es Ihnen? Wir sind <strong style="color: #f6a623;">Anwender*innen</strong>, medizinische <strong>Expert*innen</strong> und <strong style="color: #f6a623;">Mitarbeiter*innen</strong> von Dr. Pfleger. Kurz, wir sind die BIO-H-TIN Community und das sind unsere Geschichten.</p><p>Ihr BIO-H-TEAM :)</p>`,
    },
  ],
});


Builder.registerComponent(PostList, {
  name: 'PostList',
  inputs: [
    {
      name: 'posts',
      type: 'list',
      subFields: [
        { name: 'title', type: 'string' },
        { name: 'slug', type: 'string' },
        { name: 'excerpt', type: 'text' },
         { name: 'image', type: 'file', allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'] },
        {
          name: 'tags',
          type: 'list',
          subFields: [
            { name: 'tag', type: 'string' },
            { name: 'color', type: 'string', defaultValue: '#F9C342' },
          ],
        },
        {
          name: 'author',
          type: 'object',
          subFields: [
            { name: 'name', type: 'string' },
            { name: 'role', type: 'string' },
            { name: 'avatar', type: 'file', allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'] },
          ],
        },
      ],
    },
    {
      name: 'pageSize',
      type: 'number',
      defaultValue: 6,
    },
  ],
});

Builder.registerComponent(ContactForm, {
  name: 'ContactForm',
  inputs: [
    { name: 'headline', type: 'string', defaultValue: 'SCHREIBEN SIE UNS' },
    { name: 'description', type: 'text' },
    { name: 'submitText', type: 'string', defaultValue: 'ABSENDEN' },
  ],
});

Builder.registerComponent(QuoteBlock, {
  name: 'Quote Block',
  description: 'A component to display a quote with an accompanying image.',
  inputs: [
    {
      name: 'image',
      type: 'file',
      allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
      required: true,
      defaultValue: 'https://placehold.co/400x400',
    },
    {
      name: 'quote',
      type: 'richText',
      required: true,
      defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ],
});

Builder.registerComponent(RelatedPosts, {
  name: 'RelatedPosts',
  inputs: [
    {
      name: 'posts',
      type: 'list',
      subFields: [
        { name: 'title', type: 'string' },
        { name: 'slug', type: 'string' },
        { name: 'excerpt', type: 'text' },
         { name: 'image', type: 'file', allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'] },
        {
          name: 'tags',
          type: 'list',
          subFields: [
            { name: 'tag', type: 'string' },
            { name: 'color', type: 'string', defaultValue: '#F9C342' },
          ],
        },
        {
          name: 'author',
          type: 'object',
          subFields: [
            { name: 'name', type: 'string' },
            { name: 'role', type: 'string' },
            { name: 'avatar', type: 'file', allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'] },
          ],
        },
      ],
    },
  ],
});