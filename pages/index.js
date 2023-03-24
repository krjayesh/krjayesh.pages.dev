import React from 'react'
import Head from 'next/head'

const Home2 = (props) => {
  return (
    <>
      <div className="home2-container">
        <Head>
          <title>Jayesh Kumar • Interface Designer</title>
          <meta
            name="description"
            content="I'm a young ambitious designer creating delightful and accessible interface experience that people will love."
          />
          <meta
            property="og:title"
            content="Jayesh Kumar • Interface Designer"
          />
          <meta
            property="og:description"
            content="A raising gen-z UI designer from India."
          />
        </Head>
        <div className="home2-container1">
          <span className="home2-text">
            <span>
              I&apos;m
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home2-text02">Jayesh Kumar</span>
            <span>, a 17-year-old UI designer from India.</span>
          </span>
          <span className="home2-text04">
            <span>
              I&apos;m passionate about creating killer interfaces that users
              love. I design for
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <a
              href="https://joinblite.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home2-link"
            >
              Blite
            </a>
            <span>
              , an app that helps high-schoolers stay on top of their schedules,
              and I also work at
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <a
              href="https://crestlyconsulting.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="home2-link1"
            >
              Crestly Consulting
            </a>
            <span> as a designer.</span>
          </span>
          <div className="home2-container2">
            <span className="home2-text08">Reach me at</span>
            <img
              alt="image"
              src="/playground_assets/hyphen1.svg"
              className="home2-image"
            />
            <a
              href="https://www.instagram.com/krjayesh2110/"
              target="_blank"
              rel="noreferrer noopener"
              className="home2-link2"
            >
              <div className="home2-container3">
                <img
                  alt="image"
                  src="/playground_assets/instagram1.svg"
                  className="home2-image1"
                />
              </div>
            </a>
            <a
              href="https://twitter.com/krjdesignz"
              target="_blank"
              rel="noreferrer noopener"
              className="home2-link3"
            >
              <div className="home2-container4">
                <img
                  alt="image"
                  src="/playground_assets/twitter1.svg"
                  className="home2-image2"
                />
              </div>
            </a>
            <a
              href="https://dribbble.com/krjayesh"
              target="_blank"
              rel="noreferrer noopener"
              className="home2-link4"
            >
              <div className="home2-container5">
                <img
                  alt="image"
                  src="/playground_assets/dribbble1.svg"
                  className="home2-image3"
                />
              </div>
            </a>
            <a
              href="https://wa.me/919428408742"
              target="_blank"
              rel="noreferrer noopener"
              className="home2-link5"
            >
              <div className="home2-container6">
                <img
                  alt="image"
                  src="/playground_assets/whatsapp1.svg"
                  className="home2-image4"
                />
              </div>
            </a>
            <a
              href="mailto:krjayesh2004@gmail.com?subject="
              className="home2-link6"
            >
              <div className="home2-container7">
                <img
                  alt="image"
                  src="/playground_assets/email.svg"
                  className="home2-image5"
                />
              </div>
            </a>
          </div>
        </div>
        <div className="home2-container8">
          <img
            alt="image"
            src="/playground_assets/grinning-face-with-sweat--v2-1500h.png"
            className="home2-image6"
          />
          <span className="home2-text09">
            I’ll upload a resume soon
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .home2-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/backgound%20image-1500w.webp');
            background-repeat: no-repeat;
            background-position: center;
          }
          .home2-container1 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home2-text {
            color: rgb(164, 171, 191);
            font-size: 2.34375vh;
            font-style: normal;
            font-family: Circular Std Book;
            font-weight: 400;
            line-height: 2.9296875vh;
            margin-bottom: 2.34375vh;
          }
          .home2-text02 {
            color: #00ffd4;
          }
          .home2-text04 {
            color: rgb(164, 171, 191);
            width: 71.875vh;
            font-size: 2.34375vh;
            font-style: normal;
            text-align: center;
            font-family: Circular Std Book;
            font-weight: 400;
            line-height: 3.41797vh;
            margin-bottom: 3.90625vh;
          }
          .home2-link {
            color: #2693ff;
          }
          .home2-link1 {
            color: #b752ff;
          }
          .home2-container2 {
            gap: 1.953125vh;
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home2-text08 {
            color: rgb(164, 171, 191);
            font-size: 2.34375vh;
            font-style: normal;
            font-family: Circular Std Book;
            font-weight: 400;
            line-height: 2.92969vh;
          }
          .home2-image {
            width: 2.34375vh;
            height: 2.34375vh;
            object-fit: cover;
            margin-left: 0.9765625vh;
            margin-right: 0.9765625vh;
          }
          .home2-link2 {
            display: contents;
          }
          .home2-container3 {
            flex: 0 0 auto;
            width: 4.8828125vh;
            height: 4.8828125vh;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-radius: 100%;
            justify-content: center;
            text-decoration: none;
            background-color: #1c253b;
          }
          .home2-container3:hover {
            background-color: #8b5cf6;
          }
          .home2-image1 {
            width: 2.9296875vh;
            height: 2.9296875vh;
            object-fit: cover;
          }
          .home2-link3 {
            display: contents;
          }
          .home2-container4 {
            flex: 0 0 auto;
            width: 4.8828125vh;
            height: 4.8828125vh;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-radius: 100%;
            justify-content: center;
            text-decoration: none;
            background-color: #1c253b;
          }
          .home2-container4:hover {
            background-color: #0090ff;
          }
          .home2-image2 {
            width: 2.9296875vh;
            height: 2.9296875vh;
            object-fit: cover;
          }
          .home2-link4 {
            display: contents;
          }
          .home2-container5 {
            flex: 0 0 auto;
            width: 4.8828125vh;
            height: 4.8828125vh;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-radius: 100%;
            justify-content: center;
            text-decoration: none;
            background-color: #1c253b;
          }
          .home2-container5:hover {
            background-color: #ff4de1;
          }
          .home2-image3 {
            width: 2.9296875vh;
            height: 2.9296875vh;
            object-fit: cover;
          }
          .home2-link5 {
            display: contents;
          }
          .home2-container6 {
            flex: 0 0 auto;
            width: 4.8828125vh;
            height: 4.8828125vh;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-radius: 100%;
            justify-content: center;
            text-decoration: none;
            background-color: #1c253b;
          }
          .home2-container6:hover {
            background-color: #00a653;
          }
          .home2-image4 {
            width: 2.9296875vh;
            height: 2.9296875vh;
            object-fit: cover;
          }
          .home2-link6 {
            display: contents;
          }
          .home2-container7 {
            flex: 0 0 auto;
            width: 4.8828125vh;
            height: 4.8828125vh;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-radius: 100%;
            justify-content: center;
            text-decoration: none;
            background-color: #1c253b;
          }
          .home2-container7:hover {
            background-color: #ff2e62;
          }
          .home2-image5 {
            width: 2.9296875vh;
            height: 2.9296875vh;
            object-fit: cover;
          }
          .home2-container8 {
            gap: 0.5859375vh;
            flex: 0 0 auto;
            left: 0px;
            right: 0px;
            bottom: 7.8125vh;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: center;
            justify-content: center;
          }
          .home2-image6 {
            width: 2.9296875vh;
            height: 2.9296875vh;
            object-fit: cover;
          }
          .home2-text09 {
            color: rgb(164, 171, 191);
            font-size: 2.34375vh;
            font-style: normal;
            font-family: Circular Std Book;
            font-weight: 400;
            line-height: 2.92969vh;
          }
        `}
      </style>
    </>
  )
}

export default Home2
