"use client";

import { use } from "react";
import Home from "../page";

export default function DomainPage({ params }: { params: Promise<{ domain: string }> }) {
  const { domain } = use(params);
  // Decode the domain (in case it's URL encoded)
  const decodedDomain = decodeURIComponent(domain);
  return <Home initialDomain={decodedDomain} />;
}
