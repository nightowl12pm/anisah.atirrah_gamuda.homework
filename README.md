WRITTEN AND MODIFIED BY: NUR ANISAH ATIRRAH BINTI AZIZAN.
# React + Vite
=======
# Anisah Atirrah - Gamuda Homework


A collection of tutorial exercises and projects completed during the Gamuda training programme, covering web development, databases, APIs, AI and computer vision.

> **Note:** Secret files (`.env`), virtual environments (`.venv`, `venv`), `node_modules`, `vendor`, `storage` and `uploads` are intentionally not included. See [Running the projects](#running-the-projects).

## Table of Contents
- [Projects](#projects)
- [Tutorials](#tutorials)
- [Tech Stack](#tech-stack)
- [Repository Structure](#repository-structure)
- [Running the projects](#running-the-projects)
- [CocoaCheck Sabah (details)](#cocoacheck-sabah-details)
- [React + Vite template notes](#react--vite-template-notes)
- [Author](#author)

## Projects

| Project | Description | Technologies |
|---|---|---|
| `(PHP) SISTEM PENGURUSAN ASET ICT` | ICT asset management system for Jabatan Teknologi Maklumat ICT (JTMI): asset registration, dashboard, data table view and officer-on-duty pages. Includes `ict_asset_db.sql` for the database. | PHP, Laravel, MySQL |
| `PROJECT PROTOTYPE BY ME/cocoacheck-sabah` | CocoaCheck Sabah web prototype with login, dashboard, assessments, reports, staff and activity-log pages. | React, Vite, Firebase |
| `MY SIDE PROJECT/Neuroscience` | TODO: one-line description | TODO |
| `TUTORIAL 10/react-router-navigation` | Page navigation using React Router | React, React Router |
| `TUTORIAL 11/react-week-4` | React exercises for week 4 | React |
| `TUTORIAL 15/Real-Time-Clock` | Real-time clock component | React |
| `TUTORIAL 16/Database Development/Backend` | Database development for a backend application | Python |
| `TUTORIAL 18/AI VIDEO ANALYTICS` | AI video analytics application | Python |
| `TUTORIAL 19/API PART 1` | API examples with a simple HTML page | Python, HTML |
| `TUTORIAL 21/INTRODUCTION INTO RAG` | Retrieval-Augmented Generation (RAG) and embeddings | Python |
| `TUTORIAL 22/PDF SUMMARISER` | Upload a PDF file and summarise its content with AI | Python |
| `TUTORIAL 23/API CALCULATOR AGENT` | AI calculator agent that uses an API | Python |
| `TUTORIAL 24/Introduction to MCP` | Model Context Protocol (MCP) with HTTP and stdio servers, including a PostgreSQL server | Python, MCP, PostgreSQL |
| `TUTORIAL 26/Exercise 1 (MCP)` | MCP exercise: add Tavily to `servers.py` | Python, MCP |
| `TUTORIAL 27/Computer Vision` | Introduction to computer vision, data restoration and data manipulation | Python |
| `TUTORIAL 28/PPE-DETECTION` | PPE detection, with images labelled in Label Studio and trained with YOLO | Python, YOLO, Label Studio |

## Tutorials

| Tutorial | Topic | Technologies |
|---|---|---|
| Tutorial 1 | HTML | HTML |
| Tutorial 6-9 | TODO | TODO |
| Tutorial 10 | React Router navigation | React |
| Tutorial 11 | React (week 4) | React |
| Tutorial 12-13 | TODO | TODO |
| Tutorial 15 | Real-time clock component | React |
| Tutorial 16 | Database development (backend) | Python |
| Tutorial 17 | Backend | TODO |
| Tutorial 18 | AI video analytics | Python |
| Tutorial 19 | API Part 1: examples with a simple HTML page | Python, HTML |
| Tutorial 20 | TODO | TODO |
| Tutorial 21 | Introduction to Retrieval-Augmented Generation (RAG) and embeddings | Python |
| Tutorial 22 | Upload a PDF and summarise its content with AI | Python |
| Tutorial 23 | API calculator agent | Python |
| Tutorial 24 | Introduction to Model Context Protocol (MCP): HTTP and stdio servers | Python, MCP, PostgreSQL |
| Tutorial 25 |  | API |
| Tutorial 26 | Exercise 1, MCP: add Tavily to `servers.py` | Python, MCP |
| Tutorial 27 | Introduction to computer vision, data restoration and data manipulation | Python |
| Tutorial 28 | PPE detection with Label Studio and YOLO | Python, YOLO, Label Studio |

## Tech Stack

| Area | Tools |
|---|---|
| Frontend | React, Vite, HTML, CSS, JavaScript |
| Backend | Python, PHP (Laravel) |
| Database | MySQL, PostgreSQL |
| Cloud | Firebase |
| AI / ML | RAG and embeddings, MCP, YOLO, Label Studio |

## Repository Structure

```
.
├── (PHP) SISTEM PENGURUSAN ASET ICT - .../
├── MY SIDE PROJECT/
│   └── Neuroscience/
├── PROJECT PROTOTYPE BY ME/
│   └── cocoacheck-sabah/
├── TUTORIAL 1 ... TUTORIAL 28/
├── .gitignore
└── README.md
```

## Running the projects

Each project has its own folder, so open the folder first.

### Python projects
```bash
python -m venv .venv
.venv\Scripts\activate          # Windows
pip install -r requirements.txt
python main.py
```

### React / Vite projects
```bash
npm install
npm run dev
```

### Laravel project
```bash
composer install
copy .env.example .env
php artisan key:generate
php artisan serve
```
Import `ict_asset_db.sql` into MySQL, then set the database details in `.env`.

### Environment variables
Some projects need a `.env` file with API keys (for example an AI API key or Tavily). These are **not** included in this repository. Create a `.env` file in the project folder, using `.env.example` where one is provided:

```
API_KEY=your_key_here
```

## CocoaCheck Sabah (details)

A web prototype for managing cocoa assessments in Sabah. Staff can log in, record and review assessments, view reports and keep track of activity.

**Features**
- Login page
- Dashboard with statistics and recent assessments
- Assessments page
- Report page
- Staff management page
- Activity logs
- Rules page

**Project structure**
```
cocoacheck-sabah/
├── public/
├── src/
│   ├── components/   # Header, Sidebar, StatsGrid, StaffPage, etc.
│   ├── pages/        # Dashboard, report
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

**Build for production**
```bash
npm run build
```

## React + Vite template notes

The React projects in this repository were created from the Vite React template, which provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

### React Compiler

The React Compiler is not enabled on this template because of its impact on dev and build performance. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

### Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Author

**Anisah Atirrah**
GitHub: [@nightowl12pm](https://github.com/nightowl12pm)
