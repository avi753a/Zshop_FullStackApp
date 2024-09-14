import { Hero } from "../../Components/HomePageComponents/Hero/Hero";
import { MonthlyDeal } from "../../Components/HomePageComponents/MonthlyDeal/MonthlyDeal";
import { NavBar } from "../../Components/Navbar/Navbar";
import "./Home.scss";
import { NewArrivals } from "../../Components/HomePageComponents/NewArrivals/NewArrival";
import { Promotion } from "../../Components/HomePageComponents/Promotion/Promotion";
import { Features } from "../../Components/HomePageComponents/Features/Features";
import { Gallary } from "../../Components/HomePageComponents/Gallary/Gallary";
import { Testimonials } from "../../Components/HomePageComponents/Testimonials/Testimonials";
import { TestimonialCard } from "../../Components/HomePageComponents/TestimonialCard/TestimonialCard";
import { Subscribe } from "../../Components/Subscribe/Subscribe";

export function HomePage() {

    return (
        <>
            <div className="home-container my-3 d-flex flex-column align-items-center justify-content-start">
                <div className="navbar col-10 mx-auto">
                    <NavBar />
                </div>
                <div className="hero  col-10 mx-auto mb-6 ">
                    <Hero />
                </div>
                <div className="monthly-offer mb-6 ">
                    <MonthlyDeal />
                </div>
                <div className="new-arrivals col-10 mx-auto mb-6">
                    <NewArrivals />
                </div>
                <div className="promotion w-100">
                    <Promotion/>
                </div>
                <div className="features w-100 ">
                    <Features/>
                </div>
                <div className="gallary w-100 mb-6">
                    <Gallary/>
                </div>
                <div className="testimonial w-100 mb-6">
                    <Testimonials/>
                </div>
                <div className="news-letter w-90 mb-6">
                    <Subscribe />
                </div>


            </div>
        </>
    )
}