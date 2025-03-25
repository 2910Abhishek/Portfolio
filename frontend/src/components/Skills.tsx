export default function Skills() {
    return (
      <section className="p-10">
        <h1 className="text-4xl font-bold mb-8">My Expertise</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-xl font-bold">Languages</h3>
            <p>Python, C/C++, SQL, Dart</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-xl font-bold">Frameworks & Libraries</h3>
            <p>React, Node.js, Flask, Flutter, TensorFlow, PyTorch</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-xl font-bold">Machine Learning</h3>
            <p>Supervised Learning, CNNs, RNNs, Transformers, LLMs</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-xl font-bold">Data Science</h3>
            <p>Data Analysis, Data Visualization, Feature Engineering</p>
          </div>
        </div>
      </section>
    );
  }