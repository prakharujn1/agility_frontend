import HeroSection from "../components/UI/HeroSection";
import { CheckCircle } from "lucide-react";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { industries } from "../constants";

const Home = () => {
  return (
    <>
      <HeroSection />
      {/* 1st section  */}
      <section className="py-24 text-white relative xl:mr-0 lg:mr-5 mr-0">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
            {/*Text Content */}
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                  <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                    <h2 className="text-[#F5FCE1] text-3xl sm:text-4xl lg:text-5xl font-bold font-manrope leading-normal lg:text-start text-center">
                      Who we are?
                    </h2>
                    <p className="text-gray-300 text-base font-normal leading-relaxed lg:text-start text-center">
                      At Agility AI Pvt Ltd, we are shaping the future by blending artificial intelligence with real-world applications. Our vision is to make AI an essential part of businesses while equipping individuals with the knowledge and skills to thrive in an AI-powered world. We believe that AI is not just a tool—it’s a catalyst for transformation, efficiency, and limitless possibilities.
                    </p>
                    <p className="text-gray-300 text-base font-normal leading-relaxed lg:text-start text-center">
                      We are a passionate team of AI experts, educators, and industry professionals dedicated to bridging the gap between AI technology and its practical applications. Whether it's helping businesses integrate AI-driven automation or providing hands-on training to future AI leaders, we are committed to driving meaningful change.
                    </p>
                    <p className="text-gray-300 text-base font-normal leading-relaxed lg:text-start text-center">
                      From startups to enterprises, we empower organizations to harness AI for smarter decision-making, operational efficiency, and innovation. Through cutting-edge research, tailored AI solutions, and world-class training programs, we strive to make AI accessible, ethical, and impactful for everyone. The future is AI-driven, and with Agility AI, you’re always ahead of the curve.
                    </p>
                  </div>
                </div>

                {/* Achievements */}
                <div className="w-full flex-col justify-center items-start gap-6 flex">
                  <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    {/* <div className="w-full h-full p-3.5 rounded-xl border border-gray-500 hover:border-[#F5FCE1] transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex bg-gray-800">
                      <h4 className="text-blue-400 text-2xl font-bold font-manrope leading-9">33+ Years</h4>
                      <p className="text-gray-300 text-base font-normal leading-relaxed">
                        Influencing Digital Landscapes Together
                      </p>
                    </div>
                    <div className="w-full h-full p-3.5 rounded-xl border border-gray-500 hover:border-[#F5FCE1] transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex bg-gray-800">
                      <h4 className="text-blue-400 text-2xl font-bold font-manrope leading-9">125+ Projects</h4>
                      <p className="text-gray-300 text-base font-normal leading-relaxed">
                        Excellence Achieved Through Success
                      </p>
                    </div>
                  </div>

                  <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    <div className="w-full p-3.5 rounded-xl border border-gray-500 hover:border-[#F5FCE1] transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex bg-gray-800">
                      <h4 className="text-blue-400 text-2xl font-bold font-manrope leading-9">26+ Awards</h4>
                      <p className="text-gray-300 text-base font-normal leading-relaxed">
                        Our Dedication to Innovation Wins Understanding
                      </p>
                    </div>
                    <div className="w-full h-full p-3.5 rounded-xl border border-gray-500 hover:border-[#F5FCE1] transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex bg-gray-800">
                      <h4 className="text-blue-400 text-2xl font-bold font-manrope leading-9">99% Happy Clients</h4>
                      <p className="text-gray-300 text-base font-normal leading-relaxed">
                        Mirrors our Focus on Client Satisfaction.
                      </p>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:justify-start justify-center items-start flex">
              <div className="sm:w-[564px] w-full sm:h-[646px] h-full bg-gray-600 rounded-3xl border border-gray-700 relative">
                <img
                  className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                  src="./about.png"
                  alt="About Us"
                />
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* 4th section  */}
      <section className="py-16 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Section */}
          <div className="relative w-full h-[300px] lg:h-[400px]">
            <video
              className="w-full h-full object-cover rounded-lg shadow-lg"
              autoPlay
              loop
              muted
            >
              <source src="https://videos.pexels.com/video-files/6963744/6963744-sd_640_360_25fps.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-[#F5FCE1] text-3xl sm:text-4xl lg:text-5xl font-bold font-manrope leading-normal lg:text-start text-center">
              Our Impact
            </h2>
            <p className="text-gray-300 text-lg mt-4 mb-6 leading-relaxed">
              From startups to enterprises, our AI-powered solutions optimize operations, enhance decision-making, and drive scalable growth. Our training programs empower individuals with industry-ready AI skills for the future.
            </p>

            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              At Agility AI, we don’t just create technology—we redefine intelligence. We are :
            </p>

            <div className="mt-4 space-y-4">
              <div className="flex gap-3">
                <span className="text-green-400 text-2xl">🔹</span>
                <p className="text-gray-300 text-lg">
                  <strong>Empowering Businesses:</strong> Integrating AI for automation, efficiency, and innovation.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-blue-400 text-2xl">🔹</span>
                <p className="text-gray-300 text-lg">
                  <strong>Bridging the AI Skill Gap:</strong> Providing hands-on AI training for all expertise levels.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-yellow-400 text-2xl">🔹</span>
                <p className="text-gray-300 text-lg">
                  <strong>Shaping the Future:</strong> Developing ethical AI solutions that create positive societal change.
                </p>
              </div>
            </div>

            {/* Stats Section */}
            {/* <div className="grid grid-cols-2 gap-6 mt-6">
              <div className="p-4 bg-gray-800 rounded-lg text-center">
                <h4 className="text-3xl font-bold text-white">33+</h4>
                <p className="text-gray-400">Years of Experience</p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg text-center">
                <h4 className="text-3xl font-bold text-white">125+</h4>
                <p className="text-gray-400">Successful Projects</p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg text-center">
                <h4 className="text-3xl font-bold text-white">26</h4>
                <p className="text-gray-400">Industry Awards</p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg text-center">
                <h4 className="text-3xl font-bold text-white">99%</h4>
                <p className="text-gray-400">Client Satisfaction</p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* why agility ai */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">

            {/* Text Section */}
            <div className="max-w-lg">
              <h2 className="bg-clip-text text-4xl sm:text-5xl font-bold font-manrope leading-normal lg:text-start text-center">
                Why choose us?
              </h2>

              <p className="text-gray-300 text-lg mt-4 leading-relaxed lg:text-start text-center">
                We combine cutting-edge AI expertise with hands-on learning, ethical practices, and a future-ready approach to ensure industry success.
              </p>

              <div className="mt-6 space-y-4">
                {[
                  { color: "text-green-400", text: "Cutting-edge AI Expertise: Tailored solutions for industry-specific needs." },
                  { color: "text-blue-400", text: "Hands-on Learning: Real-world AI applications for practical experience." },
                  { color: "text-yellow-400", text: "End-to-End AI Solutions: From strategy and development to consulting and education." },
                  { color: "text-purple-400", text: "Ethical & Responsible AI: Focus on fairness, transparency, and accountability." },
                  { color: "text-green-400", text: "Future-Ready Innovation: Continuous learning to stay ahead in AI advancements." }
                ].map((item, index) => (
                  <div key={index} className="flex gap-2">
                    <span className={`${item.color} text-2xl`}>✅</span>
                    <p className="text-gray-300 text-lg"><strong>{item.text.split(":")[0]}:</strong>{item.text.split(":")[1]}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Section */}
            <div className="mt-8 md:mt-0">
              <img
                src="https://plus.unsplash.com/premium_photo-1661329955912-ebc4279f3b21?w=800&auto=format&fit=crop&q=60"
                alt="AI Innovation"
                className="w-full md:h-[450px] object-cover rounded-lg shadow-lg border border-gray-700 hover:scale-105 transition-all duration-300"
              />
            </div>

          </div>
        </div>
      </section>



      <section className="py-16 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Industries We Impact</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <div key={index} className="flex items-center gap-4 p-4 border border-gray-700 rounded-lg bg-gray-800 hover:scale-105 transition-transform">
                <CheckCircle className={`${industry.color} text-3xl`} />
                <div>
                  <h3 className="text-xl font-semibold">{industry.name}</h3>
                  <p className="text-gray-400">{industry.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      <section className="relative py-20 text-white text-center overflow-hidden">
        {/* Animated Background Glow */}
        <div className="absolute inset-0 opacity-10 blur-3xl"></div>

        <div className="relative container mx-auto px-6">
          <Sparkles className="mx-auto text-yellow-400 text-6xl animate-pulse mb-4" />

          <h2 className="text-4xl font-bold bg-clip-text text-white ">
            Join the AI Revolution
          </h2>

          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed">
            <span className="italic">"The best way to predict the future is to create it."</span>
            AI is not just a trend—it is the backbone of tomorrow. At{" "}
            <span className="text-blue-400 font-semibold">Agility AI Pvt Ltd</span>, we believe in harnessing
            the power of artificial intelligence to drive innovation, efficiency, and growth.
            <br /><br />
            Whether you're a business aiming to optimize operations or an individual striving to master AI,
            we provide the knowledge, tools, and real-world expertise to help you thrive in an AI-powered world.
            <span className="block mt-4 text-blue-400 font-semibold">
              "Opportunities don't happen. You create them." — Let AI be your key to unlocking the future.
            </span>
          </p>

          {/* Call to Action */}
          <div className="mt-8">
            <Link
              to ="/contact"  onClick={() => window.scrollTo(0, 0)}
              className="inline-block px-8 py-3 text-lg font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 transition-all duration-300 shadow-lg transform hover:scale-105"
            >
              Get Started 🚀
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

