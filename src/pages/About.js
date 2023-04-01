
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../assets/about.css';

const slideImages = [
  {
    url:  'https://m.media-amazon.com/images/I/71xe5UnHpAL._AC_UX466_.jpg',
    name: 'Womens Sundress',
    description: ' Romwe Womens Long Sleeve sundress'
  },
  {
    url:  'https://m.media-amazon.com/images/I/71NrPRCvFRL._AC_SX466_.jpg',
    name: 'Waterproof Bluetooth ',
    description: 'Smart Watch for Men Women Compatible with iPhone Samsung Android Phone'
  },
  {
    url:  'https://m.media-amazon.com/images/I/51C6pO5-NjL._AC_SY575._SX._UX._SY._UY_.jpg',
    name: 'Stilleto',
    description: 'Stiletto Pointed Toe Heel Work Shoes'
  },

  {
    url:   'https://m.media-amazon.com/images/I/71EK-bl+DPL._AC_UX569_.jpg',
    name: 'Mens Hoodie',
    description: 'Essentials Mens Hooded Fleece Sweatshirt'
  },
  {
    url:  'https://m.media-amazon.com/images/I/61XLndd9YmL._AC_UX679_.jpg',
    name: 'Bisley Watch',
    description: 'Automatic Watches for Women Fashion Classic Diamond Stainless Steel'
  },
  {
    url:  'https://m.media-amazon.com/images/I/71HCQBX5N-L._AC_UY575_.jpg',
    name: 'Womens Sneakers',
    description: 'Womens Athletic Tennis Walking Shoes Fashion Sport Running Sneakers'
  },
  {
    url:  'https://m.media-amazon.com/images/I/71OoJiM6sIL._AC_SX466._SX._UX._SY._UY_.jpg',
    name: 'Mens Blue hoodie',
    description: 'Mens Novelty Color Block Pullover Fleece Hoodies'
  },
  {
    url:  'https://m.media-amazon.com/images/I/71Yt3lsE9AL._AC_SX466_.jpg',
    name: 'Laptop Bag',
    description: 'Matein Travel Laptop Backpack,  Slim Durable Laptops Backpack '
  },
  {
    url:  'https://m.media-amazon.com/images/I/61-3K02qM8L._AC_UX466_.jpg',
    name: 'Green Dress',
    description: 'Womens Summer Midi Bodycon Dresses Casual Crew Neck '
  },
  {
    url:  'https://cdn.animenewsnetwork.com/thumbnails/max600x600/cms/interest.2/180617/211109_dbs_16x9-1920x1080_group-5.jpg',
    name: 'Fila Sneakers',
    description: 'Unisex Fila Sneakers'
  },
  {
    url:  'https://m.media-amazon.com/images/I/61rR3SBTdRL._AC_UY575_.jpg',
    name: 'Women Wedge shoes',
    description: 'Tscoyuki Espadrille Wedge Sandals for Women'
  },
  {
    url:  'https://i.etsystatic.com/38667118/r/il/0a4607/4515855832/il_794xN.4515855832_h0a5.jpg',
    name: 'T-shirt',
    description: 'Pink ladies T-shirt'
  },
  {
    url:  'https://m.media-amazon.com/images/I/61KQXq71FJL._AC_UY575_.jpg',
    name: 'Unisex sunglasses',
    description: 'Polarized Sunglasses for Men and Women Semi-Rimless Frame '
  },
  {
    url:  'https://m.media-amazon.com/images/I/71E8QSpVPpL._AC_UY550_.jpg',
    name: 'Pink Dress',
    description: 'This is the description for Product 1'
  },
  {
    url:  'https://m.media-amazon.com/images/I/81J9n9s+QXL._AC_UY550_.jpg',
    name: 'Ripped Jeans',
    description: 'Women Skinny Ripped Jeans Stretch Distressed Destroyed Denim Pants'
  },
  {
    url:  'https://m.media-amazon.com/images/I/51oEgSvgGbL._AC_SX569._SX._UX._SY._UY_.jpg',
    name: 'Blue Hoodie',
    description: 'adidas Mens Essentials Fleece 3-Stripes Hoodie'
  }

 
];

const About = () => {
  return (
    <div className='landing-page'>
      <div className='about-section'>
        
        <h1 className="animated-heading">We Are <span class="easyshop-text">EasyShop</span></h1>
        <p className="animated-paragraph" style={{ fontStyle: 'italic', color: 'black' }}>
          Welcome to <b><span class="easyshop-texts">EasyShop</span></b> We are your one-stop-shop for all your fashion needs. Our online store offers a wide selection of shoes, clothes, bags, and watches for men, women, and children. We are passionate about providing our customers with high-quality products at affordable prices.
        </p>
        <p className="animated-paragraph" style={{ fontStyle: 'italic', color: 'black' }}>
          At <b><span class="easyshop-texts">EasyShop</span></b>, we believe that fashion is more than just clothing, it's a way of expressing yourself and feeling confident in your own skin. That's why we carefully curate our collection to ensure that we offer only the latest and trendiest styles.
        </p>
        <p className="animated-paragraph" style={{ fontStyle: 'italic', color: 'black' }}>
          Our team is dedicated to providing excellent customer service and making your shopping experience as easy and enjoyable as possible. We offer fast and reliable shipping, easy returns, and secure payment options.
        </p>
        <p className="animated-paragraph" style={{ fontStyle: 'italic', color: 'black' }}>
          Thank you for choosing <b><span class="easyshop-texts">EasyShop</span></b> for your fashion needs. We are committed to providing you with the best shopping experience possible. Happy shopping!
        </p>
      </div>

      <div className='card-container'>
      <Slide easing="ease" pauseOnHover={true} slidesToShow={6}  transitionDuration={1000}>
  {slideImages.map((image, index) => (
    <div className='cardi' key={index}>
      <img src={image.url} alt='Product' />
      <h3>{image.name}</h3>
      <p>{image.description}</p>
    </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default About;