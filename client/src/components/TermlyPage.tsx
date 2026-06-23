/**
 * TermlyPage — reusable layout for Termly-embedded legal pages
 * Loads the Termly embed script once and renders the policy widget.
 */

import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOMeta from "@/components/SEOMeta";

interface TermlyPageProps {
  title: string;
  description: string;
  path: string;
  termlyId: string;
  pageTitle: string;
}

export default function TermlyPage({ title, description, path, termlyId, pageTitle }: TermlyPageProps) {
  useEffect(() => {
    const SCRIPT_ID = "termly-jssdk";
    if (document.getElementById(SCRIPT_ID)) return;
    const d = document;
    const s = "script";
    const js = d.createElement(s) as HTMLScriptElement;
    js.id = SCRIPT_ID;
    js.src = "https://app.termly.io/embed-policy.min.js";
    const tjs = d.getElementsByTagName(s)[0];
    tjs.parentNode?.insertBefore(js, tjs);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <SEOMeta title={title} description={description} path={path} />
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-10 bg-[#0D1B3E] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300AEEF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#00AEEF]" />
            <span className="text-[#00AEEF] text-xs font-bold uppercase tracking-widest">Legal</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black uppercase leading-tight">{pageTitle}</h1>
        </div>
      </section>

      {/* Termly Embed */}
      <section className="py-12 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl p-6 sm:p-10">
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore — Termly requires non-standard 'name' attribute */}
            <div name="termly-embed" data-id={termlyId} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
