import Image from 'next/image';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">About Me</h1>
      
      <div className="flex flex-col md:flex-row gap-10 mb-16">
        <div className="md:w-1/3 flex justify-center">
          <div className="relative w-64 h-64 rounded-lg overflow-hidden">
            <Image 
              src="/images/profile-placeholder.jpg" 
              alt="Profile" 
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="md:w-2/3">
          <p className="text-lg mb-4">
            Hello! I'm <strong>Your Name</strong>, a passionate researcher and developer specializing in 
            [your specialization areas]. With a background in [your background], I am dedicated to 
            [your mission or purpose].
          </p>
          <p className="text-lg mb-4">
            My research interests include [research interest 1], [research interest 2], and 
            [research interest 3]. I am particularly excited about the intersection of 
            [field 1] and [field 2], where I believe significant innovations can occur.
          </p>
          <p className="text-lg">
            When I'm not coding or researching, you can find me [hobby 1], [hobby 2], or 
            [hobby 3].
          </p>
        </div>
      </div>

      {/* Education Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Education</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Ph.D. in Computer Science</h3>
            <p className="text-gray-600">University Name, 2020-Present</p>
            <p className="mt-2">Thesis: "Your Thesis Title"</p>
            <p className="mt-1">Advisor: Professor Name</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">M.S. in Computer Science</h3>
            <p className="text-gray-600">University Name, 2018-2020</p>
            <p className="mt-2">Thesis: "Your Thesis Title"</p>
            <p className="mt-1">GPA: 4.0/4.0</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">B.S. in Computer Science</h3>
            <p className="text-gray-600">University Name, 2014-2018</p>
            <p className="mt-2">Minor: Mathematics</p>
            <p className="mt-1">GPA: 3.9/4.0</p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Experience</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Research Assistant</h3>
            <p className="text-gray-600">University Lab Name, 2020-Present</p>
            <ul className="mt-2 list-disc list-inside">
              <li>Conducted research on [research topic]</li>
              <li>Published [number] papers in top-tier conferences and journals</li>
              <li>Developed [technology/system] that improved [metric] by [percentage]</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Software Engineering Intern</h3>
            <p className="text-gray-600">Company Name, Summer 2019</p>
            <ul className="mt-2 list-disc list-inside">
              <li>Developed features for [product/service]</li>
              <li>Collaborated with a team of [number] engineers</li>
              <li>Utilized [technologies/frameworks]</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Teaching Assistant</h3>
            <p className="text-gray-600">University Name, 2018-2020</p>
            <ul className="mt-2 list-disc list-inside">
              <li>Assisted in teaching [course name]</li>
              <li>Held office hours and graded assignments</li>
              <li>Received excellent feedback from students</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
            <div className="flex flex-wrap gap-2">
              {['Python', 'Java', 'C++', 'JavaScript', 'TypeScript'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-gray-100 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Frameworks & Libraries</h3>
            <div className="flex flex-wrap gap-2">
              {['TensorFlow', 'PyTorch', 'React', 'Next.js', 'Node.js'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-gray-100 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Research Areas</h3>
            <div className="flex flex-wrap gap-2">
              {['Machine Learning', 'Computer Vision', 'Natural Language Processing', 'Reinforcement Learning'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-gray-100 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {['Git', 'Docker', 'AWS', 'GCP', 'Linux'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-gray-100 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CV/Resume Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Curriculum Vitae</h2>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <p className="text-lg mb-4">
            You can download my full CV/resume using the button below:
          </p>
          <a 
            href="/resume.pdf"
            download
            className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors"
          >
            Download CV/Resume
          </a>
        </div>
      </section>
    </div>
  );
} 