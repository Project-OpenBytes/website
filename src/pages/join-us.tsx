import { NextPage } from 'next';
import React from 'react';
import { NextSeo } from 'next-seo';
import ImageContainer from '~/src/components/homepage/joinUs/imageContainer';
import FormContainer from '~/src/components/homepage/joinUs/formContainer';

export async function getStaticProps() {
  return {
    props: {},
  };
}

const IndexPage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Join us - Become a contributor of OpenBytes"
        description="Your support makes it possible to expand our ongoing project, provides more resources to the whole AI community and accelerate AI development."
      />
      <div className="joinUsBgWrapper">
        <div className="joinUsContentWrapper">
          <ImageContainer />
          <FormContainer />
        </div>
      </div>
    </>
  );
};

export default IndexPage;
