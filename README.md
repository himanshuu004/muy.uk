## Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Add images to `/public` folder:
   - `logo.png` - Scheme logo
   - `slide1.jpg`, `slide2.jpg`, `slide3.jpg`, `slide4.jpg` - Hero slider images
   - `IAS.png` - Photo for Who We Are section
   - `partners-logo.png` - Partners logo image

3. Start development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
  main.jsx                 # Entry point
  App.jsx                  # Main app component
  routes/
    AppRoutes.jsx         # Routing configuration
  components/
    Header/               # Navigation header
    Hero/                 # Hero slider
    Ticker/               # Announcement ticker
    Card/                 # Reusable card components
    HowItWorks/           # How it works section
    Steps/                # Application steps
    DigitalIntegration/   # Digital tools section
    Partners/             # Partners section
    FAQ/                  # FAQ accordion
    Footer/               # Footer component
    ChatBotPlaceholder/   # Chatbot button
    WhoWeAre/             # Who We Are section
  pages/
    Home/                 # Landing page
    About/                # About page
    Impact/               # Impact page
    Publication/          # Publications page
    Apply/                # Application form
    Gallery/              # Image gallery
    Events/               # Events listing
    Contact/              # Contact form
  styles/
    index.css            # Global styles and Tailwind imports
public/
  logo.png               # Logo (add your image)
  slide1-4.jpg          # Hero images (add your images)
  IAS.png               # IAS photo
  partners-logo.png     # Partners logo
```

## Customization

### Changing Theme Color

The primary theme color is **#FF210D**. To change it:

1. Open `tailwind.config.js`
2. Update the `primary` color values:
```javascript
colors: {
  primary: {
    DEFAULT: '#FF210D',  // Change this
    dark: '#CC1A0A',      // Darker shade
    light: '#FF4D3D',     // Lighter shade
  },
}
```

3. The color is used throughout components via Tailwind classes like `bg-primary`, `text-primary`, etc.

### Replacing Images

1. Add your images to the `/public` folder
2. Ensure filenames match:
   - Logo: `/public/logo.png`
   - Hero slides: `/public/slide1.jpg`, `/public/slide2.jpg`, etc.
   - IAS photo: `/public/IAS.png`
   - Partners logo: `/public/partners-logo.png`

### Updating Content

All content is currently in component files. To update:

- **Text content**: Edit the respective component files in `src/components/` or `src/pages/`
- **Mock data**: Update arrays and objects directly in component files
- **Navigation links**: Edit `src/components/Header/Header.jsx`

## Connecting to Backend

Currently, all data is mock data. To connect to a real backend:

### Step 1: Create API Service

Create `src/api/api.js`:

```javascript
const API_BASE_URL = 'https://your-api-url.com/api'

export const api = {
  // Application endpoints
  submitApplication: async (formData) => {
    const response = await fetch(`${API_BASE_URL}/applications`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    return response.json()
  },

  // Contact form
  sendContactMessage: async (messageData) => {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(messageData),
    })
    return response.json()
  },

  // Fetch data
  getEvents: async () => {
    const response = await fetch(`${API_BASE_URL}/events`)
    return response.json()
  },

  getGallery: async () => {
    const response = await fetch(`${API_BASE_URL}/gallery`)
    return response.json()
  },
}
```

### Step 2: Update Components

Replace mock data with API calls:

**Example in `src/pages/Apply/Apply.jsx`:**
```javascript
import { api } from '../../api/api'

const handleSubmit = async (e) => {
  e.preventDefault()
  try {
    const result = await api.submitApplication(formData)
    alert('Application submitted successfully!')
  } catch (error) {
    alert('Error submitting application')
  }
}
```

**Example in `src/pages/Events/Events.jsx`:**
```javascript
import { useState, useEffect } from 'react'
import { api } from '../../api/api'

function Events() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    api.getEvents().then(setEvents)
  }, [])

  // Use events from API instead of mock data
}
```

### Step 3: Environment Variables

Create `.env` file:
```
VITE_API_BASE_URL=https://your-api-url.com/api
```

Update `src/api/api.js`:
```javascript
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
```

## Build for Production

```bash
npm run build
```

The build output will be in the `dist/` folder.

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **React Router** - Routing
- **Tailwind CSS** - Styling (no UI libraries)
- **Framer Motion** - Animation library

## License

This is a prototype project for government scheme website.

## Notes

- All data is currently mock data stored in component files
- Images need to be added to `/public` folder
- Language selector is UI-only (no i18n implementation)
- Chatbot is a prototype with pre-built questions and responses
- Forms submit to console.log (replace with API calls)

---
#only for private use


**How to Replace Mock API with Real Backend:**

1. Create `src/api/api.js` with fetch/axios functions
2. Replace mock data arrays with `useState` + `useEffect` hooks
3. Update form submissions to call API endpoints
4. Add environment variables for API URLs
5. Handle loading states and error messages

See "Connecting to Backend" section above for detailed steps.
