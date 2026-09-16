# File Format Microscope

An offline static browser exhibit for three early personal-computing formats: GIF87a, Windows BMP, and RIFF/WAV. It ships only self-created one-pixel/near-silent fixtures.

## Test

`npm run fixtures && npm test` regenerates the fixtures and checks the browser parser against `expected/fixtures.json`.

## Run locally

`docker compose up --build -d`, then open `https://microscope.ichabod-crane.net` after deployment. The site performs parsing entirely in the browser; fixtures are fetched only from its own static directory.
