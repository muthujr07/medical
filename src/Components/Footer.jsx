import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
    return (
        <>
            <div className="bg-backgroundColor text-white rounded-t-3xl mt-8 md:mt-0">
                <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
                    <div className="w-full md:w-1/4">
                        <h1 className="font-semibold text-xl pb-4">SHIFA MEDICALS-B</h1>
                        <p className="text-sm">Our Doctors Visites our Medical At EveryDay for Different types of specialities
                            Ortho,Neuro,Dentist,Heart,general etc...
                        </p>
                    </div>
                    <div>
                        <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">About Us</h1>
                        <nav className="flex flex-col gap-2">
                            <Link
                                to="about"
                                spy={true}
                                smooth={true}
                                duration={500}
                                className="hover:text-hoverColor transition-all cursor-pointer"
                            >
                                About
                            </Link>
                            <Link
                                to="services"
                                spy={true}
                                smooth={true}
                                duration={500}
                                className="hover:text-hoverColor transition-all cursor-pointer"
                            >
                                Services
                            </Link>
                            <Link
                                to="doctors"
                                spy={true}
                                smooth={true}
                                duration={500}
                                className="hover:text-hoverColor transition-all cursor-pointer"
                            >
                                Doctors
                            </Link>
                        </nav>
                    </div>
                    <div>
                        <nav>
                        <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Services</h1>
                        <nav className="flex flex-col gap-2">
                        <Link
                            to="services"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:text-hoverColor transition-all cursor-pointer"
                        >
                            Lab test
                        </Link>
                        <Link
                            to="services"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:text-hoverColor transition-all cursor-pointer"
                        >
                            Health Check
                        </Link>
                        <Link
                            to="services"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:text-hoverColor transition-all cursor-pointer"
                        >
                            Heart Health
                        </Link>

                        </nav>
                        
                        </nav>
                     </div>
                     <div className="w-full md:w-1/4">
                        <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Contact US</h1>
                        <nav className="flex flex-col gap-2">
                        <Link
                            to="/"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:text-hoverColor transition-all cursor-pointer"
                        >
                            KANGAYEM MAIN ROAD , HOUSING UNIT, SHOP NO:1, SHIFA MEDICAL.
                        </Link> 
                        <Link
                            to="/"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:text-hoverColor transition-all cursor-pointer"
                        >
                            shifamedical@.com
                        </Link> 
                        <Link
                            to="/"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:text-hoverColor transition-all cursor-pointer"
                        >
                            7010458168-6380061571
                        </Link> 

                        </nav>
                     </div>
                </div>
            </div>
        </>
    )
}
export default Footer;