// pages/index.js
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  const icons=[
    {
        icon:<Image src="/image/pogo.png" alt="logo" layout="fill" objectFit="contain" />,
    },
    {
        icon:<Image src="/image/pogo1.png" alt="logo" layout="fill" objectFit="contain" />,
    },
    {
        icon:<Image src="/image/pogo2.png" alt="logo" layout="fill" objectFit="contain" />,
    },
    {
        icon:<Image src="/image/pogo3.png" alt="logo" layout="fill" objectFit="contain" />,
    },
    {
        icon:<Image src="/image/pogo4.png" alt="logo" layout="fill" objectFit="contain" />,
    },
    {
        icon:<Image src="/image/pogo5.png" alt="logo" layout="fill" objectFit="contain" />,
    },
    {
        icon:<Image src="/image/pogo2.png" alt="logo" layout="fill" objectFit="contain" />,
    },
]
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Nexcent</title>
        <meta name="description" content="Nexcent - Community management platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header/Navbar */}
      <header className="bg-white py-4 px-6 md:px-12">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="relative w-28 h-8">
              {/* <Image src="/image/logodam.png" alt="Nexcent" width="154" height="24" /> */}
              <img
                  src="/image/logodam.png"
                  width={154}
                  height={24}
                  className="w-full h-auto"
                  alt="nexcent"
              />
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-green-500">Home</a>
            <a href="#" className="text-gray-700 hover:text-green-500">Service</a>
            <a href="#" className="text-gray-700 hover:text-green-500">Features</a>
            <a href="#" className="text-gray-700 hover:text-green-500">Product</a>
            <a href="#" className="text-gray-700 hover:text-green-500">Testimonials</a>
            <a href="#" className="text-gray-700 hover:text-green-500">FAQ</a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-green-500 hover:text-green-600">Login</a>
            <a href="#" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Sign Up</a>
          </div>
          
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-6 md:px-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 leading-tight">
              Lessons and insights
              <span className="block text-green-500">from 8 years</span>
            </h1>
            <p className="mt-4 text-gray-600">
              Where to grow your business as a photographer: site or social media?
            </p>
            <button className="mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded">
              Register
            </button>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full h-64 md:h-80 lg:h-96">
              <Image 
                src="/image/Illustration.png" 
                alt="Hero" 
                layout="fill" 
                objectFit="contain" 
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-12 px-6 md:px-12 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">Our Clients</h2>
          <p className="text-gray-600 mb-8">We have been working with some Fortune 500+ clients</p>
          <div className="grid grid-cols-3 md:grid-cols-7 gap-6 justify-items-center items-center">
          {icons.map((item, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all">
              <div className="relative w-16 h-10 md:w-20 md:h-12">
                {item.icon}
              </div>
            </div>
          ))}

          </div>
        </div>
      </section>

      {/* Community Management Section */}
      <section className="py-12 px-6 md:px-12">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Manage your entire community<br />in a single system
          </h2>
          <p className="text-gray-600 mt-4">Who is Nexcent suitable for?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Image src="/image/Icon.png" alt="Membership" width={32} height={32} />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Membership Organizations</h3>
            <p className="text-gray-600 mt-4">
              Our membership management software provides full automation of membership renewals and payments
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Image src="/image/Icon2.png" alt="Association" width={32} height={32} />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">National Associations</h3>
            <p className="text-gray-600 mt-4">
              Our platform helps you run your entire association, including membership, events and communications
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Image src="/image/Icon3.png" alt="Clubs" width={32} height={32} />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Clubs And Groups</h3>
            <p className="text-gray-600 mt-4">
              Our platform helps you run your entire club, including membership, events and communications
            </p>
          </div>
        </div>
      </section>

      {/* Pixelgrade Section */}
      <section className="py-12 px-6 md:px-12 bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center order-2 md:order-1">
            <div className="relative w-full h-64 md:h-96">
              <Image 
                src="/image/Frame.png" 
                alt="Pixelgrade" 
                layout="fill" 
                objectFit="contain" 
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              The unseen of spending three years at Pixelgrade
            </h2>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                Helping a local <br/><span className="text-green-500">business reinvent itself</span>
              </h2>
              <p className="mt-4 text-gray-600">
                We reached here with our hard work and dedication
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-4">
                <Image src="/image/tcon.png" alt="Members" width={32} height={32} />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">2,245,341</h3>
                  <p className="text-gray-600">Members</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Image src="/image/tcon2.png" alt="Clubs" width={32} height={32} />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">46,328</h3>
                  <p className="text-gray-600">Clubs</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Image src="/image/tcon3.png" alt="Event Bookings" width={32} height={32} />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">828,867</h3>
                  <p className="text-gray-600">Event Bookings</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Image src="/image/tcon4.png" alt="Payments" width={32} height={32} />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">1,926,436</h3>
                  <p className="text-gray-600">Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Design Section */}
      <section className="py-12 px-6 md:px-12 bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <div className="relative w-full h-64 md:h-96">
              <Image 
                src="/image/pana.png" 
                alt="Footer Design" 
                layout="fill" 
                objectFit="contain" 
              />
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              How to design your site footer like we did
            </h2>
            <p className="mt-4 text-gray-600">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst.
            </p>
            <button className="mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      {/* <section className="flex py-12 px-6 md:px-[200px] gray-900 bg-[#ebedf0] text-white">
        <div>
          <Image 
                src="/image/image9.png" 
                alt="Footer Design" 
                height="326"
                width="326"
                // layout="fill" 
                // objectFit="contain" 
              />
        </div>
        <div className="container mx-auto text-left">
          <div className="max-w-3xl mx-auto">
            <p className="italic text-lg text-[#717171]">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
            </p>
            <div className="mt-6">
              <p className="font-semibold text-green-500">Tim Smith</p>
              <p className="text-gray-400">British Dragon Boat Racing Association</p>
            </div>
            <div className="mt-10 grid grid-cols-5 md:grid-cols-7 gap-6 justify-items-center items-center">
            {/* <div className="mt-10 flex items-center "> */}
            {/* {icons.slice(0, icons.length - 1).map((item, index) => (
              <div key={index} className="grayscale hover:grayscale-0 transition-all">
                <div className="relative w-16 h-10 md:w-20 md:h-12">
                  {item.icon}
                </div>
              </div>
            ))}
            <div className="col-span-2 flex justify-start">
              <a href="#" className="text-green-400 hover:text-green-300 flex items-center">
                Meet all customers
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          </div>
          
        </div>
      </section> */}

      {/* Testimonial Section */}
<section className="py-12 px-6 md:px-12 lg:px-[200px] bg-[#ebedf0]">
  <div className="container mx-auto flex flex-col md:flex-row gap-8 items-center">
    {/* Left side - Image */}
    <div className="w-full md:w-1/3 flex justify-center">
      <Image 
        src="/image/image9.png" 
        alt="Testimonial" 
        height={326}
        width={326}
        className="object-contain"
      />
    </div>
    
    {/* Right side - Testimonial Content */}
    <div className="w-full md:w-2/3">
      <div className="max-w-3xl">
        <p className="text-[#717171] italic text-base md:text-lg leading-relaxed mb-6">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
        </p>
        
        <div className="mb-8">
          <p className="font-semibold text-[#4CAF4F]">Tim Smith</p>
          <p className="text-gray-500">British Dragon Boat Racing Association</p>
        </div>
        
        <div className="flex flex-wrap md:flex-nowrap items-center gap-5 md:gap-5 ">
          {icons && icons.slice(0, icons.length - 1).map((item, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all">
              <div className="relative w-16 h-8 md:w-20 md:h-10">
                {item.icon}
              </div>
            </div>
          ))}
          
          <div className="m-auto">
            <a href="#" className="text-[#4CAF4F] hover:text-green-600 flex items-center font-medium">
              Meet all customers
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Blog Section */}
      <section className="py-12 px-6 md:px-12">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Caring is the new marketing
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            The Nexcent blog is the best place to read about the latest membership insights, trends and resources. See who's joining the community, read about how our customers are leveraging their memberships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto">
          {/* Blog Card 1 */}
          <div className="bg-white rounded-lg shadow-sm">
            <div className="relative h-48">
              <Image 
                src="/image/1.png" 
                alt="Blog 1" 
                height="368"
                width="568"
                // layout="fill" 
                objectFit="cover"
              />
            </div>
            {/* <div className="p-6 bg-gray-100">
              <h3 className="text-lg font-semibold text-gray-800">
                Creating Streamlined Safeguarding Processes with OneRen
              </h3>
              <a href="#" className="mt-4 inline-flex items-center text-green-500 hover:text-green-600">
                Readmore
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div> */}
          </div>

          {/* Blog Card 2 */}
          <div className="bg-white rounded-lg shadow-sm my-[80px] md:my-[0px]">
            <div className="relative h-48">
              <Image 
                src="/image/2.png" 
                alt="Blog 2"
                height="368"
                width="568"
                // layout="fill"
                objectFit="cover"
              />
            </div>
            {/* <div className="p-6 bg-gray-100">
              <h3 className="text-lg font-semibold text-gray-800">
                What are your safeguarding responsibilities and how can you manage them?
              </h3>
              <a href="#" className="mt-4 inline-flex items-center text-green-500 hover:text-green-600">
                Readmore
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div> */}
          </div>

          {/* Blog Card 3 */}
          <div className="bg-white rounded-lg shadow-sm">
            <div className="relative h-48">
            <Image 
                src="/image/3.png" 
                alt="Blog 2"
                height="368"
                width="568"
                // layout="fill"
                objectFit="cover"
              />
            </div>
            {/* <div className="p-6 bg-gray-100">
              <h3 className="text-lg font-semibold text-gray-800">
                Revamping the Membership Model with Triathlon Australia
              </h3>
              <a href="#" className="mt-4 inline-flex items-center text-green-500 hover:text-green-600">
                Readmore
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div> */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-6 md:px-12 text-center mt-[80px] md:mt-[300px] bg-[#ebedf0]">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Pellentesque suscipit<br/> fringilla libero eu.
          </h2>
          <button className="mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded">
            Get a Demo
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6 md:px-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="relative w-32 h-8">
              {/* <Image 
                src="/image/logodam2.png" 
                alt="Nexcent" 
                width="154" 
                height="24"
              /> */}
              <img
                  src="/image/logodam2.png"
                  width={154}
                  height={24}
                  className="w-full h-auto"
                  alt="nexcent"
              />
            </div>
            <p className="mt-4 text-gray-400">
              Copyright © 2025 Nexcent Ltd.
              <br />
              All rights reserved
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.09-.193-7.715-2.157-10.141-5.126-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.503 14-14v-.617c.961-.689 1.8-1.56 2.46-2.548z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109s.493-1.109 1.1-1.109 1.1.496 1.1 1.109-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.09-.193-7.715-2.157-10.141-5.126-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.503 14-14v-.617c.961-.689 1.8-1.56 2.46-2.548z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Testimonials</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Help center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms of service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Legal</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Status</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Stay up to date</h3>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 bg-gray-800 text-white rounded-l focus:outline-none w-full"
              />
              <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-r">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}