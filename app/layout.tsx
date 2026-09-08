import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from "@vercel/analytics/react"
import Footer from '@/components/Footer';
import { Toaster } from "@/components/ui/sonner"
import Navbar from './navbar/navbar';
import { SpeedInsights } from "@vercel/speed-insights/next"
import logo from '../public/logo.png';
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Dhwani Cambridge Montessori Preschool and Day Care - Nurturing Young Minds with Love and Care',
  description: 'A loving and safe environment for children to explore, learn, and grow. We provide a holistic approach to early childhood education with experienced educators and a vibrant community.',
  keywords: [
    'preschool', 'montessori preschool', 'daycare', 'child care', 'early childhood education',
    'kindergarten', 'nursery', 'Dhwani preschool', 'play school', 'best preschool',
    'Cambridge Montessori', 'child development center', 'preschool admission', 'learning center for kids',
    'preschool in Pitampura', 'preschool in Delhi', 'best daycare in Pitampura', 'montessori school Delhi',
    'early learning center', 'toddler program', 'play group admission', 'LKG admission Delhi',
    'UKG classes Pitampura', 'nursery school admission', 'safe daycare for infants', 'holistic child development',
    'child centered curriculum', 'best play school near me', 'top preschool in North Delhi', 'affordable daycare Delhi',
    'premium montessori Pitampura', 'Maria Montessori method', 'hands on learning for kids', 'preschool teacher training',
    'daycare center near me', 'after school care Pitampura', 'early years education', 'infant care center',
    'preschool franchise Delhi', 'Cambridge Montessori franchise', 'childcare services', 'child enrichment programs',
    'mind lab for kids', 'cognitive development early years', 'fine motor skills activities', 'toddler curriculum',
    'best kindergarten Pitampura', 'Delhi preschool reviews', 'play based learning', 'active exploration for kids',
    'safe environment for children', 'early reading skills', 'math for preschoolers', 'english for toddlers',
    'hindi for preschoolers', 'sensory motor skills', 'experiential learning for kids', 'pre primary school Delhi',
    'best pre primary education', 'top rated preschool', 'child care professionals', 'experienced montessori teachers',
    'preschool campus tour', 'early childhood development', 'playgroup franchise', 'preschool curriculum',
    'early education center', 'creative learning for kids', 'child safety in preschool', 'kids day care near me',
    'nursery school Pitampura', 'play school admission open', 'pre nursery admission', 'toddler care Pitampura',
    'full day childcare', 'half day preschool', 'independent learning for children', 'montessori materials',
    'sensory activities for toddlers', 'early childhood curriculum', 'pre kg admission', 'best early learning center',
    'childcare Pitampura', 'top 10 preschools in Delhi', 'top 10 preschools in Pitampura', 'early childhood center',
    'preschool education', 'best play school in Pitampura', 'kindergarten admission Pitampura', 'early childhood professionals',
    'child friendly environment', 'play school franchise in India', 'best nursery near me', 'leading montessori school',
    'holistic early education', 'child creativity development', 'early literacy skills', 'social skills for toddlers',
    'child care in Delhi', 'Dhwani Cambridge Montessori'
  ],
  images: [
    {
      url: logo,
    }
  ],
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* <script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></script> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />

        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main className=''>
            <Analytics />
            <SpeedInsights />
          </main>
          {children}
        </ThemeProvider>
        <Toaster />
        <Footer />
        {/* <Sessioprovider/> */}

      </body>
    </html>
  )
} 
