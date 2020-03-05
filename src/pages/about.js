import React, { useContext } from 'react';
import { graphql } from 'gatsby';
import {
  Button,
  Columns,
  Column,
  Container,
  Content,
  Hero,
  HeroBody,
  LevelLeft,
  LevelItem,
  Title,
  Subtitle
} from 'bloomer';
import Typist from 'react-typist';
import Fade from 'react-reveal/Fade';

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';
import BigProfilePic from '../components/big-profile-pic';

// Theme
import { ThemeContext, getOppositeTheme } from '../contexts/theme';

const About = props => {
  const { theme } = useContext(ThemeContext);

  const { data, location } = props;
  const { title: siteTitle, keywords, email } = data.site.siteMetadata;

  return (
    <Layout location={location}>
      <SEO title="About" keywords={keywords || []} />
      <Hero isColor={theme} className="is-fullheight-with-navbar">
        <HeroBody>
          <Container>
            <Fade left>
              <React.Fragment>
                <Title>{siteTitle}</Title>
                <br />
                <Subtitle>
                  <Typist startDelay={1000} >
                    <span style={{letterSpacing: '1em'}}>尘世间,一迷途小书童</span>
                    <span role="img" aria-label="jsx-a11y/accessible-emoji">
                      🌏
                      </span>
                  </Typist>
                </Subtitle>
              </React.Fragment>
            </Fade>
          </Container>
        </HeroBody>
      </Hero>
      <Hero isFullHeight isColor={theme}>
        <HeroBody>
          <Container>
            <Columns isVCentered>
              <Column>
                <Fade left>
                  <React.Fragment>
                    <Title>
                      <span role="img" aria-label="jsx-a11y/accessible-emoji">
                        👋🏻
                      </span>
                    </Title>
                    <Content>
                      <p>
                        I am a front-end engineer based in China. I love writing
                        code, learning new things and exploring the world around
                        me.
                      </p>
                      <p>
                        This website has been designed and written by me using{' '}
                        <a
                          href="https://reactjs.org"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="React"
                        >
                          React
                        </a>{' '}
                        as the UI library,{' '}
                        <a
                          href="https://gatsbyjs.org"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Gatsby"
                        >
                          Gatsby
                        </a>{' '}
                        as the static site generator and{' '}
                        <a
                          href="https://bloomer.js.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Bulma"
                        >
                          bloomer
                        </a>{' '}
                        as the CSS library.
                      </p>
                    </Content>
                    <LevelLeft isMobile>
                      <LevelItem>
                        <Button
                          isColor={getOppositeTheme(theme)}
                          href={`mailto:${email}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="E-mail"
                        >
                          E-mail
                        </Button>
                      </LevelItem>
                    </LevelLeft>
                  </React.Fragment>
                </Fade>
              </Column>
              <Column>
                <Fade right>
                  <BigProfilePic
                    className="is-hidden-mobile"
                    style={{ margin: 'auto 0 auto auto' }}
                  />
                  <BigProfilePic
                    className="is-hidden-tablet"
                    style={{ margin: '2rem auto 0 auto' }}
                  />
                </Fade>
              </Column>
            </Columns>
          </Container>
        </HeroBody>
      </Hero>
    </Layout>
  );
};

export default About;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        keywords
        author
        email
      }
    }
  }
`;
