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
- **Backend**: Node.js with Express for serving static files and handling API requests.
- **Data Storage**: Local storage for order persistence.

## File Structure
- `public/`: Contains static assets and HTML files.
  - `index.html`: Main order form interface.
  - `admin.html`: Admin panel interface.
  - `js/`: JavaScript files for shared utilities and components.
  - `images/`: Card back images and other assets.

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