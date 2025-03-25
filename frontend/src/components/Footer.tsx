export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <p>&copy; 2025 Abhishek Parmar. All rights reserved.</p>
          <div className="space-x-4">
            <a
              href="https://github.com/AbhishekParmar2910"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/abhishekparmar2910"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    );
  }