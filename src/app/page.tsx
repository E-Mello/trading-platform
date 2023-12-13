import Image from 'next/image'
import TradeImage from '../../public/trade02.jpg'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image alt='' width={2500} height={1080} src={TradeImage} />
    </main>
  )
}
