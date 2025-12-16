'use client';

import { useEffect, useState } from "react";
import NavBar from "@/components/navigation/NavBar";
import BackgroundImage from "@/components/BackgroundImage";
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
    const [daysLeft, setDaysLeft] = useState(0);
    const [daysTogether, setDaysTogether] = useState(0);
    const searchParams = useSearchParams();
    const [plusOne, setPlusOne] = useState<string | null>(searchParams?.get("plusOne") ?? null);
    const guestOne = searchParams?.get("guestOne") ?? null;
    const guestTwo = searchParams?.get("guestTwo") ?? null;
    const family = searchParams?.get("family") ?? null;

    function calcDays() {
        const today = Date.now();
        const weddingDay = new Date("2026-08-09T13:00:00");
        const dayStartedDating = new Date("2009-12-17");

        const daysTogetherMilliseconds = today - +dayStartedDating;
        setDaysTogether(Math.ceil(daysTogetherMilliseconds / (1000 * 60 * 60 * 24)));

        const daysLeftInMilliseconds = +weddingDay - today;
        setDaysLeft(Math.ceil(daysLeftInMilliseconds / (1000 * 60 * 60 * 24)));
    }

    useEffect(() => {
        calcDays();
    }, []);

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
                <RSVP guestOne={guestOne} guestTwo={guestTwo} family={family} plusOne={plusOne} setPlusOne={setPlusOne} />
                <Gifts />
            </div>
        </BackgroundImage>
    );
}