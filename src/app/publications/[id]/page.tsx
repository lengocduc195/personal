import Link from 'next/link';
import { notFound } from 'next/navigation';

// This would typically come from a database or API
const publications = [
  {
    id: 1,
    title: "Deep Learning Approaches for Medical Image Segmentation",
    authors: ["Your Name", "Co-author One", "Co-author Two"],
    venue: "IEEE Transactions on Medical Imaging",
    year: 2023,
    abstract: "This paper presents novel deep learning approaches for medical image segmentation, focusing on MRI and CT images. We propose a new architecture that combines U-Net with attention mechanisms to improve segmentation accuracy in complex anatomical structures.",
    fullText: `
      Abstract:
      
      This paper presents novel deep learning approaches for medical image segmentation, focusing on MRI and CT images. We propose a new architecture that combines U-Net with attention mechanisms to improve segmentation accuracy in complex anatomical structures.
      
      Introduction:
      
      Medical image segmentation is a crucial step in many clinical workflows, including diagnosis, treatment planning, and follow-up assessment. Traditional segmentation methods often struggle with the complexity and variability of anatomical structures in medical images. Deep learning approaches have shown promising results in this domain, with convolutional neural networks (CNNs) becoming the dominant methodology.
      
      In this work, we address the following challenges in medical image segmentation:
      1. Limited availability of labeled data in the medical domain
      2. Class imbalance issues due to small regions of interest
      3. Complexity of anatomical structures requiring multi-scale contextual information
      
      Our main contributions include:
      1. A novel attention-augmented U-Net architecture that selectively emphasizes relevant features at different scales
      2. A curriculum learning strategy for training with limited labeled data
      3. Extensive evaluation on public datasets for brain MRI, abdominal CT, and cardiac MRI segmentation
      
      Methodology:
      
      Our proposed architecture builds upon the U-Net framework, which consists of an encoder path that captures context and a decoder path that enables precise localization. We introduce attention modules at each level of the network to weigh the importance of features based on their relevance to the segmentation task.
      
      The attention module uses a combination of channel and spatial attention mechanisms. The channel attention focuses on "what" is meaningful, while the spatial attention focuses on "where" is important. This dual attention approach allows the network to selectively emphasize or suppress features in both dimensions.
      
      For training with limited data, we employ a curriculum learning strategy that progressively increases the difficulty of the training samples. We start with easier cases (e.g., larger and more distinct structures) and gradually introduce more challenging cases (e.g., smaller and more ambiguous structures).
      
      Results:
      
      We evaluated our approach on three public datasets: BraTS for brain tumor segmentation, CHAOS for abdominal organ segmentation, and ACDC for cardiac segmentation. Our method achieved state-of-the-art performance on all three datasets, with average Dice coefficients of 0.89, 0.92, and 0.91, respectively.
      
      Ablation studies confirmed the contribution of each component of our architecture. The attention modules improved the Dice coefficient by 3-5% across all datasets, while the curriculum learning strategy provided an additional 2-3% improvement.
      
      Discussion:
      
      The experimental results demonstrate that our approach effectively addresses the challenges of medical image segmentation. The attention mechanisms allow the network to focus on relevant features while suppressing noise, which is particularly important in medical images where subtle differences can be clinically significant.
      
      The curriculum learning strategy proves effective in scenarios with limited labeled data, which is a common constraint in medical applications. By gradually increasing the difficulty of training examples, the network learns more robust representations.
      
      Future work will explore the integration of uncertainty estimation into our framework to provide confidence measures for segmentation results, which is crucial for clinical decision support systems.
      
      Conclusion:
      
      We presented a novel deep learning approach for medical image segmentation that combines attention mechanisms with curriculum learning. Our method achieves state-of-the-art performance on multiple public datasets and demonstrates robustness in scenarios with limited labeled data. The proposed architecture has potential applications in various clinical workflows, from diagnosis to treatment planning and monitoring.
    `,
    tags: ["Deep Learning", "Medical Imaging", "Image Segmentation"],
    doi: "10.1109/TMI.2023.1234567",
    link: "https://doi.org/10.1109/TMI.2023.1234567",
    citationCount: 23,
    citationFormat: `@article{yourname2023deep,
  title={Deep Learning Approaches for Medical Image Segmentation},
  author={Your Name and Co-author One and Co-author Two},
  journal={IEEE Transactions on Medical Imaging},
  volume={42},
  number={8},
  pages={1918--1931},
  year={2023},
  publisher={IEEE}
}`,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  // Add more publications...
];

export default function PublicationDetail({ params }: { params: { id: string } }) {
  const publication = publications.find(p => p.id === parseInt(params.id));
  
  if (!publication) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Link href="/publications" className="text-primary hover:underline">
          &larr; Back to Publications
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {publication.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h1 className="text-3xl font-bold mb-4">{publication.title}</h1>
        
        <p className="text-lg text-gray-700 mb-2">
          {publication.authors.join(', ')}
        </p>
        
        <p className="text-gray-600 mb-6">
          <span className="font-medium">{publication.venue}</span>, {publication.year}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <a 
            href={publication.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            DOI: {publication.doi}
          </a>
          <p className="text-gray-600">
            Citations: {publication.citationCount}
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Abstract</h2>
          <p className="text-gray-700 leading-relaxed">
            {publication.abstract}
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Full Text</h2>
          <div className="prose max-w-none">
            {publication.fullText.split('\n').map((paragraph, idx) => (
              <p key={idx} className="mb-4 text-gray-700 leading-relaxed">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </div>
      </div>
      
      {publication.videoUrl && (
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-4">Presentation Video</h2>
          <div className="relative pt-[56.25%] w-full">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-md"
              src={publication.videoUrl}
              title="Publication Presentation"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4">Cite This Publication</h2>
        <div className="bg-gray-100 p-4 rounded-md">
          <pre className="whitespace-pre-wrap font-mono text-sm">
            {publication.citationFormat}
          </pre>
        </div>
        <button 
          className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          onClick={() => {
            navigator.clipboard.writeText(publication.citationFormat);
            // In a real application, you would add a toast notification or some feedback
          }}
        >
          Copy Citation
        </button>
      </div>
    </div>
  );
} 