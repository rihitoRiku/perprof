import React from "react";
import Marquee from "react-fast-marquee";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ once: false, mirror: false });

export default function Certification() {
  const badgeImages = Array.from({ length: 14 }, (_, i) => i + 1); // Creates an array [1, 2, 3, ..., 14]
  return (
    <>
      <div className="relative w-full bg-white dark:bg-black dark:text-white">
        <div className="max-w-screen-2xl mx-auto h-full px-4">
          <div className="min-h-screen">
            <div
              data-aos="zoom-in"
              className="w-full flex flex-col gap-6 lg:gap-8 md:flex-row justify-center items-center"
            >
              <div className="w-full max-w-[30rem] min-w-[24rem] rounded-lg mt-16">
                <img
                  className="inset-0 object-contain rounded-lg border"
                  src="./Assets/Certificates/b.png"
                  alt="Cert"
                />
              </div>
              <div className="md:max-w-[26rem] w-full">
                <div className="text-4xl mb-4 font-parisienne ">
                  Google Cloud Certified Associate Cloud Engineer
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda doloremque dolore, iure aliquam nulla quo.
                </p>
              </div>
            </div>

            <div
              data-aos="zoom-in"
              className="mt-28 w-full flex flex-col gap-6 lg:gap-8 justify-center items-center"
            >
              <div className="md:max-w-[36rem] w-full lg:text-center md:order-1 order-2">
                <div className="text-4xl mb-4 font-parisienne">
                  Bangkit Academy: Distincion Graduate
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda doloremque dolore, iure aliquam nulla quo.
                </p>
              </div>

              <div className="w-full max-w-[30rem] min-w-[24rem] rounded-lg">
                <img
                  className="inset-0 object-contain rounded-lg border"
                  src="./Assets/Certificates/bangkit.png"
                  alt="Cert"
                />
              </div>
            </div>

            <div data-aos="fade-up" className="mt-16 text-center">
              {" "}
              <div className="mb-4 text-2xl">23 Google Cloud Badges</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo obcaecati natus a eveniet aut odio.
              </p>
            </div>

            <div data-aos="fade-up" className="">
              <Marquee pauseOnHover>
                <div className="h-36 lg:h-44 flex space-x-1  lg:space-x-2 mt-6 lg:mt-8 me-2">
                  {badgeImages.map((num) => (
                    <img
                      key={num}
                      className="inset-0 lg:w-40 w-36 hover:scale-105 h-max rounded-lg border object-contain cursor-pointer"
                      src={`./Assets/Certificates/Badges/${num}.png`}
                      alt={`Badge ${num}`}
                    />
                  ))}
                </div>
              </Marquee>
            </div>

            <div className="mt-8 lg:mt-10 text-center">
              {" "}
              <div className="mb-4 text-2xl">Other Certificates</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo obcaecati natus a eveniet aut odio.
              </p>
            </div>

            <div className="mx-auto mt-8 pb-16 max-w-screen-xl h-auto flex justify-center items-start flex-wrap gap-4">
              {[
                {
                  src: "./Assets/Certificates/0.png",
                  title: "Operating Systems and You: Becoming a Power User",
                },
                {
                  src: "./Assets/Certificates/1.png",
                  title: "Operating Systems and You: Becoming a Power User",
                },
                {
                  src: "./Assets/Certificates/2.png",
                  title: "The Bits and Bytes of Computer Networking",
                },
                {
                  src: "./Assets/Certificates/3.png",
                  title: "System Administration and IT Infrastructure Services",
                },
                {
                  src: "./Assets/Certificates/4.png",
                  title: "IT Security: Defense against the digital dark arts",
                },
                {
                  src: "./Assets/Certificates/5.png",
                  title: "Technical Support Fundamentals",
                },
                {
                  src: "./Assets/Certificates/6.png",
                  title: "Belajar Dasar Pemrograman Web",
                },
                {
                  src: "./Assets/Certificates/7.png",
                  title: "Menjadi Cloud Engineer",
                },
                {
                  src: "./Assets/Certificates/8.png",
                  title: "Belajar Dasar Pemrograman Javascript",
                },
                {
                  src: "./Assets/Certificates/9.png",
                  title:
                    "Belahar Membuat Aplikasi Back-End untuk Pemula dengan Google Cloud",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-md flex flex-col items-center gap-2 lg:w-[25%] md:w-[30%] w-[45%]"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100} // Adjust delay here (100ms increments)
                >
                  <img
                    src={item.src}
                    alt="Placeholder"
                    className="rounded-md"
                    style={{ aspectRatio: 4 / 3 }}
                  />
                  <div className="text-center">
                    <div className="text-md lg:text-lg mb-1">{item.title}</div>
                    <p className="text-gray-600"></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
