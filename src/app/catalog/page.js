"use client"
import HeaderLine from "@/components/HeaderLine";
import Avtopark from "@/components/Avtopark";
import Rent from "@/components/Rent";
import Faq from "@/components/Faq";
import MapFooter from "@/components/MapFooter";
import Footer from "@/components/Footer";

export default function Catalog() {
  return<>
            <header className="header"><HeaderLine /></header>
            <main className="mt-11">
                <div className="container mx-auto ">
                    <div className="breadcrumbs">
                        <a href="/" className="bc-item text-xl uppercase font-dela">Главная</a>
                    </div>
                     <Avtopark />
                     <Rent />
                     <Faq />
                    <MapFooter />
                    <Footer />
                </div>
            </main>

        </>
}