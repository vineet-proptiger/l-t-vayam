import './globals.css'
import { faviconImages } from '../lib/images'
import { CITY_DISPLAY } from '../lib/config'
import { Open_Sans, Montserrat, Cormorant_Garamond } from 'next/font/google'
import localFont from 'next/font/local'
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jost',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const nephilm = localFont({
  src: '../public/fonts/Nephilm.otf',
  variable: '--font-nephilm',
  display: 'swap',
})

export const metadata = {
  title: 'L&T Vayam Thane | Premium 2 & 3 BHK Apartments',
  description: 'L&T Realty presents premium 2 & 3 BHK homes at Vayam, Thane (Mulund Extension). 2 BHK from 690 sq.ft., EOI ₹2L. Enquire Now.',
  alternates: {
    canonical: 'https://lntvayamwagleestate.com/',
  },
  icons: {
    icon: [
      { url: faviconImages.ico },
      { url: faviconImages.png96, sizes: '96x96', type: 'image/png' },
      { url: faviconImages.svg, type: 'image/svg+xml' },
    ],
    apple: [
      { url: faviconImages.apple, sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: faviconImages.manifest,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-575H8R87" />
      <head>
        <Script
          id="json-ld-article"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Website",
              "name": "L&T Vayam Vayam",
              "description": "L&T Vayam Vayam in Thane offers premium 2 & 3 BHK residences designed for modern urban living. Enjoy luxury amenities.",
              "url": "https://lntvayamwagleestate.com/",
              "provider": {
                "@type": "Organization",
                "name": "lntvayamwagleestate",
                "url": "https://lntvayamwagleestate.com/",
                "logo": "https://lntvayamwagleestate.com/images/logo/logo.png"
              },
              "image": "https://lntvayamwagleestate.com/_next/image?url=%2Fimages%2Fhero%2Fbanner1.webp&w=3840&q=75&dpl=dpl_6XMBKGFBGYTXtmm1phhBFnNxy4Q3",
              "offers": {
                "@type": "Offer",
                "priceCurrency": "INR",
                "price": "30000000",
                "priceSpecification": {
                  "@type": "UnitPriceSpecification",
                  "price": "15700000",
                  "priceCurrency": "INR",
                  "description": "Special Discount at L&T Vayam Vayam"
                }
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "5723",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "author": { "@type": "Person", "name": "Anuj Singh" },
                "reviewBody": "Highly Recommended L&T Vayam Vayam, Mumbai."
              }
            })
          }}
        />
      </head>
      <body className={`${openSans.variable} ${montserrat.variable} ${cormorant.variable} ${nephilm.variable} font-sans text-dark antialiased`}>
        <Script id="gtag-init" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ 'city': '${CITY_DISPLAY}' });
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`}
        </Script>
        {children}
      </body>
    </html>
  )
}
