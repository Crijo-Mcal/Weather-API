# 🌤️ Weather Web Application

This project is a fullstack weather web application that provides real-time weather information based on user input. Users can search for any location and instantly receive detailed weather data through a responsive and interactive interface.

---

## 🚀 Overview

The application is built with a simple and efficient client-server architecture focused on performance, scalability, and user experience.

When a user searches for a location:

- The **frontend** sends a request to the backend.
- The **backend** first checks Redis cache for existing data.
- If cached data exists, it is returned immediately for faster response times.
- If not, the backend fetches data from an external weather API.
- The retrieved data is stored in Redis cache temporarily and then returned to the frontend.
- If the data cannot be retrieved, the backend returns an error response.

This system reduces unnecessary API calls, improves performance, and ensures efficient data handling.

---

## 🧠 Architecture Flow

```text
Frontend → Backend → Redis Cache
                     ↓ (cache miss)
             External Weather API (Visual Crossing)
                     ↓
          Store in Cache → Return to Frontend


## 🖥️ Frontend:

React
Vite
TypeScript
Recharts (data visualization)
Framer Motion (animations & transitions)
Local Storage (search history persistence)

## ⚙️ Backend:
Node.js
Express
TypeScript
Redis (caching layer)
CORS (cross-origin handling)
Rate Limiting (API protection)
API Key Authentication (secure access control)

## 🌐 External Service
Visual Crossing Weather API

## 🚀 Deployment
Frontend: Vercel
Backend: Render

## 🎨 UI/UX Design
All UI and layout design were created independently, focusing on:
Clean and minimal interface
Responsive design for all devices
Smooth user experience with animations

## ⚡ Features
🔍 Search weather by location
⚡ Fast response using Redis caching
📊 Weather visualization charts
🧠 Search history stored in Local Storage
🎨 Smooth animations (Framer Motion)
🔐 Secure backend with rate limiting & API key authentication
🚀 Fully deployed fullstack application

## 📚 Project Inspiration
This project was inspired by a project idea from roadmap.sh and extended with real-world improvements such as caching, authentication, rate limiting, and full deployment setup.

Roadmap url: https://roadmap.sh/projects/weather-api-wrapper-service
Deploy: https://weather-api-theta-seven.vercel.app/
```
