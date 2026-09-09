/**
 * FEC Playbook™ structured-data helper
 * Design reminder: schema must describe only content that a visitor can read on the rendered page.
 */

import { Helmet } from "react-helmet-async";

type StructuredDataValue = Record<string, unknown> | Array<Record<string, unknown>>;

interface StructuredDataProps {
  data: StructuredDataValue;
}

export default function StructuredData({ data }: StructuredDataProps) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <Helmet>
      <script type="application/ld+json">{json}</script>
    </Helmet>
  );
}
