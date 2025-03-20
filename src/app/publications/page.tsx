import Link from 'next/link';

export default function Publications() {
  // Example publication data
  const publications = [
    {
      id: 1,
      title: "Deep Learning Approaches for Medical Image Segmentation",
      authors: ["Your Name", "Co-author One", "Co-author Two"],
      venue: "IEEE Transactions on Medical Imaging",
      year: 2023,
      abstract: "This paper presents novel deep learning approaches for medical image segmentation, focusing on MRI and CT images. We propose a new architecture that combines U-Net with attention mechanisms to improve segmentation accuracy in complex anatomical structures.",
      tags: ["Deep Learning", "Medical Imaging", "Image Segmentation"],
      doi: "10.1109/TMI.2023.1234567",
      link: "https://doi.org/10.1109/TMI.2023.1234567"
    },
    {
      id: 2,
      title: "Efficient Transformers for Natural Language Processing Tasks",
      authors: ["Co-author Three", "Your Name", "Co-author Four"],
      venue: "ACL 2022",
      year: 2022,
      abstract: "We introduce a more efficient transformer architecture for natural language processing tasks that reduces computational complexity while maintaining performance on benchmark datasets. Our approach modifies the self-attention mechanism to focus on local context augmented with global information.",
      tags: ["NLP", "Transformers", "Efficient ML"],
      doi: "10.18653/v1/2022.acl-long.123",
      link: "https://aclanthology.org/2022.acl-long.123/"
    },
    {
      id: 3,
      title: "Explainable AI for Clinical Decision Support Systems",
      authors: ["Your Name", "Co-author Five"],
      venue: "Nature Machine Intelligence",
      year: 2022,
      abstract: "This paper addresses the challenge of making clinical decision support systems based on deep learning more interpretable to healthcare professionals. We propose a framework that combines gradient-based attribution methods with concept-based explanations to provide meaningful insights into model decisions.",
      tags: ["Explainable AI", "Healthcare", "Clinical Decision Support"],
      doi: "10.1038/s42256-022-00123-5",
      link: "https://doi.org/10.1038/s42256-022-00123-5"
    },
    {
      id: 4,
      title: "Federated Learning for Privacy-Preserving Analytics in IoT Environments",
      authors: ["Co-author Six", "Your Name", "Co-author Seven", "Co-author Eight"],
      venue: "IEEE Internet of Things Journal",
      year: 2021,
      abstract: "We present a federated learning framework for IoT environments that enables collaborative model training while preserving data privacy. Our approach adapts to heterogeneous devices with varying computational capabilities and addresses challenges related to communication efficiency and model aggregation.",
      tags: ["Federated Learning", "IoT", "Privacy"],
      doi: "10.1109/JIOT.2021.9876543",
      link: "https://doi.org/10.1109/JIOT.2021.9876543"
    },
    {
      id: 5,
      title: "Reinforcement Learning for Adaptive Resource Allocation in Cloud Computing",
      authors: ["Your Name", "Co-author Nine"],
      venue: "ICML 2021",
      year: 2021,
      abstract: "This paper explores the use of reinforcement learning techniques for dynamic resource allocation in cloud computing environments. We develop a multi-agent deep reinforcement learning approach that optimizes resource utilization while meeting service level agreements across heterogeneous workloads.",
      tags: ["Reinforcement Learning", "Cloud Computing", "Resource Allocation"],
      doi: "10.5555/3546258.3546302",
      link: "https://proceedings.mlr.press/v139/yourname21a.html"
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Publications</h1>
      <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        My research publications in peer-reviewed journals and conferences, covering topics in machine learning, computer vision, and more.
      </p>
      
      <div className="space-y-8">
        {publications.map((pub) => (
          <Link href={`/publications/${pub.id}`} key={pub.id} className="block">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-wrap gap-2 mb-3">
                {pub.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-semibold mb-2">{pub.title}</h3>
              <p className="text-gray-700 mb-2">
                {pub.authors.join(', ')}
              </p>
              <p className="text-gray-600 mb-4">
                <span className="font-medium">{pub.venue}</span>, {pub.year}
              </p>
              <p className="text-gray-700 mb-4 line-clamp-3">
                {pub.abstract}
              </p>
              <div className="flex justify-between items-center">
                <a 
                  href={pub.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  DOI: {pub.doi}
                </a>
                <span className="text-primary font-medium">View details &rarr;</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 