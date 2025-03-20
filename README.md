# Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases professional information, projects, publications, and activities in a clean and organized manner.

## Features

- 🎨 Modern and responsive design
- 📱 Mobile-friendly interface
- 🚀 Fast page loads with Next.js
- 📊 View tracking and statistics
- 📚 Dynamic content loading from JSON files
- 🔍 Search and filter functionality for projects and publications
- 📝 Blog section with markdown support
- 🔗 Social media integration
- 📄 CV and Resume download options
- 🌐 Multi-language support (English and Vietnamese)

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Data Management**: JSON files
- **Image Optimization**: Next.js Image component
- **Deployment**: Vercel

## Prerequisites

- Node.js 18.x or later
- npm or yarn package manager
- Git

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create the required data files:
   - `public/assets/data/about.json`
   - `public/assets/data/projects.json`
   - `public/assets/data/publications.json`
   - `public/assets/data/activities.json`
   - `public/assets/data/stats.json`

4. Add your profile image:
   - Place your profile image at `public/images/profile.jpg`

5. Add your CV and Resume:
   - Place your CV at `public/assets/cv/Duc_Le_CV-14022025.pdf`
   - Place your Resume at `public/assets/cv/Duc_Le_resume-14022025.pdf`

6. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

7. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio/
├── public/
│   ├── assets/
│   │   ├── data/
│   │   │   ├── about.json
│   │   │   ├── projects.json
│   │   │   ├── publications.json
│   │   │   ├── activities.json
│   │   │   └── stats.json
│   │   └── cv/
│   │       ├── Duc_Le_CV-14022025.pdf
│   │       └── Duc_Le_resume-14022025.pdf
│   └── images/
│       └── profile.jpg
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── blog/
│   │   ├── projects/
│   │   ├── publications/
│   │   ├── social/
│   │   └── api/
│   └── components/
└── README.md
```

## Customization

1. Update personal information in `public/assets/data/about.json`
2. Add your projects in `public/assets/data/projects.json`
3. Add your publications in `public/assets/data/publications.json`
4. Add your activities in `public/assets/data/activities.json`
5. Customize the theme colors in `tailwind.config.js`

## Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy your site

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - email@example.com

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)
