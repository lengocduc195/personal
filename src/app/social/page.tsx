import Link from 'next/link';
import Image from 'next/image';

export default function SocialActivity() {
  // Example social activities data
  const activities = [
    {
      title: "Conference Organizer",
      organization: "International Conference on Machine Learning (ICML)",
      date: "June 2023",
      description: "Served as a workshop organizer for the 'Responsible AI' workshop at ICML 2023. Coordinated speakers, reviewed submissions, and moderated panel discussions.",
      image: "/images/activity-1.jpg",
    },
    {
      title: "Open Source Contributor",
      organization: "TensorFlow",
      date: "2021 - Present",
      description: "Active contributor to the TensorFlow open-source project. Contributed several improvements to the model optimization toolkit and documentation.",
      image: "/images/activity-2.jpg",
    },
    {
      title: "Technical Blog Writer",
      organization: "Medium - Towards Data Science",
      date: "2020 - Present",
      description: "Regular contributor to Towards Data Science publication on Medium. Write articles on machine learning techniques, research developments, and practical tutorials.",
      image: "/images/activity-3.jpg",
    },
    {
      title: "Hackathon Mentor",
      organization: "University Hackathon",
      date: "October 2022",
      description: "Served as a mentor at the University's annual hackathon, providing guidance to student teams on AI and ML projects.",
      image: "/images/activity-4.jpg",
    },
    {
      title: "Guest Lecturer",
      organization: "Local High Schools",
      date: "2022 - Present",
      description: "Volunteer speaker at local high schools to introduce students to AI concepts and career paths in computer science and research.",
      image: "/images/activity-5.jpg",
    },
    {
      title: "Research Journal Reviewer",
      organization: "IEEE Transactions on Pattern Analysis and Machine Intelligence",
      date: "2021 - Present",
      description: "Peer reviewer for submitted papers, providing constructive feedback to authors and contributing to the quality of published research.",
      image: "/images/activity-6.jpg",
    },
  ];

  // Example social media links
  const socialLinks = [
    { platform: "Twitter", url: "https://twitter.com/yourusername", icon: "twitter.svg" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/yourusername", icon: "linkedin.svg" },
    { platform: "GitHub", url: "https://github.com/yourusername", icon: "github.svg" },
    { platform: "Google Scholar", url: "https://scholar.google.com/citations?user=yourid", icon: "scholar.svg" },
    { platform: "Research Gate", url: "https://www.researchgate.net/profile/yourprofile", icon: "researchgate.svg" },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Social Activity</h1>

      {/* Social Media Links */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <span>{link.platform}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Professional Activities */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Professional & Community Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{activity.title}</h3>
                <p className="text-primary font-medium mb-2">{activity.organization}</p>
                <p className="text-gray-600 mb-3">{activity.date}</p>
                <p className="text-gray-700">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form - For future implementation */}
      <section className="mt-16 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Get In Touch</h2>
        <p className="text-center mb-8">
          Feel free to reach out if you're interested in collaboration, speaking engagements, or just want to connect.
        </p>
        <div className="text-center">
          <a 
            href="mailto:your.email@example.com" 
            className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors"
          >
            Email Me
          </a>
        </div>
      </section>
    </div>
  );
} 