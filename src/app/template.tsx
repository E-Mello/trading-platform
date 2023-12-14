import Image from 'next/image'
import SideNavLeftComponent from "@/components/SideNavLeft";
import TradeImage from '../../public/trade02.jpg'

export default function Template({ children }: { children: React.ReactNode }) {

    return (
        <section className="flex flex-col justify-between">
            <nav className=" items-center">
                <SideNavLeftComponent />
            </nav>
            <section className="fixed items-center justify-center h-screen">
                <div className="w-full h-full fixed">
                    <Image
                        alt=''
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        src={TradeImage}
                        className='overflow-hidden fixed'
                    />
                </div>
            </section>
            <main className="flex justify-center z-0">
                {children}
            </main>
        </section>
    );
}