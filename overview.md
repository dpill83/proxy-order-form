# Proxy Order Intake System

## Project Description
The Proxy Order Intake System is a web application designed to facilitate the ordering of custom Magic: The Gathering proxies. It provides a user-friendly interface for searching and adding cards, managing orders, and configuring pricing.

## Features
- **Order Form**:
  - Search for Magic cards using the Scryfall API.
  - Bulk add cards with support for set codes and collector numbers.
  - Preview card images and details.
  - Manage order items with options for quantity and card versions.
  - Configure shipping options (Local Pickup or Ship).
  - Review order summary before checkout.

- **Admin Panel**:
  - Manage orders with status updates (Pending, Processing, Completed, Cancelled).
  - Configure pricing settings, including base price, shipping rate, and volume discounts.
  - Upload card back images for customization.

## Technical Details
- **Frontend**: React, Tailwind CSS, Axios for API requests.
- **Backend**: (Planned) Node.js with Express, MongoDB for data persistence, JWT for authentication, Multer for file uploads, Winston for logging, Socket.IO for real-time updates.
- **Data Storage**: Currently uses browser's `localStorage` for order persistence. Backend integration is planned for future versions.

## Deployment Status
- **Local Development (Frontend)**: Open `index.html` directly in your browser from the project root.
- **Local Development (Backend - currently unused by frontend)**: Run `npm run dev` (requires MongoDB setup and .env file).
- **Public Deployment**: Hosted on GitHub Pages via the `main` branch, serving content from the repository root. Accessible at `https://dpill83.github.io/proxy-order-form/`.

## File Structure (Current)
```
/
├── index.html          # Main order form interface
├── admin.html          # Admin panel interface
├── js/
│   ├── shared.js       # Shared utilities
│   └── admin.js        # Admin-specific JS (if exists)
├── css/
├── images/
│   └── backs/          # Card back images
├── .nojekyll           # Disables Jekyll processing for GitHub Pages
├── package.json        # Node.js dependencies and scripts
├── server.js           # Node.js Express server (backend - currently unused by frontend)
├── src/                # Backend source code (planned for future integration)
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── uploads/
├── README.md           # Project README
├── overview.md         # This file
└── ...other files...
```

## Development Workflow
1. Install backend dependencies: `npm install` (if planning to run the backend).
2. For frontend development (local): Open `index.html` or `admin.html` directly in your web browser.
3. For backend development (local): Run `npm run dev` (requires a `.env` file and local MongoDB instance).

## Future Improvements
- **Backend Integration**: Implement full backend functionality for order management, pricing, file uploads, and user authentication using Node.js, Express, and MongoDB (as per initial plan).
- **User Authentication**: Implement secure access to the admin panel.
- **Order Management**: Transition from `localStorage` to a database for real-time updates and improved UI.
- **Pricing Configuration**: Implement dynamic pricing logic within the backend.
- **File Uploads**: Integrate the backend solution for managing card back images.
- **Error Handling**: Enhance error handling and logging in the backend.
- **User Interface**: General UI/UX improvements based on testing.
- **Payment Integration**: Add a payment gateway for orders.

## File Structure
```
/
├── public/
│   ├── index.html      # Main order form
│   ├── admin.html      # Admin panel
│   ├── js/
│   │   └── shared.js   # Shared utilities
│   ├── css/
│   └── images/
│       └── backs/      # Card back images
├── server.js           # Express server
├── package.json        # Dependencies
└── overview.md         # This file
```

## Development and Production
- **Development**: Run `npm run dev` to start the development server.
- **Production**: Build and deploy the application using appropriate hosting services.

## Future Improvements
- Implement backend integration for order management and file uploads.
- Add user authentication for secure admin access.
- Enhance error handling and logging for better debugging.
- Optimize performance and accessibility for a better user experience.

## File Structure
```
/
├── public/
│   ├── index.html      # Main order form
│   ├── admin.html      # Admin panel
│   ├── js/
│   │   └── shared.js   # Shared utilities
│   ├── css/
│   └── images/
│       └── backs/      # Card back images
├── server.js           # Express server
├── package.json        # Dependencies
└── overview.md         # This file
```

## Development
1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Access the application at `http://localhost:3000`

## Production
1. Install dependencies: `npm install`
2. Start server: `npm start`
3. Access the application at your configured domain

## Future Improvements
- User authentication
- Order history
- Email notifications
- Payment integration
- Admin dashboard enhancements 