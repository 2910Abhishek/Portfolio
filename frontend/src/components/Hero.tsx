import Link from "next/link"; // Add this import

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-10 bg-gray-100">
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold">Hey, I’m Abhishek Parmar</h1>
        <h2 className="text-3xl mt-2">I create AI-powered solutions and full-stack applications</h2>
        <p className="mt-4 text-gray-600">
          I’m a B.Tech Computer Science student passionate about AI, machine learning, and full-stack development.
        </p>
        <Link href="/contact" className="mt-6 inline-block px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
          Get in Touch
        </Link>
      </div>
      <div className="md:w-1/3 mt-6 md:mt-0">
        <img
          src="/images/profile.jpg"
          alt="Abhishek Parmar"
          className="w-full rounded-lg shadow-md"
        />
      </div>
    </section>
  );
}