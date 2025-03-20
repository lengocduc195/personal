/**
 * This file contains placeholder data for the website.
 * In a real application, this data would come from a database or API.
 */

// Placeholder project data
export const projects = [
  {
    id: 1,
    title: "AI-Powered Image Recognition",
    description: "A deep learning model for recognizing objects in images with high accuracy using convolutional neural networks.",
    fullDescription: `
      This project implements a state-of-the-art convolutional neural network for image recognition tasks. The model is trained on a large dataset of labeled images and can recognize objects across multiple categories with high accuracy.
      
      The architecture uses a combination of convolutional layers, pooling layers, and fully connected layers to extract features from input images and classify them into predefined categories. Transfer learning techniques were applied by fine-tuning a pre-trained model on custom datasets to improve performance.
      
      Key features of this project include:
      - Real-time object detection with bounding boxes
      - Multi-class classification with confidence scores
      - Web interface for uploading and processing images
      - REST API for integration with other applications
    `,
    image: "/images/project-1.jpg",
    tags: ["Deep Learning", "Computer Vision", "TensorFlow"],
    demoUrl: "https://demo-url-1.com",
    githubUrl: "https://github.com/yourusername/image-recognition",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Flask"],
    date: "January 2023",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 2,
    title: "Recommendation System",
    description: "A personalized recommendation system for products using collaborative filtering and content-based approaches.",
    fullDescription: `
      This recommendation system combines collaborative filtering and content-based approaches to provide personalized product recommendations to users. The system analyzes user behavior, preferences, and product attributes to suggest items that users are likely to be interested in.
      
      The collaborative filtering component identifies patterns in user behavior and recommends products based on the preferences of similar users. The content-based component analyzes product attributes and recommends items similar to those the user has shown interest in previously.
      
      Key features of this project include:
      - Hybrid recommendation approach (collaborative + content-based)
      - User similarity metrics based on purchase history
      - Product attribute analysis using NLP techniques
      - A/B testing framework for recommendation strategies
      - Integration with e-commerce platforms
    `,
    image: "/images/project-2.jpg",
    tags: ["Machine Learning", "Recommendation Systems", "Python"],
    demoUrl: "https://demo-url-2.com",
    githubUrl: "https://github.com/yourusername/recommendation-system",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Flask", "PostgreSQL"],
    date: "March 2023",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 3,
    title: "Natural Language Processing Toolkit",
    description: "A comprehensive toolkit for various NLP tasks such as text classification, named entity recognition, and sentiment analysis.",
    fullDescription: `
      This NLP toolkit provides a unified interface for various natural language processing tasks. It integrates state-of-the-art transformer models with easy-to-use APIs for text classification, named entity recognition, sentiment analysis, and more.
      
      The toolkit is designed to be modular and extensible, allowing researchers and developers to easily incorporate new models and techniques. It includes pre-trained models for common tasks as well as utilities for fine-tuning on custom datasets.
      
      Key features of this project include:
      - Unified interface for multiple NLP tasks
      - Support for transformer-based models (BERT, RoBERTa, T5, etc.)
      - Data preprocessing utilities for text data
      - Evaluation metrics and visualization tools
      - Deployment options for production environments
    `,
    image: "/images/project-3.jpg",
    tags: ["NLP", "PyTorch", "Transformers"],
    demoUrl: "https://demo-url-3.com",
    githubUrl: "https://github.com/yourusername/nlp-toolkit",
    technologies: ["Python", "PyTorch", "Hugging Face Transformers", "NLTK", "FastAPI"],
    date: "June 2023",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
];

// Placeholder publication data
export const publications = [
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
  {
    id: 2,
    title: "Efficient Transformers for Natural Language Processing Tasks",
    authors: ["Co-author Three", "Your Name", "Co-author Four"],
    venue: "ACL 2022",
    year: 2022,
    abstract: "We introduce a more efficient transformer architecture for natural language processing tasks that reduces computational complexity while maintaining performance on benchmark datasets. Our approach modifies the self-attention mechanism to focus on local context augmented with global information.",
    tags: ["NLP", "Transformers", "Efficient ML"],
    doi: "10.18653/v1/2022.acl-long.123",
    link: "https://aclanthology.org/2022.acl-long.123/",
    citationCount: 45,
    citationFormat: `@inproceedings{coauthor2022efficient,
  title={Efficient Transformers for Natural Language Processing Tasks},
  author={Co-author Three and Your Name and Co-author Four},
  booktitle={Proceedings of the 60th Annual Meeting of the Association for Computational Linguistics},
  pages={1234--1245},
  year={2022}
}`,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
];

// Placeholder social activities data
export const activities = [
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
]; 