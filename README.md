# Personal Portfolio Website

A modern portfolio website built with Next.js and Tailwind CSS to showcase your projects, publications, and professional information.

## Features

- **Responsive Design**: Looks great on all devices from mobile to desktop
- **Navigation Bar**: Easy navigation between different sections of the portfolio
- **About Page**: Section for personal information, education, experience, and skills
- **Projects Page**: Showcase your projects with detailed individual project pages
- **Publications Page**: Display your research publications with detailed individual publication pages
- **Social Activity Page**: Highlight your community involvement and social media presence
- **Modern UI**: Clean, professional design with Tailwind CSS
- **Tag System**: Each project and publication has tags to categorize and highlight topics and technologies

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/personal-portfolio.git
   cd personal-portfolio
   ```

2. Install the dependencies:
   ```
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

### Personal Information

1. Update your personal information in the following files:
   - `src/app/page.tsx` - Home page content
   - `src/app/about/page.tsx` - About page content
   - `src/app/social/page.tsx` - Social media links

2. Replace placeholder images in `public/images/` with your own images.

### Projects

1. Add your projects to the projects array in `src/data/placeholder-data.ts`.
2. For each project, provide:
   - Title
   - Description
   - Full description
   - Tags/categories
   - Image
   - Links to demo, GitHub repository, etc.

### Publications

1. Add your publications to the publications array in `src/data/placeholder-data.ts`.
2. For each publication, provide:
   - Title
   - Authors
   - Venue and year
   - Abstract
   - Full text
   - Tags/categories
   - DOI and links
   - Citation format

## Deployment

This portfolio is designed to be easily deployed to GitHub Pages or any other hosting service.

### GitHub Pages Deployment

1. Create a repository on GitHub.
2. Push your code to the repository.
3. Set up GitHub Pages in the repository settings.
4. Configure the build and deployment settings for Next.js.

## Technologies Used

- Next.js - React framework for building the application
- Tailwind CSS - Utility-first CSS framework for styling
- TypeScript - Type-safe JavaScript

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS team for the styling utilities
