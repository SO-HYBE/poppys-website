'use client'
import localFont from 'next/font/local';
import Container from './components/container';
import {Poppins} from 'next/font/google';

const bulleto = localFont({ src: './styles/BULLETTO-KILLA.ttf', variable: '--bulleto' })
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ["300" , "100" , "200" , "400" , "500" , "600" , "700" , "800" , "900"]
})
export default function Home() {

if (typeof window !== 'undefined') {
 document.body.scrollTop = document.documentElement.scrollTop = 0;
}

  return (
    <main className={`${bulleto.variable} ${poppins.variable} font-sans z-10 absolute`}>
      <Container />
    </main>
  )
}
