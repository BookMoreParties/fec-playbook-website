/**
 * SEOMeta — reusable per-page SEO component
 * Sets <title>, <meta name="description">, <link rel="canonical">,
 * and Open Graph / Twitter Card tags for every public page.
 */

import { Helmet } from "react-helmet-async";

const SITE_URL = "https://www.fecplaybook.com";
const OG_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663283664117/QvmM4Ny6bGx8BEV8LcdvBi/og-social-image-Kk7qTA4cKMc7eP44TcSHFK.png";
const SITE_NAME = "FEC Playbook";

interface SEOMetaProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}

export default function SEOMeta({ title, description, path, ogImage = OG_IMAGE }: SEOMetaProps) {
  const canonical = `${SITE_URL}${path}`;
  const fullTitle = title.includes("FEC Playbook") ? title : `${title} | FEC Playbook`;

  return (
    <Helmet>
      {/* Core */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
