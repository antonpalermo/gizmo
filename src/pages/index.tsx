import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export default function Home() {
  return <main className={`${inter.className}`}></main>
}
