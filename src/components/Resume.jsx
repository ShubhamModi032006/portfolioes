import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { ArrowLeft } from "lucide-react"; // Import icon
import { useTheme } from "./ThemeProvider"; // Import useTheme

const Resume = () => {
  const navigate = useNavigate(); // Hook for navigation
  const { theme } = useTheme(); // Hook for theme

  return (
    <div className="flex flex-col items-center h-screen bg-gray-100 dark:bg-gray-900 evening:bg-evening-background text-gray-900 dark:text-white evening:text-evening-primary p-4 w-full overflow-hidden">
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 left-4 sm:left-6 flex items-center bg-gray-200 dark:bg-gray-800 evening:bg-evening-secondary hover:bg-gray-300 dark:hover:bg-gray-700 evening:hover:bg-evening-primary px-3 sm:px-4 py-2 rounded-lg transition duration-300 text-gray-900 dark:text-white evening:text-evening-background z-10"
      >
        <ArrowLeft className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
        Back to Portfolio
      </button>

      {/* Resume Heading */}
      <h1 className="text-2xl sm:text-3xl font-bold mt-12 mb-2 text-gray-900 dark:text-white evening:text-evening-primary">My Resume</h1>

      {/* Resume PDF Embed */}
      <iframe
        src="https://drive.google.com/file/d/1Y3xLQZPY8RYeQ_CNiWjOWVmiCN2_i7Mu/preview"
        className="w-full max-w-4xl flex-1 border rounded-lg shadow-lg"
        title="Resume"
      ></iframe>

      {/* Download Button */}
      <a
        href="https://drive.google.com/file/d/1Y3xLQZPY8RYeQ_CNiWjOWVmiCN2_i7Mu/view?usp=sharing"
        download="https://drive.google.com/file/d/1Y3xLQZPY8RYeQ_CNiWjOWVmiCN2_i7Mu/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition duration-300 shadow-md mb-2"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
