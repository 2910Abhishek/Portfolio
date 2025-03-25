export default function About() {
    return (
      <section className="p-10 flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mr-8">
          <img
            src="/images/profile.jpg"
            alt="Abhishek Parmar"
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-2/3">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-gray-600">
            I’m Abhishek Parmar, a B.Tech Computer Science student at Charotar University of Science and Technology (CGPA: 9.67), graduating in May 2026. I’ve interned at Topia Lifesciences and CLUMOSS, where I built APIs and machine learning models to solve real-world problems.
          </p>
          <p className="text-gray-600 mt-4">
            I’ve solved over 400 coding challenges on LeetCode and HackerRank, earned a 5-star coder status in C/C++, and secured a top 8 position in a hackathon by Gateway Group of Companies. I’m passionate about AI, machine learning, and full-stack development.
          </p>
        </div>
      </section>
    );
  }