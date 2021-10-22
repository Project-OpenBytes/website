import { NextPage } from 'next';
import React from 'react';
import { Button } from 'graviti-design';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import Introduction from '~/src/components/homepage/introduction';
import TitleAndDescription from '~/src/components/homepage/titleAndDescription';
import { ExternalUrl } from '~/src/base/external-url';

export async function getStaticProps() {
  return {
    props: {},
  };
}

const IndexPage: NextPage = () => {
  const introTitle = 'About Us';
  const introDescription =
    'The mission of OpenBytes is to facilitate wider sharing of, and collaboration with, data in the AI community through the creation of data standards and formats and enabling contributions of data.';
  const introOperation = () => (
    <>
      <div className="aboutUs-Graviti-initiator">
        Graviti is the initiator of the OpenBytes Project.
      </div>
      <Link href={ExternalUrl.GRAVITI_URL} passHref>
        <a target="_blank">
          <Button className="textButton" variant="text">
            Learn more about Graviti
          </Button>
        </a>
      </Link>
    </>
  );

  const title = 'Our Scope';
  const description =
    'The scope of OpenBytes includes the curation of open datasets, open data specifications and collaborative development under open licenses supporting the mission, including documentation, testing, integration and the creation of other artifacts that aid the development, deployment, operation or adoption of the open-source project. The Project intends to combine a data warehouse, data lake, and user-friendly front end, and it intends to incorporate both structured and unstructured data from public sources and contributing participants.';
  const buttonOptions = [
    {
      value: 'Find More on Our GitHub Page',
      href: ExternalUrl.GRAVITI_GITHUB_URL,
      target: '_blank',
    },
  ];

  const introWebImageSrc = `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Web/about+us-banner.png`;
  const introMobileImageSrc = `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Mobile/about+us-banner.png`;

  return (
    <>
      <NextSeo
        title="About us - OpenBytes for Open Datasets"
        description="OpenBytes is driving forward the creation of data standards and formats and enabling the contributions of data for AI community."
      />
      <Introduction
        classNameForImg="aboutUsImg"
        title={introTitle}
        description={introDescription}
        operation={introOperation()}
        webImageSrc={introWebImageSrc}
        mobileImageSrc={introMobileImageSrc}
      />
      <div className="about-scope-text">
        <TitleAndDescription
          titleContent={title}
          descriptionContent={description}
          buttonOptions={buttonOptions}
        />
      </div>
    </>
  );
};

export default IndexPage;
