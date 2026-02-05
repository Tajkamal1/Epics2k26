# EPICS 2026 - Cyber Security Department Event Website

## Overview
EPICS 2026 is a premier technical symposium organized by the Cyber Security Department. This website showcases the event, team members, and provides registration links for various competitions and activities.

## Features
- Responsive design optimized for all device sizes
- Interactive team section with faculty, event coordinators, and student coordinators
- Dynamic event listings with direct Google Form registration links
- Modern UI with animations and gradient effects
- Professional branding with custom logo integration

## Technology Stack
- **Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom animations
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Routing**: React Router DOM

## Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn UI components
│   ├── HeroSection.tsx # Landing page hero section
│   ├── EventsSection.tsx # Event listings
│   ├── TeamSection.tsx # Team member listings
│   ├── Footer.tsx      # Page footer
│   └── Navbar.tsx      # Navigation bar
├── pages/              # Page components
│   ├── Index.tsx       # Main landing page
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── App.tsx             # Main application component
```

## Sections
- **Hero Section**: Features the event title, welcome message, event date, and countdown timer
- **About Section**: Provides information about the event
- **Events Section**: Lists technical and non-technical events with registration links
- **Team Section**: Displays team members by role (HOD, Faculty Coordinators, Event Coordinators, Student Coordinators)
- **Footer**: Contains contact information and developer profiles

## How to Edit Team Member Data

### Adding or Updating Team Members

To modify team member information, follow these steps:

1. **Locate the TeamSection file**:
   ```
   src/components/TeamSection.tsx
   ```

2. **Find the teamMembers array**:
   Look for the constant `teamMembers` near the top of the file, which contains an array of objects representing team members.

3. **Modify an existing team member**:
   Each team member is represented as an object with the following properties:
   ```javascript
   {
     name: 'Full Name',
     position: 'Position Title',
     department: 'Department/Role Description',
     description: 'Brief description of responsibilities',
     icon: IconComponent, // Import from lucide-react
     color: 'color-theme' // primary, secondary, accent, etc.
   }
   ```

4. **Add a new team member**:
   Simply add a new object to the `teamMembers` array with the appropriate properties.

5. **Update the groupedMembers mapping** (if needed):
   If you've added a new position category, update the `groupedMembers` object to ensure the new members appear in the correct section.

6. **Save and refresh**:
   Save the file and refresh your browser to see the changes.

### Current Team Categories
- **HOD Cybersecurity**: Head of Department
- **Faculty Coordinators**: Academic oversight
- **Event Coordinators**: Technical developers and event managers
- **Student Coordinators**: Student support staff

### Example Team Member Object
```javascript
{
  name: 'John Doe',
  position: 'Event Coordinator',
  department: 'Event Management',
  description: 'Managing event logistics and coordinating with industry professionals.',
  icon: Users, // Imported from lucide-react
  color: 'accent'
}
```

## How to Update Contact Information

### Footer Contact Details
1. Navigate to `src/components/Footer.tsx`
2. Locate the contact information section
3. Update the email, phone number, or address as needed

### Developer Profiles
1. In `src/components/Footer.tsx`, find the developers array
2. Modify the entries to update developer information, GitHub profiles, LinkedIn links, or emails

## How to Add/Edit Event Registration Links

### Updating Event Forms
1. Go to `src/components/EventsSection.tsx`
2. Locate the `technicalEvents` or `nonTechnicalEvents` arrays
3. Update the `registerUrl` property with the new Google Form link
4. Modify other properties as needed (title, description, coordinator)

## Environment Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation
1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm test` - Run tests

## Deployment
The site can be deployed to any static hosting service. The build command generates optimized static files in the `dist` directory.

## Browser Compatibility
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)