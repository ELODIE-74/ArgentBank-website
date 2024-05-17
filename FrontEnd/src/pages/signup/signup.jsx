import React from "react";
import MainNav from "../../components/nav/nav";
import SignInForm from "../../components/signinfom/signinform";
import Footer from "../../components/footer/footer";

function Signup() {
  return (
    <div>
      <MainNav />
      <main className="main bg-dark">
        <SignInForm />
      </main>
      <Footer />
    </div>
  );
}

export default Signup;
