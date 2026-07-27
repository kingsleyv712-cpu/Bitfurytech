# Deployment notes

## Frontend and admin
- Build the apps with `npm run build` in both the frontend and admin directories.
- Set `VITE_API_URL` to the deployed backend URL when building for production.

## Backend
- Install dependencies with `pip install -r requirements.txt`.
- Start the API with `python app.py` or your hosting platform's web process command.
- The app exposes `/` and `/api/health` health endpoints.
