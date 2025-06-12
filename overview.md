# Proxy Order System Overview

## Project Description
A web-based system for managing proxy card orders, built with HTML, CSS (Tailwind), and JavaScript. The system includes user authentication, enhanced order management, and comprehensive administrative features, with cross-browser compatibility for order and user data.

## Features

### User Authentication
- User registration and login system
- Admin and regular user roles
- Protected admin section
- Session management using localStorage
- Password validation and security

### Order Management
- Card selection interface
- Shopping cart functionality
- Order submission and tracking, with cross-browser persistence
- Order history viewing with detailed order information
- Order status updates with visual indicators
- Accurate calculation of total cards in an order
- Cleaner, single-spaced card list display in order details
- "Copy List" functionality for card lists, with correct formatting (no "undefined" values)

### Admin Features
- Comprehensive order management dashboard:
  - Filtering orders by status (Not Started, In Progress, Completed)
  - Archiving and deleting orders from both the main list and detail view
  - Detailed order view in a narrower modal, including card back images
- Enhanced user management system with cross-browser user visibility:
  - List all users with admin accounts first, with visual distinction
  - Protected primary admin account (dphillips83@gmail.com) which cannot be deleted or modified
  - Ability to promote/demote users to admin
  - User deletion capability
- Pricing configuration tools
- Bookkeeping tools for tracking orders and revenue
- Card back management
- Custom card management

### User Management
- List all users with admin accounts first
- Visual distinction for admin accounts
- Protected primary admin account
- Ability to promote/demote users to admin
- User deletion capability
- Search functionality

## Technical Implementation

### Frontend
- HTML5 for structure
- Tailwind CSS for styling, with local setup (no CDN issues)
- JavaScript for interactivity, including robust DOM element access and error handling
- Font Awesome for icons
- Responsive design

### Data Storage
- LocalStorage for user and order data persistence
- Utilizes dual `localStorage` keys (`adminOrders`/`crossBrowserOrders` and `users`/`crossBrowserUsers`) for cross-browser data synchronization
- Session management

### Security
- Password validation
- Role-based access control
- Protected admin routes
- Secure session handling

## File Structure
- `index.html` - Main order form and landing page
- `login.html` - User authentication
- `signup.html` - User registration
- `order-view.html` - Order history and details (customer view)
- `admin.html` - Administrative dashboard
- `Overview.md` - Project documentation

## Getting Started

### Prerequisites
- Modern web browser
- Local development server (e.g., Node.js with Express) for running the application

### Installation
1. Clone the repository
2. Navigate to the project root in your terminal
3. Install dependencies: `npm install` (includes `cors`)
4. Build CSS: `npm run build:css`
5. Start the development server: `npm run dev`
6. Access the application at `http://localhost:3000`

### Default Admin Account
- Email: dphillips83@gmail.com
- Password: Okm95!000

## Development Notes
- The system uses client-side storage (localStorage) for data persistence
- All sensitive operations require authentication
- Admin features are protected and only accessible to admin users
- The primary admin account cannot be deleted or modified

## Future Improvements
- Backend integration for data persistence
- Enhanced security measures
- Order export functionality
- Advanced reporting features
- Email notifications
- Payment integration

---

## Prompt for New Chat

```
I'm working on a proxy card order management system with the following features:

1. User Authentication:
   - Login/Signup system
   - Admin and regular user roles
   - Protected admin section

2. Order Management:
   - Card selection and shopping cart
   - Order submission and tracking
   - Order history viewing

3. Admin Features:
   - Order management dashboard
   - User management
   - Pricing configuration
   - Bookkeeping tools
   - Card back management
   - Custom card management

The system is built with HTML, CSS (Tailwind), and JavaScript, using localStorage for data persistence.

Current files:
- index.html (main order form)
- login.html (authentication)
- signup.html (registration)
- order-view.html (order history)
- admin.html (admin dashboard)

I need help with [specific task or feature you want to work on].
```

This prompt provides a clear overview of the project and its current state, making it easy to continue development in a new chat session. 