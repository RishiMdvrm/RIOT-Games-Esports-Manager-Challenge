# VCT Hackathon: VALORANT Esports Manager

Welcome to the **VCT Hackathon: VALORANT Esports Manager**, a project created to support the scouting and recruitment process of VALORANT esports teams using an LLM-powered digital assistant.

## 🏆 Project Overview
Our team [**Manan Jain**](https://www.linkedin.com/in/mananjen007/), [**Manoj Dattatreya Myneni**](https://www.linkedin.com/in/manoj1205/), [**Bhavyashree Putta**](https://www.linkedin.com/in/bhavyashree-putta-b120261b8/), [**Rishi Madhavaram**](https://www.linkedin.com/in/rishimadhavaram/), and [**Tejodbhav Koduru**](https://www.linkedin.com/in/tejkodur/) developed a digital assistant that enhances player scouting and recruitment using Amazon Bedrock and other advanced AI tools. The assistant allows users to build optimal teams, analyze player performance, and make informed decisions.

## 🎮 About VALORANT
VALORANT is a tactical FPS by Riot Games, featuring intense 5v5 combat where players use strategic abilities and precise gunplay. The VALORANT Champions Tour (VCT) is the official esports league that hosts regional and international competitions, culminating in a global championship.

## 💡 Project Goal
The main objective of this project is to develop a digital assistant that can:
- **Build balanced teams**: Suggests players based on roles, stats, and performance metrics.
- **Answer questions**: Provides insights into player stats, roles, and performance trends.
- **Assist scouting**: Recommends potential recruits based on historical and real-time performance data.

## 🛠️ Core Architecture

### Key Components

 - **Amazon Bedrock**
   - Used for generative AI capabilities, handling information retrieval and generating responses based on queries.
   - Utilized **Anthropic Claude 3 Haiku** for answering user queries related to team compositions, player roles, and performance metrics.
   - Integrated **Amazon Embed V1** for creating 1536-dimensional embeddings, representing player attributes and performance metrics.

 - **Pinecone**
   - A vector database for storing and retrieving player embeddings efficiently.
   - It enables fast and accurate responses by matching query embeddings with stored player data.

 - **FastAPI**
   - Used for developing the backend, managing API requests, and interacting with Pinecone and Amazon Bedrock.
   - Provides an efficient and scalable way to handle player data retrieval and real-time queries.

 - **React.js**
   - The front end was built using **React.js** to provide an interactive chat interface.
   - Users can ask questions, get player stats, and build teams in real time.

 - **Riot Games VALORANT API**
   - Used for fetching real-time data about players, matches, and tournaments.
   - Provides up-to-date information essential for making accurate recommendations.

## ⚙️ Data Processing Pipeline

Our data processing follows these steps:
- **Data Collection**:
   - Data is fetched from the Riot Games API and other approved community resources.
- **Data Preprocessing**:
   - Cleaning and transformation of raw data to focus on player stats, roles, and key performance metrics.
- **Embedding Generation**:
   - We generate 1536-dimensional embeddings using **Amazon Embed V1** to represent player attributes effectively.
- **Parallel Processing**:
   - Leveraged Python's **ThreadPoolExecutor** to efficiently handle large datasets, enabling faster processing and querying.
- **Data Aggregation**:
   - Final player stats are aggregated into a structured format, ready for use in team-building and scouting recommendations.

## 🔢 Key Metrics for Player Analysis
The digital assistant relies on various metrics to evaluate player performance, build teams, and support scouting efforts:

- **Kills per Round (KPR)**: Average number of kills per round for each player.
- **Deaths per Round (DPR)**: Average number of deaths per round for each player.
- **Damage per Round**: Total damage inflicted by a player, averaged across rounds.
- **Headshot Ratio**: Percentage of headshots relative to total kills, indicating shooting accuracy.
- **Multi-kills**: Number of instances where a player achieves multiple kills within a single round.
- **Clutches**: Number of 1vX situations won by the player.
- **First Bloods**: Number of rounds in which the player scores the first kill.

These metrics help users make data-driven decisions during team-building and scouting processes.

## 🌟 Features

### LLM-Powered Digital Assistant
- **Team Building**: Users can create optimal teams based on player stats, roles, and past performance.
- **Scouting Support**: Recommends potential recruits by analyzing player metrics and historical data.
- **Player Insights**: Provides detailed information on player performance, including KPR, headshot ratios, and favorite agents.

## 📜 Getting Started with Create React App

This project’s front end is built with Create React App.

### Available Scripts
In the project directory, you can run:

#### `npm start`
- Runs the app in development mode at [http://localhost:3000](http://localhost:3000).
- The page will reload if you make edits, and you will see any errors in the console.

#### `npm test`
- Launches the test runner in interactive watch mode.

#### `npm run build`
- Builds the app for production, optimizing the build for the best performance.

#### `npm run eject`
- **Warning**: This is a one-way operation. Use this command only if you need to customize configurations.

### Learn More
- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React Documentation](https://reactjs.org/)

Use the setup.sh (for unix like systems) or setup.bat (for windows systems) to install the dependencies.
