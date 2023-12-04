# MAL Score Guesser

MAL Score Guesser is an interactive web application where users can guess the MyAnimeList (MAL) score and popularity ranking of various anime based on a YouTube video clip. This project combines the power of React.js with YouTube and various anime APIs to create a unique and engaging experience for anime enthusiasts.

## Live Demo

Experience the MAL Score Guesser in action: [Live Demo](https://mal-score-guesser.vercel.app/)

## APIs Used

- **YouTube Data V3:** Utilized for fetching and displaying anime video clips.
- **Anime DB (Rapid API):** Provides detailed information about different anime.
- **Jikan API:** Used for accessing MAL scores and rankings.

## Environment Setup

To run this project locally, you need to set up the environment variables. Create a `.env` file in the root of the project and include the following keys:

REACT_APP_YOUTUBE_API_KEY=your_youtube_api_key
REACT_APP_ANIME_DB_API_KEY=your_anime_db_api_key
REACT_APP_JIKAN_API_KEY=your_jikan_api_key

Replace `your_youtube_api_key`, `your_anime_db_api_key`, and `your_jikan_api_key` with your actual API keys.

## Installation and Setup

1. Clone the repository:
  git clone https://github.com/jonathan-ami/MALScoreGuesser.git
2. Navigate to the project directory:
  cd MALScoreGuesser
3. Install dependencies:
  npm install
4. Run the application:
   npm start


## Usage

After starting the application, you can start guessing the scores of various anime based on the video clips provided. Enter your guess, submit, and see how close you were to the actual MAL score!

## Roadmap

Future enhancements planned for the project include:

- Implementing a clip feature in the react-player to play only a portion of the video.
- Developing a more sophisticated scoring system with enhanced visual feedback.

## Contributing

Contributions to the MAL Score Guesser are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) for details on how to contribute.

## License

This project is licensed under the [MIT License](LICENSE).
