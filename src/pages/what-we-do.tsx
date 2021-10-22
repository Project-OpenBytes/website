import { NextPage } from 'next';
import React from 'react';
import { NextSeo } from 'next-seo';
import Introduction from '~/src/components/homepage/introduction';
import TitleAndDescription from '~/src/components/homepage/titleAndDescription';
import Licenses from '~/src/components/ourWork/licenses';
import { LicenseDescription, licenseDetail } from '~/src/components/ourWork/licenses/licenseDetail';
import Standard from '~/src/components/ourWork/standard';
import Resources from '~/src/components/ourWork/resources';

export async function getStaticProps() {
  return {
    props: {},
  };
}

const IndexPage: NextPage = () => {
  const introTitle = 'What We Do';
  const introDescription =
    'OpenBytes is committed to establishing licenses, fostering the standardization of data governance, and expanding open dataset resources. We believe the Association will hugely benefit the global AI community';
  const webImageSrc = `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Web/our+work-banner.png`;
  const mobileImageSrc = `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Mobile/our+work-banner.png`;

  const title1 = 'License';
  const description1 =
    'Establishing licenses specific for open datasets will optimize time and resources on AI research';

  const title2 = 'Standard';
  const description2 =
    'Setting proper standards will encourage the wider use of open datasets and explore more possibilities of AI';

  const title3 = 'Resources';
  const description3 =
    'Providing collective resources such as funding, professional services and technical support.';

  const licenseTitle1 = 'Current Challenge';
  const licenseDescription11: LicenseDescription[] = [
    {
      author: 'Publishers: ',
      description:
        'They can’t find proper licenses to protect their interests and express their requirements appropriately',
    },
    {
      author: 'Users: ',
      description:
        'They don’t know where to find licenses and how to use datasets legally, which may reduce the dataset utilization rate',
    },
  ];

  const licenseDescription12: LicenseDescription[] = [
    {
      author: 'Publishers: ',
      description:
        'For the lack of a proper license, publishers have to establish custom licenses that require lots of time and resources',
    },
    {
      author: 'Users: ',
      description: 'It is time-consuming to learn numerous licenses customized for each dataset',
    },
  ];

  const licenseDescription13: LicenseDescription[] = [
    {
      author: 'Publishers: ',
      description:
        'Using a license not specific for open datasets cannot best represent their requirements and fully protect their rights, for those licenses might have controversies or loopholes',
    },
    {
      author: 'Users: ',
      description: 'Terms in varieties of licenses not specific to open datasets may confuse users',
    },
  ];

  const licenseDetailOptions1: licenseDetail[] = [
    { title: 'No License', licenseDescription: licenseDescription11 },
    { title: 'Custom License', licenseDescription: licenseDescription12 },
    { title: 'License Not For Open Dataset', licenseDescription: licenseDescription13 },
  ];

  const licenseTitle2 = 'Benefits of Having Specific Licenses ';
  const licenseDescription21: LicenseDescription[] = [
    {
      author: '',
      description:
        "With specific terms and requirements, publishers don't have to squander too much time and resources on consulting legal experts or worrying about their rights not being protected",
    },
  ];

  const licenseDescription22: LicenseDescription[] = [
    {
      author: '',
      description:
        'Terms specific to open datasets can help users understand requirements from dataset publishers. Users can spend more valuable time on research instead of legal documents',
    },
  ];

  const licenseDescription23: LicenseDescription[] = [
    {
      author: '',
      description:
        'The utilization rate of open datasets will increase as more of them are available and easier to use from a legal perspective, which can accelerate AI development',
    },
  ];

  const licenseDetailOptions2: licenseDetail[] = [
    { title: 'For Dataset Publishers', licenseDescription: licenseDescription21 },
    { title: 'For Dataset Users', licenseDescription: licenseDescription22 },
    { title: 'For AI Community', licenseDescription: licenseDescription23 },
  ];

  return (
    <>
      <NextSeo
        title="What we do - OpenBytes for Open Datasets"
        description="OpenBytes is committed to establishing licenses, fostering the standardization of data governance, and expanding sustainable open dataset resources."
      />
      <Introduction
        title={introTitle}
        description={introDescription}
        webImageSrc={webImageSrc}
        mobileImageSrc={mobileImageSrc}
      />
      <TitleAndDescription
        titleContent={title1}
        descriptionContent={description1}
        buttonOptions={[]}
      />
      <Licenses title={licenseTitle1} licenseDetailOptions={licenseDetailOptions1} />
      <Licenses title={licenseTitle2} licenseDetailOptions={licenseDetailOptions2} />

      <TitleAndDescription
        titleContent={title2}
        descriptionContent={description2}
        buttonOptions={[]}
      />
      <Standard />

      <TitleAndDescription
        titleContent={title3}
        descriptionContent={description3}
        buttonOptions={[]}
      />
      <Resources />
    </>
  );
};

export default IndexPage;
