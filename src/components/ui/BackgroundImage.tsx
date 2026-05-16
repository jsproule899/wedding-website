import Image from "next/image"

function BackgroundImage({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Image src="/images/background-top-left-hr.png" alt="" aria-hidden="true" loading='eager' width={300} height={300} className='fixed max-h-[40svh] max-w-[40svw] aspect-square -top-5 -left-5 -z-10 animate-grow-top-left origin-top-left select-none' style={{ willChange: 'transform, opacity' }} />
            <Image src="/images/background-top-right-hr.png" alt="" aria-hidden="true" loading='eager' width={300} height={300} className='fixed max-h-[40svh] max-w-[40vw] aspect-square  -top-2 -right-6 -z-10 animate-grow-top-right origin-bottom-right select-none' style={{ willChange: 'transform, opacity' }} />
            {children}
            <Image src="/images/background-bottom-left-hr.png" alt="" aria-hidden="true" loading='eager' width={300} height={300} className='fixed max-h-[40svh] max-w-[40vw] aspect-square bottom-0 -left-10 -z-10  animate-grow-bottom-left origin-bottom-left select-none' style={{ willChange: 'transform, opacity' }} />
            <Image src="/images/background-bottom-right-hr.png" alt="" aria-hidden="true" loading='eager' width={300} height={300} className='fixed max-h-[40svh] max-w-[40vw] aspect-square -bottom-2 -right-5 -z-10 animate-grow-bottom-right origin-bottom-right select-none' style={{ willChange: 'transform, opacity' }} />
        </>
    )
}

export default BackgroundImage
