const Skills = () => {
  const skills = [
    {
      icon: "🧠",
      title: "AI & Machine Learning",
      description: "I develop intelligent systems using supervised learning, deep learning (CNNs, RNNs, Transformers), and LLMs to solve real-world problems.",
    },
    {
      icon: "📱",
      title: "Flutter Development",
      description: "I create cross-platform mobile apps with Flutter, delivering fast, beautiful, and responsive user experiences for iOS and Android.",
    },
    {
      icon: "📊",
      title: "Data Science",
      description: "I analyze and visualize data to uncover insights, using tools like Python, Pandas, and Matplotlib for feature engineering and decision-making.",
    },
    {
      icon: "💻",
      title: "Full-Stack Development",
      description: "I build end-to-end applications with React, Node.js, and Flask, integrating AI models and mobile apps into seamless solutions.",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Expertise</h2>
        <p className="text-gray-600 text-lg">
          Specialized skills in AI, mobile development, and full-stack solutions
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-4xl mb-6">{skill.icon}</div>
            <h3 className="text-xl font-bold mb-4">{skill.title}</h3>
            <p className="text-gray-600 leading-relaxed">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;