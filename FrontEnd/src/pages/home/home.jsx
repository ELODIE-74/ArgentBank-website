import React from "react";
import MainNav from "../../components/nav/nav";
import Hero from "../../components/hero/hero";
import FeatureItem from "../../components/featureitem/featureitem";
import Footer from "../../components/footer/footer";

function Home() {
  return (
    <div>
      <MainNav />
      <main>
        <Hero />
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <FeatureItem
            icon="./img/icon-chat.png"
            title="You are our #1 priority"
            description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
          />
          <FeatureItem
            icon="./img/icon-money.png"
            title="More savings means higher rates"
            description="The more you save with us, the higher your interest rate will be!"
          />
          <FeatureItem
            icon="./img/icon-security.png"
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
