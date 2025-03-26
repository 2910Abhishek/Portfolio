const Skills = () => {
  const skills = [
    {
      icon: "🎯",
      title: "Strategy & Direction",
      description: "Experienced in developing AI strategies and technical roadmaps for complex projects.",
    },
    {
      icon: "🧠",
      title: "AI & Machine Learning",
      description: "Proficient in developing and deploying machine learning models and AI solutions.",
    },
    {
      icon: "💻",
      title: "Full Stack Development",
      description: "Expert in building modern web applications using Next.js, React, and Node.js.",
    },
    {
      icon: "🔧",
      title: "DevOps & Cloud",
      description: "Skilled in deploying and managing applications using cloud platforms and DevOps practices.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h3 className="text-gray-600 mb-2">My Skills</h3>
          <h2 className="text-4xl font-bold">My Expertise</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;