import React, { Component } from 'react'
import styled from 'styled-components'


function Footer() {
  return(
    <FooterContainer className="footer-bottom  text-center">
    <div className="footer-bottom">
      <p className="text-xs-center">
        &copy; {new Date().getFullYear()} Book Store Inc. - Luca Di Molfetta - All rights reserved
      </p>
    </div>
    </FooterContainer>

  )
}


export default Footer

const FooterContainer = styled.footer`

.footer-bottom {
  background: var(--mainGrey);
  color: var(--mainDark);
  font-weight: bold;
  padding-top: 3rem;
  padding-bottom: 2rem;
}


`
