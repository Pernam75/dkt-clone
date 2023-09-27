import React from 'react';
import { VtmnNavbar, VtmnNavbarLink, VtmnBadge, VtmnSearch } from '@vtmn/react';
import '@vtmn/icons/dist/vitamix/font/vitamix.css';
import { ReactComponent as DecathlonLogo } from '../images/decathlon-logo.svg';


// create the Header component with the logo on the left, the search bar on the center and the cart on the right use tailwindcss

const Header = () => {
    return (
        <div className="Header" style={{ width: '100vw'}}>
        <header>
          <VtmnNavbar
            leftNav={
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  width: '65vw',
                  gap: '2rem',
                }}>
                  {/* put the logo with a link to decathlon.fr */}
                  <a href="https://www.decathlon.fr/">
                    <DecathlonLogo />
                  </a>
                <VtmnSearch
                  placeholder="Rechercher un produit, un sport ou une référence"
                  size="medium"
                  variant="primary"
                />
              </div>
            }
            rightNav={
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  marginTop: '0.6rem',
                }}>
                <div class="question-icon"
                  style={{
                    width: '7vw',
                    justifyContent: 'center',
                  }}>
                  <VtmnNavbarLink
                    href="/"
                    icon="question-line">
                    <span>
                      Aide
                    </span>
                  </VtmnNavbarLink>
                </div>
                <div class="store-icon"
                  style={{
                    width: '7vw',
                    justifyContent: 'center',
                  }}>
                  <VtmnNavbarLink
                    href="/"
                    icon="store-line">
                    <span>
                      Magasin
                    </span>
                  </VtmnNavbarLink>
                </div>
                <div class="account-icon"
                  style={{
                    width: '7vw',
                    justifyContent: 'center',
                  }}>
                  <VtmnNavbarLink
                    href="/"
                    icon="user-line">
                    <span>
                      Mon compte
                    </span>
                  </VtmnNavbarLink>
                </div>
                <div class="cart-icon"
                  style={{
                    width: '7vw',
                    justifyContent: 'center',
                  }}>
                  <VtmnNavbarLink
                    href="/"
                    icon="shopping-cart-line">
                    <VtmnBadge
                      value={3}
                      variant="accent"/>
                    <span>
                      Mon panier
                    </span>
                  </VtmnNavbarLink>
              </div>
            </div>
            }
          />
        </header>
      </div>
    );
};

export default Header;