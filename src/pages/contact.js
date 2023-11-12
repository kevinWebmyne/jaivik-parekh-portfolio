import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "@/components/TransitionEffect";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send data to server)
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Head>
        <title>Jaivik Parekh | Contact</title>
        <meta
          name="description"
          content="This is the contact page for the Jaivik Parekh Portfolio website"
        />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen mt-24">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-full flex flex-col items-center self-center text-center">
              <AnimatedText
                text="Connect Us!"
                className="!text-6xl leading-4 !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />

              <div style={{}} className="min-w-[50vw] flex flex-col justify-center z-30 items-center rounded-lg backdrop-blur-md py-8  dark:bg-light/50 mt-4">
                <form 
                 action="https://formsubmit.co/kevinwebmyne@gmail.com"
                 method="POST"
                  className="form">

                <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border rounded-md text-dark"
                    />
                  


                <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border rounded-md text-dark"
                    />
                     <input
                      type="text"
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full p-2 border rounded-md text-dark"
                    />

                      
                  <button type="submit" className="button-confirm">Submit →</button>
                </form>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Contact;
