import { ourvalues } from '../constants';
import { Link } from 'react-router-dom';

 
const About = () => {
  return (
    <div className="max-w-7xl mx-auto pt-2 px-6 mt-12">

      {/* page heading */}
      <h2 className="text-4xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        About{" "}
        <span className="bg-gradient-to-r from-blue-300 to-blue-600 text-transparent bg-clip-text">
          AgilityAI
        </span>
      </h2>


      {/* story */}

      <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
              <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                <img
                  className="rounded-xl object-cover"
                  src="https://cdn.pixabay.com/photo/2024/01/24/15/04/ai-8529773_640.jpg"
                  alt="about Us image"
                />
              </div>
              <img
                className="sm:ml-0 ml-auto rounded-xl object-cover h-90"
                src="./story.jpg"
                alt="about Us image"
              />
            </div>
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2 className="text-[#F5FCE1] text-3xl sm:text-4xl lg:text-5xl font-bold font-manrope leading-normal lg:text-start text-center">
                    The Agility AI Story
                  </h2>
                  <p className="text-gray-300 text-base font-normal leading-relaxed lg:text-start text-center">
                    In a world where technology was advancing at an unprecedented pace, a small team of passionate innovators saw a gap—AI was revolutionizing industries, yet many businesses and individuals struggled to harness its true potential. They envisioned a future where AI wasn’t just a buzzword but a driving force for progress, accessible to all.
                  </p>
                  <p className="text-gray-300 text-base font-normal leading-relaxed lg:text-start text-center">
                    With this vision, Agility AI Pvt Ltd was born. What started as a bold idea soon became a movement—helping businesses integrate AI seamlessly while empowering students and professionals with real-world AI skills. From automating business processes to designing custom AI solutions, Agility AI grew into a force of transformation, shaping industries and redefining what’s possible.
                  </p>
                  <p className="text-gray-300 text-base font-normal leading-relaxed lg:text-start text-center">
                    But it wasn’t just about technology; it was about people. The company believed in ethical AI, ensuring that innovation served humanity responsibly. Their AI education programs trained countless individuals, turning curiosity into expertise and ambition into success.
                  </p>
                  <p className="text-gray-300 text-base font-normal leading-relaxed lg:text-start text-center">
                    Today, Agility AI stands as a testament to the power of vision, adaptability, and relentless pursuit of excellence. The journey continues, driven by a simple yet powerful belief—AI is not just about the future; it’s about creating a smarter, more empowered world today.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            {/* Text Section */}
            <div className="max-w-xl">
              <h2 className="text-[#F5FCE1] text-3xl sm:text-4xl lg:text-5xl font-bold font-manrope leading-tight lg:text-start text-center">
                Our Mission
              </h2>
              <p className="text-gray-300 text-lg font-light mt-6 leading-relaxed lg:text-start text-center">
                At Agility AI Pvt Ltd, our mission is to
                harness the power of artificial intelligence to drive innovation, efficiency, and accessibility.
                We envision a world where AI seamlessly integrates with human intelligence to create smarter, faster, and more impactful solutions.
              </p>
              <p className="text-gray-300 text-lg font-light mt-4 leading-relaxed lg:text-start text-center">
                Our commitment extends beyond technology — we believe in
                AI literacy and ethical AI development. We strive to empower businesses with
                cutting-edge AI-driven solutions, while also ensuring that individuals are equipped
                with the knowledge and tools to navigate the AI revolution.
              </p>
              <p className="text-gray-300 text-lg font-light mt-4 leading-relaxed lg:text-start text-center">
                <span className="italic text-[#70FCEF]">"The future belongs to those who prepare for it today".
                </span>
                Our AI-driven solutions are not just about innovation; they are about shaping a
                better, more intelligent future for all.
              </p>
            </div>

            {/* Image Section */}
            <div className="flex justify-center">
              <img
                src="https://mycvcreator.com/administrator/postimages/65cbdec8afb9f9.81658669.jpeg"
                alt="AI Innovation"
                className="w-full max-w-lg md:max-w-2xl lg:max-w-3xl rounded-lg border border-gray-700 hover:scale-105 transition-transform duration-300 shadow-2xl shadow-blue-500 ease-in-out"
              />
            </div>
          </div>
        </div>
      </section>


      {/* our core values */}
      <section className="text-white py-12">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-manrope text-white mb-8">Our Core Values</h2>
          <div className="flex flex-wrap mx-4 justify-center">
            {ourvalues.map((feature, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-6">
                <div className="bg-gray-800 p-6 shadow-lg rounded-lg flex flex-col items-center text-center h-full">
                  <div className="flex h-12 w-12 mb-4 bg-blue-600 text-white justify-center items-center rounded-full">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* How Will AI Redefine the Industries?  */}
      <section className="py-16 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-[#F5FCE1] text-3xl sm:text-4xl lg:text-5xl font-bold font-manrope leading-normal lg:text-start text-center">
              How Will AI Redefine the Industries?
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              Artificial Intelligence is transforming industries by driving automation, enhancing decision-making, and unlocking new possibilities. From predictive analytics in healthcare to AI-powered personalization in retail, businesses are leveraging AI to boost efficiency and innovation. With machine learning, deep learning, and automation, AI is not just reshaping industries—it’s creating smarter, faster, and more adaptive solutions for a rapidly evolving world.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-6 mt-6">
              <div className="p-4 bg-gray-800 rounded-lg text-center">
                <h4 className="text-3xl font-bold text-white">$1.85 T</h4>
                <p className="text-gray-400">AI market(by 2030)</p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg text-center">
                <h4 className="text-3xl font-bold text-white">77% </h4>
                <p className="text-gray-400">Businesses exploring AI</p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg text-center">
                <h4 className="text-3xl font-bold text-white">97 M </h4>
                <p className="text-gray-400">New Job Roles</p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg text-center">
                <h4 className="text-3xl font-bold text-white">85 M</h4>
                <p className="text-gray-400">Job Losses</p>
              </div>
            </div>
          </div>

          {/*clickable Video Section */}
          <Link to="#" rel="noopener noreferrer" className="block">
            <video width="320" height="240" controls className="w-full rounded-lg border border-gray-700 shadow-lg">
              <source src="./transformation.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Link>
        </div>
      </section>




      {/* Future with Agility AI  */}
      <section className="py-16 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <div className="p-6 rounded-lg shadow-lg ">
            <h2 className="text-[#F5FCE1] text-3xl sm:text-4xl lg:text-5xl font-bold font-manrope leading-normal lg:text-start text-center">
              The Future with Agility AI
            </h2>

            <p className="text-gray-300 mt-4 leading-relaxed">
              AI is evolving rapidly, and at Agility AI, we are committed to staying ahead of the curve.
              Our goal is to push the boundaries of innovation, ensuring that businesses, professionals, and industries
              are prepared for an AI-driven future.
            </p>

            <ul className="text-gray-300 space-y-3 mt-4">
              <li>🔹 <strong>Smarter Businesses:</strong> AI-powered automation, data-driven insights, and intelligent decision-making.</li>
              <li>🔹 <strong>Empowered Workforce:</strong> Practical AI training that equips individuals with future-ready skills.</li>
              <li>🔹 <strong>Industry Transformation:</strong> AI solutions that drive efficiency, growth, and sustainability.</li>
            </ul>

            <p className="text-gray-300 mt-6 font-semibold">
              As AI continues to shape the world, Agility AI is here to lead the way.
              The future is intelligent—are you ready to be a part of it? 🚀
            </p>
          </div>

          {/* Video Section */}
          <div className="flex justify-center">
            <video
              className="w-full max-w-xl h-auto rounded-lg shadow-2xl shadow-gray-800 transition-shadow duration-500 ease-in-out"
              autoPlay
              loop
              muted
            >
              <source src="https://cdn.pixabay.com/video/2024/06/06/215500_large.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>


      {/* Our Commitment to Ethical AI */}
      <section className="py-16 text-white ">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">

          {/* Media Section (New Image/Video) */}
          <div className="flex justify-center">
            <img
              src="https://media.istockphoto.com/id/1494849084/photo/ai-ethics-or-ai-law-concept-developing-ai-codes-of-ethics-compliance-regulation-standard.webp?b=1&s=612x612&w=0&k=20&c=EGuSRObJacZfpSeTIWsEgGFN8_ZbMhnm3qBZ4l1LpAc="
              alt="Ethical AI"
              className="w-full max-w-xl rounded-lg border border-gray-700 shadow-2xl shadow-[#F5FCE1]/50 transition-shadow duration-500 ease-in-out"
            />
          </div>

          {/* Text Content */}
          <div className="p-6 rounded-lg shadow-lg ">
            <h2 className="text-[#F5FCE1] text-3xl sm:text-4xl lg:text-5xl font-bold font-manrope leading-normal lg:text-start text-center">
              Our Commitment to Ethical AI
            </h2>

            <p className="text-gray-300 mt-4 leading-relaxed">
              At Agility AI, we are dedicated to developing AI solutions that prioritize ethics, fairness, and responsibility.
              Our approach ensures AI remains a force for good, empowering society without compromising integrity.
            </p>

            <ul className="text-gray-300 space-y-3 mt-4">
              <li>✅ <strong>Fairness:</strong> AI that avoids biases and promotes inclusivity.</li>
              <li>✅ <strong>Transparency:</strong> Explainable AI models that build trust.</li>
              <li>✅ <strong>Accountability:</strong> Responsible development with human oversight.</li>
              <li>✅ <strong>Privacy & Security:</strong> Protecting user data with strict safeguards.</li>
            </ul>

            <p className="text-gray-300 mt-6 font-semibold">
              Ethical AI isn’t just a priority—it’s our responsibility. Join us in shaping an AI-driven future built on trust. 🚀
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
