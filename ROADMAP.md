# ROADMAP.md - Obsidian Panel by 21Studios

### Project Overview

Obsidian Panel by 21Studios is a modern, minimalistic server management panel with a black design, purple accents, and advanced animations. Designed for companies and individuals creating hosting businesses, Obsidian Panel includes all features of Pterodactyl with extra customization options and a streamlined client area for resource purchasing. Admins can set up placeholders for their hosting company name, accessible in the management panel, making branding easy and scalable.

---

## Phase 1: Planning and Design

1. **Define Core Features and User Stories:**
   - Server management (create, start, stop, restart)
   - Coin-based resource purchasing (CPU, RAM, storage)
   - User authentication (Discord, Google, email/password)
   - Customizable hosting company name for branding
   - User roles and permissions system (admin, moderator, client)
   - Management panel for admins to configure settings, branding, and placeholder text

2. **Design and User Interface Layout:**
   - Dark-themed UI with purple accents and advanced animations
   - Minimalistic client area with shop and server creation options
   - Management panel for resource limit customization, server settings, account controls, and company name branding
   - Navigation structure and layout for client and management panels

3. **Wireframes and Prototyping:**
   - Create wireframes and mockups for the main UI components
   - Review design and get feedback on usability

---

## Phase 2: Backend Development

1. **Setup Backend with Laravel and MySQL:**
   - **PHP (Laravel)** for the main backend
   - **MySQL** or **MariaDB** for database storage
   - **Redis** for caching and real-time operations

2. **Core Backend Features:**
   - **User Authentication**: Setup login for Discord, Google, email/password
   - **User Roles and Permissions**: Role-based access control (admin, moderator, client)
   - **Server Management**: Create, start, stop, and restart servers using Docker containers
   - **Resource Allocation and Limits**: Set CPU, RAM, storage per user

3. **Implement Coin System and Resource Shop:**
   - **Coin Transactions**: API to handle coin purchases and balances
   - **Shop Integration**: Purchase CPU, RAM, storage, and other upgrades with coins

4. **Company Branding and Management Panel:**
   - **Editable Company Name**: Placeholder for company name and branding, editable in the management panel
   - **Brand Customization**: Admins can adjust the company name and branding across the panel from one central area

5. **Notifications and Alerts System:**
   - **Event Triggers**: Notify users of server status changes, resource limits, and transactions
   - **Email and On-Panel Alerts**: Setup notification system for critical alerts

6. **Activity Logs and Security Audits:**
   - Track user activity (logins, server changes, purchases)
   - Admin access to review security and usage logs

---

## Phase 3: Frontend Development

1. **Build UI Components with Vue.js and Tailwind CSS:**
   - **Client Dashboard**: Server controls, coin balance, and quick access to shop
   - **Shop Interface**: Coin-based purchases for resources and upgrades
   - **Server Console and Controls**: Real-time server console with control buttons (start, stop, restart)

2. **Styling and Animations:**
   - Apply black-and-purple theme with Tailwind CSS
   - Flexbox for responsive, minimalistic layout
   - Advanced animations for smooth user experience

3. **Integrate Notifications and Alert System:**
   - Pop-up notifications for key actions (e.g., purchases, status updates)
   - Real-time alerts for server events, resource usage

4. **Help Center Integration:**
   - Set up an FAQ and documentation section within the client area

---

## Phase 4: Additional Features and API Integration

1. **Advanced Features for Hosting Businesses:**
   - **SFTP Access**: Built-in SFTP access for secure file management
   - **Custom Docker Image Support**: Allow custom Docker image configuration
   - **Two-Factor Authentication (2FA)**: Enhanced security with 2FA support
   - **Networking Configurations**: Configure IP and port management for advanced setups
   - **Scheduled Tasks**: Automation options like server restarts and backups
   - **Server Migration Tools**: Tools to transfer servers between nodes

2. **Management Panel for Admins:**
   - **Edit Company Branding and Resource Limits**: Customize placeholder names, resource limits, permissions
   - **Activity Logs**: Review user activity and audit logs
   - **Theme Customization Options**: Dark/light themes and accent color changes

3. **AFK and Linkvertise Integration:**
   - Track AFK page visits to reward coins
   - Set up Linkvertise page for additional coin-earning options

4. **Server Backup and Restore Options:**
   - Implement automated backups and easy restore points for servers

5. **API Access for Developers:**
   - Create API endpoints for users to manage their servers programmatically

---

## Phase 5: Testing and Deployment

1. **Comprehensive Testing:**
   - Unit and integration testing on backend, frontend, and API
   - User testing on server container management and coin transactions
   - Performance and security testing, including role-based permissions

2. **Deployment to Tinkerhost and Devzero:**
   - Host the front-end on Tinkerhost and backend on Devzero
   - Set up caching, load balancing, and performance optimization

3. **Launch and Feedback Collection:**
   - Launch a beta version to gather user feedback
   - Monitor for bugs, performance issues, and usability feedback

4. **Regular Updates and Support:**
   - Release feature updates, bug fixes, and security patches
   - Continuous improvement based on user feedback

---

With this roadmap, Obsidian Panel will cover essential features for a professional, hosting-ready panel that is easily customizable for branding and client management. Let us know if you’d like further adjustments or additional details in any phase!
