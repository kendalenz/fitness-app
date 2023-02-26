import { SelectedPage } from '@/shared/types'
import React from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    return (
    <section
        id="home"
        className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'
    >
        {/* Image and Main Header */}
        <div>
            {/* Main Header */}
            <div>
                {/* Headings */}
                <div>
                    <div>
                        <div>
                            <img alt="home-page-text" src={HomePageText}/>
                        </div>
                    </div>
                <p>
                    A Temple of Well-Being. World-Class Personal Trainers, Group Fitness Classes, Spas & More. Find A Luxury Fitness Club Near Your Area. View Our Membership Benefits. Complimentary Parking. Luxury Gym Studios. Equinox+ App Integration. One-on-One Training.
                </p>
            </div>
            {/* Actions */}
            <div>
                <ActionButton setSelectedPage={setSelectedPage}>
                    Join Now
                </ActionButton>
                <AnchorLink
                    className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
                    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                    href={`#${SelectedPage.ContactUs}`}
                >
                    <p>Learn More</p>
                </AnchorLink>
            </div>
        </div>
        {/* Image */}
        <div>
            <img alt='home-pageGraphic' src={HomePageGraphic}></img>
        </div>
        </div>
        {/* Sponsors */}

    </section>
)}

export default Home;