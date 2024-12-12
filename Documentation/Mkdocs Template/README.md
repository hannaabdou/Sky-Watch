## 📋 Table of Contents

- [📋 Table of Contents](#-table-of-contents)
- [🌟 Introduction](#-introduction)
- [🕹️ Features](#️-features)
- [📂 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)

---

## 🌟 Introduction

This project is built using [MkDocs with the Material theme](https://squidfunk.github.io/mkdocs-material/) , providing a clean and responsive design for the documentation.

---


## 🕹️ Features

- 📘 **Code Documentation**  
- 📝 **Blog Section**
- 🏷️ **Tags & Search**
- 🎨 **Custom Design**

---

## 📂 Project Structure

Here’s a high-level view of the project directory:

```bash
mkdocs-blog/
│
├── .github/
│  └── workflows/
│     └── ci.yml
│
├── docs/
│  ├── assets/
│  │  ├── home-bg.jpg
│  │  ├── logo.ico
│  │  └── user-logo.png
│  │
│  ├── blog/
│  │  ├── posts/
│  │  │  ├── first-post.md
│  │  │  └── second-post.md
│  │  ├── .authors.yml
│  │  └── index.md
│  │
│  ├── coding/
│  │  ├── image-processing.md
│  │  ├── python.md
│  │  └── random-forest.md
│  │
│  ├── stylesheets/
│  │  └── extra.css
│  │
│  ├── javascripts/
│  │  └── mathjax.js
│  │
│  ├── index.md
│  ├── about.md
│  └── tags.md
│
├── hooks/
│  └── socialmedia.py
│
├── overrides/
│  └── partials/
│     └── comments.html
│
├── site/
│  └── ...
│
├── .gitignore
├── mkdocs.yml
├── LICENSE.txt
├── requirements.txt
└── README.md
```

---

## 🚀 Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Ensure you have Python 3.10+ installed:

---

### Installation

1. Install the dependencies:

   ```bash
   $ cd "Mkdocs Template"
   $ pip install -r requirements.txt
   ```

2. Run the local development server:

   ```bash
   $ mkdocs serve
   ```

---

👨‍💻 Made with by [Rowan Elsadat](https://github.com/rowanelsadat)
