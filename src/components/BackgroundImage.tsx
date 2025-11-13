import backgroundImgTopRight from '../assets/background-top-right.jpg';
import backgroundImgTopLeft from '../assets/background-top-left.jpg';
import backgroundImgBottomLeft from '../assets/background-bottom-left.jpg';
import backgroundImgBottomRight from '../assets/background-bottom-right.jpg';

function BackgroundImage({ children }: { children: React.ReactNode }) {
    return (
        <div className='relative overflow-y-scroll h-screen snap-y snap-mandatory scroll-auto'>
            <img src={backgroundImgTopLeft} alt="" aria-hidden="true" loading='lazy' className='fixed max-h-[50svh] max-w-[50vw] aspect-square -top-5 -left-5 -z-10 animate-grow-top-left origin-top-left ' style={{ willChange: 'transform, opacity' }} />
            <img src={backgroundImgTopRight} alt="" aria-hidden="true" loading='lazy' className='fixed max-h-[50svh] max-w-[50vw] aspect-square  top-0 -right-1 -z-10 animate-grow-top-right origin-top-right' style={{ willChange: 'transform, opacity' }} />
            {children}
            <img src={backgroundImgBottomLeft} alt="" aria-hidden="true" loading='lazy' className='fixed max-h-[50svh] max-w-[50vw] aspect-square -bottom-8 -left-8 -z-10  animate-grow-bottom-left origin-bottom-left' style={{ willChange: 'transform, opacity' }} />
            <img src={backgroundImgBottomRight} alt="" aria-hidden="true" loading='lazy' className='fixed max-h-[50svh] max-w-[50vw] aspect-square -bottom-2 -right-5 -z-10 animate-grow-bottom-right origin-bottom-right' style={{ willChange: 'transform, opacity' }} />
        </div>
    )
}

export default BackgroundImage