import { faFacebook, faInstagram, faTwitter, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

// Styled components for the footer
const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 40px 20px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const FooterSection = styled.div`
  margin: 10px;
  flex: 1;
  min-width: 200px;
  padding: 10px;
`;

const FooterTitle = styled.h3`
  margin-bottom: 10px;
`;

const FooterLinks = styled.div`
  a {
    color: white;
    text-decoration: none;
    display: block;
    margin: 5px 0;
    font-size: 14px;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;

  a {
    margin: 0 10px;
    font-size: 20px;
  }
`;

const SocialIcon = styled.i`
  color: white;
  cursor: pointer;

  &:hover {
    color: #e52d27; // You can change this color to a specific hover color
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      {/* Footer Section for Contact */}
      <FooterSection>
        <FooterTitle>Contact Us</FooterTitle>
        <FooterLinks>
          <a href="mailto:info@cafecoffeeday.com">info@cafecoffeeday.com</a>
          <a href="tel:+1800123456">+1 800 123 456</a>
          <p>Address: 123, Coffee Street, City, Country</p>
        </FooterLinks>
      </FooterSection>

      {/* Footer Section for Company */}
      <FooterSection>
        <FooterTitle>Company</FooterTitle>
        <FooterLinks>
          <a href="/about">About Us</a>
          <a href="/careers">Careers</a>
          <a href="/terms">Terms & Conditions</a>
          <a href="/privacy">Privacy Policy</a>
        </FooterLinks>< hr />
        <p className='text-center mt-5'>© Caffe Coffee Day.All Rights Reserverd.</p>

      </FooterSection>

      {/* Footer Section for Social Media */}
      <FooterSection>
        <FooterTitle>Follow Us</FooterTitle>
        <SocialMediaIcons>
          <a href="https://www.facebook.com/cafecoffeeday" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://twitter.com/cafecoffeeday" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} style={{color: "#923894",}} />
          </a>
          <a href="https://www.instagram.com/cafecoffeeday" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} style={{color: "#7291cf",}} />
          </a>
          <a href="https://www.linkedin.com/company/cafecoffeeday" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} style={{color: "#c52020",}} />
          </a>
        </SocialMediaIcons>
      </FooterSection>

    </FooterContainer>

  );
};

export default Footer;
