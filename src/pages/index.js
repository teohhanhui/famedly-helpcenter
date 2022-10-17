import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import Translate, {translate} from '@docusaurus/Translate';

export const Hero = () => {
  return (
    <section className="text-gray-700">
      <div className="container px-8 mx-auto py-36 lg:px-4">
        <div className="flex flex-col w-full mb-12 text-left md:text-center">
          <h2 className="mb-1 text-xs text-blue-400 uppercase font-sans">
            Famedly Help Center
          </h2>
          <h1 className="my-6 py-2 text-2xl sm:text-6xl border-brand-light border-t border-b font-sans">
            Help Center
            <br />
          </h1>
          <p className="mx-auto text-base lg:w-1/2 text-gray-400">
            We are here to help you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Home - ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <Hero />
    </Layout>
  );
}
