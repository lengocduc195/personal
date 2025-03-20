import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between gap-10 py-10">
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
            Hello, I'm <span className="text-primary">Your Name</span>
          </h1>
          <p className="text-xl text-gray-600">
            Welcome to my portfolio. I'm passionate about creating innovative solutions and sharing knowledge through research.
          </p>
          <div className="flex gap-4">
            <Link 
              href="/about" 
              className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors"
            >
              Learn More
            </Link>
            <Link 
              href="/projects" 
              className="px-6 py-3 border border-primary text-primary font-medium rounded-md hover:bg-primary/10 transition-colors"
            >
              View Projects
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary">
            <Image 
              src="/images/profile-placeholder.jpg" 
              alt="Profile" 
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-10">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Link href={`/projects/project-${i}`} key={i}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 w-full">
                  <Image
                    src={`/images/project-${i}.jpg`}
                    alt={`Project ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                      React
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                      AI
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Project Title {i}</h3>
                  <p className="text-gray-600">
                    A brief description of the project, its goals, and the technologies used.
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/projects"
            className="px-6 py-3 border border-primary text-primary font-medium rounded-md hover:bg-primary/10 transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </section>

      {/* Recent Publications Section */}
      <section className="py-10">
        <h2 className="text-3xl font-bold text-center mb-10">Recent Publications</h2>
        <div className="space-y-6">
          {[1, 2].map((i) => (
            <Link href={`/publications/publication-${i}`} key={i}>
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                    Machine Learning
                  </span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                    Computer Vision
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Publication Title {i}</h3>
                <p className="text-gray-600 mb-4">
                  Authors: Your Name, Co-author One, Co-author Two
                </p>
                <p className="text-gray-600">
                  Journal/Conference Name, Year
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/publications"
            className="px-6 py-3 border border-primary text-primary font-medium rounded-md hover:bg-primary/10 transition-colors"
          >
            View All Publications
          </Link>
        </div>
      </section>
    </div>
  );
}
