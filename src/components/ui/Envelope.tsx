import Image from "next/image"
import { useEffect, useState } from "react";

export default function Envelope() {
    const [opened, setOpened] = useState(false);

    useEffect(() => {
        if (!opened) {
            const timer = setTimeout(() => {
                setOpened(true);
            }, 3000); // Reset after 3 seconds 
            return () => clearTimeout(timer); // Cleanup on unmount or when opened changes
        }
    }, []);

    return (
        <div className="w-full h-lvh" onClick={() => setOpened(true)}>
            <div className={`fixed right-0 paper h-lvh w-8/12 z-40 transition-all origin-right ease-initial delay-1500 duration-500 ${opened && ' translate-x-full'}`} />
            <div className={`fixed left-0 paper h-lvh w-5/12 drop-shadow-2xl z-40 transition-all origin-left ease-in-out delay-1500 duration-500 ${opened && 'animate-open-envelope -translate-x-full'}`}>
                <Image src="/images/rj-wax-stamp.png" alt="Wax Stamp" width={200} height={200} className="fixed top-[50dvh] left-[41.7vw] -translate-x-1/2 -translate-y-1/2 z-40 aspect-square" />
            </div>


        </div>
    )
}