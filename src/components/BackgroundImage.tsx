import Image from "next/image"

function BackgroundImage({ children }: { children: React.ReactNode }) {
    return (
        <div className='relative overflow-y-scroll h-screen snap-y snap-mandatory scroll-auto'>
            <Image src="/images/background-top-left.jpg" alt="" aria-hidden="true" loading='lazy' width={600} height={600} className='fixed max-h-[50svh] max-w-[50vw] aspect-square -top-5 -left-5 -z-10 animate-grow-top-left origin-top-left ' style={{ willChange: 'transform, opacity' }} />
            <Image src="/images/background-top-right.jpg" alt="" aria-hidden="true" loading='lazy' width={600} height={600} className='fixed max-h-[50svh] max-w-[50vw] aspect-square  top-0 -right-1 -z-10 animate-grow-top-right origin-top-right' style={{ willChange: 'transform, opacity' }} />
            {children}
            <Image src="/images/background-bottom-left.jpg" alt="" aria-hidden="true" loading='lazy' width={600} height={600} className='fixed max-h-[50svh] max-w-[50vw] aspect-square -bottom-8 -left-8 -z-10  animate-grow-bottom-left origin-bottom-left' style={{ willChange: 'transform, opacity' }} />
            <Image src="/images/background-bottom-right.jpg" alt="" aria-hidden="true" loading='lazy' width={600} height={600} className='fixed max-h-[50svh] max-w-[50vw] aspect-square -bottom-2 -right-5 -z-10 animate-grow-bottom-right origin-bottom-right' style={{ willChange: 'transform, opacity' }} />
        </div>
    )
}

export default BackgroundImage