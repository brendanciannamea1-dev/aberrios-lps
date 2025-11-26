interface MetaTagsConfig {
  title: string;
  description: string;
  image: string;
  url: string;
}

export const updateMetaTags = (config: MetaTagsConfig) => {
  const { title, description, image, url } = config;

  document.title = title;

  const updateOrCreateMetaTag = (selector: string, attribute: string, content: string) => {
    let element = document.querySelector(selector);
    if (element) {
      element.setAttribute('content', content);
    } else {
      element = document.createElement('meta');
      if (selector.includes('property')) {
        element.setAttribute('property', attribute);
      } else {
        element.setAttribute('name', attribute);
      }
      element.setAttribute('content', content);
      document.head.appendChild(element);
    }
  };

  updateOrCreateMetaTag('meta[name="description"]', 'description', description);

  updateOrCreateMetaTag('meta[property="og:title"]', 'og:title', title);
  updateOrCreateMetaTag('meta[property="og:description"]', 'og:description', description);
  updateOrCreateMetaTag('meta[property="og:image"]', 'og:image', `${window.location.origin}${image}`);
  updateOrCreateMetaTag('meta[property="og:url"]', 'og:url', url);

  updateOrCreateMetaTag('meta[name="twitter:title"]', 'twitter:title', title);
  updateOrCreateMetaTag('meta[name="twitter:description"]', 'twitter:description', description);
  updateOrCreateMetaTag('meta[name="twitter:image"]', 'twitter:image', `${window.location.origin}${image}`);
};
