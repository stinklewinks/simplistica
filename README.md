# Simplistica Readme

## Overview

**Simplistica** is a headless WordPress solution designed to provide a seamless and simple experience for creatives and content creators. It allows for the flexibility of managing content through the traditional WordPress backend or the **Simplistica** backend. This project includes both a **PHP setup** and a **Node setup**, with **WPSync** as the headless library that bridges WordPress data and Simplistica.

## Key Features

- **Headless WordPress Setup**: Fully decoupled front end and back end, enabling faster performance and greater flexibility in design and functionality.
- **Dual Backend Capability**: Choose to create and manage content either through WordPress’s native backend or via the Simplistica backend.
- **WPSync Library**: The core of the Simplistica solution, **WPSync** is a library designed to sync content between WordPress and the headless front end seamlessly.
- **Creative Blog Theme**: A simple yet elegant blog theme for creatives, writers, and content creators who want a streamlined and flexible platform.

---

## Installation

### Prerequisites

- **PHP 7.4+** and related extensions (for the PHP setup)
- **Node.js 14+** and **npm** (for the Node setup)
- A running **WordPress** instance to connect to

### Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-repo/simplistica.git
   cd simplistica
   ```

2. **WordPress Configuration**
   
   Ensure that your WordPress site is properly configured for headless mode:
   - Disable any conflicting plugins or themes that might interfere with headless functionality.
   - Make sure the REST API is enabled.

3. **PHP Setup**
   
   Navigate to the PHP setup directory and follow the instructions for installing and configuring the backend:
   
   ```bash
   cd php-setup
   composer install
   ```
   
   - Create a `.env` file in the root of the `php-setup` directory:
   
     ```
     WORDPRESS_API_URL=https://your-wordpress-site.com/wp-json
     ```

   - Adjust other settings (e.g., database connection, API keys) as necessary.
   
4. **Node Setup**
   
   Navigate to the Node setup directory to install dependencies and set up the front end:
   
   ```bash
   cd ../node-setup
   npm install
   ```
   
   - Create a `.env` file in the root of the `node-setup` directory:
   
     ```
     REACT_APP_WORDPRESS_API_URL=https://your-wordpress-site.com/wp-json
     ```

   - Run the development server:
   
     ```bash
     npm run dev
     ```

   Your Simplistica frontend should now be running and accessible.

---

## WPSync: The Headless Library

**WPSync** is the library that powers the synchronization between your WordPress content and the Simplistica front end. It handles content fetching, updates, and caching to ensure a smooth experience.

### Key Features of WPSync
- **REST API Integration**: WPSync connects to the WordPress REST API, allowing content to be fetched and rendered in real-time or cached for performance.
- **Headless Compatibility**: Simplifies the process of working with WordPress in a headless environment by providing intuitive functions for fetching and displaying data.
- **Customizable Hooks**: Extend or modify the data retrieval process as needed for your unique content needs.

### Using WPSync
Include WPSync in your front end to fetch and display content from WordPress. Example usage:

```js
import { fetchPosts } from 'wpsync';

// Fetch and display posts
fetchPosts().then(posts => {
  console.log(posts);
});
```

---

## Customizing Your Blog Theme

Simplistica is designed to be highly customizable, enabling you to style your blog theme as you see fit:

- **Custom Components**: Use React/Vue/Angular components to create a unique front end.
- **Styling**: Customize your styles using CSS, SASS, or any preferred styling solution.
- **API Extensions**: Extend the API calls made by WPSync to fetch custom data or handle unique content types.

---

## Contributing

We welcome contributions to Simplistica! To contribute:
1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Submit a pull request with a description of your changes.

---

## License

Simplistica is licensed under the MIT License. See `LICENSE` for more information.

---

## Contact

For support, issues, or inquiries:
- **Email**: support@yourdomain.com
- **Twitter**: [@YourTwitterHandle](https://twitter.com/YourTwitterHandle)

Happy Blogging with Simplistica!
