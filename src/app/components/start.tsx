import Head from "next/head";
import Link from "next/link";

export default function Start() {
  return (
    <>
      <Head>
        <title>MedSwift | Your Health, Our Priority</title>
      </Head>

      <div className="relative mt-5 min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 flex items-center justify-center">
        <div className="relative text-center p-10 bg-white shadow-2xl rounded-3xl z-10 w-full max-w-3xl">
          <h1 className="text-5xl font-extrabold text-blue-600 mb-3">MedSwift</h1>
          <h2 className="text-xl text-gray-700 mb-6 font-semibold">
            Redefining Healthcare with Innovation & Care
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Experience **swift, secure, and seamless** medical services at your doorstep.  
            From **medicines to healthcare assistance**, we bring everything you need with reliability and excellence.
          </p>
          
          {/* Button to Navigate to Services Page */}
        <div className="mt-6">
          <Link href="/services">
            <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg">
              Explore Our Services
            </button>
          </Link>
        </div>
        </div>
      </div>
    </>
  );
}
