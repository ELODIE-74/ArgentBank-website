// import de plusieurs composants enfants : MainNav, Hero, FeatureItem, et Footer.
import React from "react";
import MainNav from "../../components/nav/nav";
import Hero from "../../components/hero/hero";
import FeatureItem from "../../components/featureitem/featureitem";
import Footer from "../../components/footer/footer";
import "../../pages/home/home.css";

//affichage des rendus des composants MainNav/Hero/FeatureItem/Footer lorsqu'on les appellent dans la page
function Home() {
  return (
    <div>
      <MainNav />
      <main>
        <Hero />
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <FeatureItem
            icon="./image/icon-chat.webp"
            title="You are our #1 priority"
            description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
          />
          <FeatureItem
            icon="./image/icon-money.webp"
            title="More savings means higher rates"
            description="The more you save with us, the higher your interest rate will be!"
          />
          <FeatureItem
            icon="./image/icon-security.webp"
            title="Security you can trust"
            description="We use top of the line encryption to make sure your data and money is always safe."
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
