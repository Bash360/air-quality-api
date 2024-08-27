# Air Quality API

## Overview

The Air Quality API is a Node.js-based REST API that provides real-time air quality information for cities based on GPS coordinates. It integrates with the IQAir API to retrieve and store air quality data. The API also includes a cron job that checks the air quality of Paris every minute.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Configuration](#configuration)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Cron Jobs](#cron-jobs)
- [Testing](#testing)
- [Project Structure](#project-structure)

## Features

- Fetch air quality data based on GPS coordinates.
- Monitor the air quality of Paris every minute using a cron job.
- Unit and integration tests using Jest and Supertest.

## Technologies

- **Node.js**: JavaScript runtime for building the backend.
- **Express.js**: Web framework for building RESTful APIs.
- **TypeScript**: Superset of JavaScript that adds static typing.
- **TypeORM**: ORM for interacting with the PostgreSQL database.
- **PostgreSQL**: Relational database for storing air quality data.
- **Winston**: Logging library for managing log messages.
- **Jest**: Testing framework for unit and integration tests.
- **Supertest**: HTTP assertion library for testing API endpoints.
- **Dotenv**: Environment variable management.

## Installation

### Prerequisites

Ensure you have the following installed:

- **Node.js** 
- **npm** 
- **PostgreSQL** 

### Steps

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Bash360/air-quality-api.git
   cd air-quality-api
