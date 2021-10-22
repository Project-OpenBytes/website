import { NextPage } from 'next';
import React from 'react';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { Button } from 'graviti-design';
import TitleAndDescription, { buttonOption } from '~/src/components/homepage/titleAndDescription';
import WhatWeDoList from '~/src/components/homepage/whatWeDoList';
import { ListOption } from '~/src/components/homepage/whatWeDoList/whatWeDoListContent';
import GoverningStructure from '~/src/components/homepage/governingStructure';
import FundInfo from '~/src/components/homepage/fundInfo';
import { fundInfoDetailOption } from '~/src/components/homepage/fundInfo/fundInfoDetail';
import Supporters from '~/src/components/homepage/supporters';
import Introduction from '~/src/components/homepage/introduction';

export async function getStaticProps() {
  return {
    props: {},
  };
}

const IndexPage: NextPage = () => {
  const introTitle = 'Inspire AI Innovation with Open Datasets';

  const introDescription =
    'We are a non-profit open data project hosted under the Linux Foundation with neutral governance, aiming to bring transformational changes to AI by making open datasets more available and accessible.';

  const introWebImageSrc = `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Web/home+banner.png`;
  const introMobileImageSrc = `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Mobile/home+banner.png`;

  const introButtonOption: buttonOption = {
    value: 'Join Our Slack Community',
    href: 'https://join.slack.com/t/openbytes/shared_invite/zt-xmlybz36-kc7SnQnmrIyz1m79oOu6pg',
  };

  const introOperation = (option) => {
    return (
      <Link href={option.href} key={option.value} passHref>
        <Button className="filledButtonIntro">{option.value}</Button>
      </Link>
    );
  };

  const title1 = 'What We Do';
  const description1 =
    'The mission of the OpenBytes Project is to facilitate wider sharing of, and collaboration with, data in the AI community through the creation of data standards and formats and enabling contributions of data.';
  const buttonOptions1: buttonOption[] = [
    { value: 'Learn More About Our Work', href: '/what-we-do' },
  ];

  const title2 = 'How We Run';
  const description2 =
    'We will operate in a transparent, open, collaborative, and ethical manner at all times. The project is mutually oversighted by the Linux Foundation, and the OpenBytes Technical Steering Committee.';
  const buttonOptions2: buttonOption[] = [{ value: 'Learn More About Us', href: '/about' }];

  const title3 = 'How to Contribute';
  const description3 =
    'We can’t achieve our goals on our own. We would like to work together with academia and business globally to provide more resources, such as funding, community support and training resources to the whole AI community.';
  const buttonOptions3: buttonOption[] = [
    { value: 'Contact Us', href: 'mailto:contact@openbytes.io' },
    { value: 'Be Our Supporter', href: '/join-us' },
  ];

  const ListOptions: ListOption[] = [
    {
      title: 'LICENSE',
      description:
        'We will establish a suite of licenses specific to open datasets that address problems of copyright and distribution, reducing contributors’ liability risks.',
      webImageSrc: `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Web/home-License.png`,
      mobileImageSrc: `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Mobile/home-License.png`,
    },
    {
      title: 'STANDARD',
      description:
        'We will formulate open dataset standards that specify and require how datasets should be published, shared and exchanged.',
      webImageSrc: `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Web/home-standard.png`,
      mobileImageSrc: `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Mobile/home-standard.png`,
    },
    {
      title: 'RESOURCES',
      description:
        'We will collect the communities’ efforts to provide funding, professional services, and technical supports with dataset participants.',
      webImageSrc: `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Web/home-resources.png`,
      mobileImageSrc: `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Mobile/home-resources.png`,
    },
  ];

  const fundInfoLists: fundInfoDetailOption[] = [
    {
      webImageSrc: `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Web/home-More+Open+Datasets.png`,
      mobileImageSrc: `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Mobile/home-More+Open+Datasets.png`,
      description: 'More Open Datasets',
    },
    {
      webImageSrc: `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Web/home-Marketing+of+Standards+and+Licenses.png`,
      mobileImageSrc: `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Mobile/home-Marketing+of+Standards+and+Licenses.png`,
      description: 'Marketing of Standards and Licenses',
    },
    {
      webImageSrc: `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Web/home-Offset+the+Legal+Expense.png`,
      mobileImageSrc: `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Mobile/home-Offset+the+Legal+Expense.png`,
      description: 'Offset the Legal Expense',
    },
    {
      webImageSrc: `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Web/home-Accelerate+AI+Research+and+Innovation.png`,
      mobileImageSrc: `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Web/home-Accelerate+AI+Research+and+Innovation.png`,
      description: 'Accelerate AI Research and Innovation',
    },
    {
      webImageSrc: `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Web/home-+Fund+Community+Events.png`,
      mobileImageSrc: `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Mobile/home-+Fund+Community+Events.png`,
      description: 'Fund Community Events',
    },
    {
      webImageSrc: `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Web/home-Underwrite+Expense+around+Standards.png`,
      mobileImageSrc: `${process.env.NEXT_PUBLIC_AWS_CDN}/company-website/OpenBytes/Mobile/home-Underwrite+Expense+around+Standards.png`,
      description: 'Underwrite Expense around Standards',
    },
  ];

  return (
    <>
      <NextSeo
        title="OpenBytes - Inspire AI Innovation with Open Datasets"
        description="OpenBytes is a nonprofit that’s empowering AI and machine learning by making open datasets more available and accessible."
      />
      <Introduction
        title={introTitle}
        description={introDescription}
        webImageSrc={introWebImageSrc}
        mobileImageSrc={introMobileImageSrc}
        operation={introOperation(introButtonOption)}
      />

      <Supporters />

      <TitleAndDescription
        titleContent={title1}
        descriptionContent={description1}
        buttonOptions={buttonOptions1}
      />
      <WhatWeDoList ListOptions={ListOptions} />

      <TitleAndDescription
        titleContent={title2}
        descriptionContent={description2}
        buttonOptions={buttonOptions2}
      />

      <GoverningStructure />

      <TitleAndDescription
        titleContent={title3}
        descriptionContent={description3}
        buttonOptions={buttonOptions3}
      />
      <FundInfo fundInfoLists={fundInfoLists} />
    </>
  );
};

export default IndexPage;
