'use client';

import { useState } from "react";
import NavBar from "@/components/navigation/NavBar";
import BackgroundImage from "@/components/ui/BackgroundImage";
import Home from "@/components/Home";
import WeddingParty from "@/components/WeddingParty";
import GettingThere from "@/components/GettingThere";
import Accomodation from "@/components/Accomodation";
import Menu from "@/components/Menu";
import Timeline from "@/components/Timeline";
import RSVP from "@/components/RSVP";
import Gifts from "@/components/Gifts";
import { useSearchParams } from "next/navigation";

export default function Page() {
    const searchParams = useSearchParams();
    const [plusOne, setPlusOne] = useState<string | null>(searchParams?.get("plusOne") ?? null);
    const guestOne = searchParams?.get("guestOne") ?? null;
    const guestTwo = searchParams?.get("guestTwo") ?? null;
    const family = searchParams?.get("family") ?? null;

    return (
        <BackgroundImage>
            <div id="container" className="flex flex-col">
                <NavBar />
                <Home guestOne={guestOne} guestTwo={guestTwo} family={family} plusOne={plusOne} />
                <WeddingParty />
                <GettingThere />
                <Accomodation />
                <Menu />
                <Timeline />
                <RSVP guestOne={guestOne} guestTwo={guestTwo} plusOne={plusOne} setPlusOne={setPlusOne} />
                <Gifts />
            </div>
        </BackgroundImage>
    );
}