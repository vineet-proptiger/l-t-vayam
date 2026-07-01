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
  title: 'L&T Vayam Wagle Estate | Luxury 2 & 3 BHK Apartments Thane',
  description: 'L&T Vayam Wagle Estate Thane offers luxury 2 & 3 BHK residences from ₹1.57 Cr*. Landmark G+70 towers with premium amenities. Visit Site!',
  keywords: 'Vayam Wagle Estate, L&T Vayam Wagle Estate, L&T Wagle Estate, L&T Wagle Estate Thane, L&T Wagle Estate Mulund Extension, L&T Realty Thane, 2 BHK in Thane, 3 BHK in Thane, luxury apartments in Thane, pre launch projects in Thane, homes near Mulund, Wagle Estate residential project, L&T Realty projects, premium apartments in Thane, new launch projects in Thane, apartments near LBS Marg, Thane luxury homes',
  authors: [{ name: 'lntvayamwagleestate' }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://lntvayamwagleestate.com/',
  },
  openGraph: {
    type: 'website',
    title: 'L&T Realty Vayam Wagle Estate | Premium 2 & 3 BHK Residences',
    description: 'Experience luxury living at L&T Vayam Wagle Estate in Thane with spacious 2 & 3 BHK homes, premium lifestyle amenities, and seamless connectivity to major commercial hubs. Secure your dream home today with an EOI of only ₹2 Lakhs and attractive launch offers.',
    url: 'https://lntvayamwagleestate.com/',
    siteName: 'lntvayamwagleestate',
    images: [
      {
        url: 'https://lntvayamwagleestate.com/images/logo/logo.png',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@lntvayamwagleestate',
    title: 'L&T Vayam Wagle Estate, Thane | Luxury 2 & 3 BHK Homes in Wagle Estate',
    description: 'L&T Vayam Wagle Estate introduces thoughtfully designed 2 & 3 BHK residences in the heart of Thane. Featuring modern amenities, superior connectivity, and exclusive launch pricing, this is your opportunity to own a premium home with an EOI starting from ₹2 Lakhs.',
    images: ['https://lntvayamwagleestate.com/images/logo/logo.png'],
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
              "name": "L&T Vayam Wagle Estate",
              "description": "L&T Vayam Wagle Estate in Thane offers premium 2 & 3 BHK residences designed for modern urban living. Enjoy luxury amenities.",
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
                  "description": "Special Discount at L&T Vayam Wagle Estate"
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
                "reviewBody": "Highly Recommended L&T Vayam Wagle Estate, Mumbai."
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
