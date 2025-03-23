
# Solve Script
This is my CS50 final project - a JavaScript coding challenge platform that allows users to tackle coding challenges of varying difficulty, get instant feedback on their solutions, track progress, and earn achievements


![Preview](assets/preview.png)


## Core Features

### Authentication System
-   **User Registration**: Easy sign-up with checks to make sure everything's entered right on both ends
-   **User Login**: Authentication system keeps you logged in safely with secure cookies
-   **Session Management**: Keeps you logged in as you move around the site, no need to keep re-entering your details

### Challenge System
-   **Challenge Browser**: ind the right challenge for you, filter by how hard it is or what it's about
-   **Code Editor**:  a proper code editor, like the one from VS Code
-   **Test Runner**: Hit "run" and see if your code passes all tests
-   **Instant Feedback**: You'll know right away if your code worked or not, with results in the panel
-   **Solution Submission**: Once you've passed all the tests, you can submit your solution

### Progress Tracking
-   **User Profile**: See all the challenges you've completed and any badges you've earned
-   **XP System**: Get points for every challenge you finish
-   **Achievements**: Unlock special badges when you hit certain milestones


## App architecture

### Front-end



#### App:
* `page.tsx`: Main page, changes depending on if you're logged in
* `challenges/page.tsx`: Where you browse challenges, with filters
* `challenges/[slug]/page.tsx`: Details for each challenge
* `challenges/[slug]/editor/page.tsx`: The coding area
* `profile/page.tsx`: Your progress and stats
* `login/page.tsx` & `register/page.tsx`: Login and signup pages

#### Components:
* `ChallengeCard.tsx`: Little cards for challenge listings
* `ChallengesFilter.tsx`: The controls for sorting challenges
* `Editor.tsx`: The code editor, using Monaco
* `EditorInfoPanel.tsx`: Shows instructions or results
* `ResultsInfo.tsx`: Tells you if your code passed
* UI Components: `ButtonPrimary.tsx`, `ButtonSecondary.tsx`, `Input.tsx` (basic buttons and boxes)
* Form Components: `LoginForm.tsx`, `RegisterForm.tsx` (login and signup forms, with checks)

### Back-end

The back-end uses Next.js API routes and server actions, with a SQLite database

#### Authentication (`actions/auth.ts`):
* `getSession()`: Figures out who's logged in
* `registerUser()`: Creates new users, protects passwords
* `loginUser()`: Lets people log in
* `logout()`: Logs people out

#### Database Layer (`lib/db.ts`):
* Handles the database connection
* Manages user info
* Gets challenge info
* Tracks user progress

#### API Routes:
* `challenges/route.ts`: Gets challenge data
* `run-code/route.ts`: Runs and tests your code
* `login/route.ts`: Handles login requests
* `register/route.ts`: Handles register requests

### Database Schema

SQLite database with tables for:
* Users (login details, XP, completed challenges)
* Challenges (descriptions, difficulty, tests)
* Achievements (badges you earn)



## Design Decisions

### Authentication Approach
 chose Iron Session over JWT or NextAuth because of its simplicity and security. The cookies are encrypted, so a separate token system isn't needed. I really like this library because it doesn't add unnecessary complexity, and making authentication with it was enjoyable

### Editor Implementation
I was looking for a code editor library and stumbled upon Monaco Editor. I didn't realize the same editor VS Code uses was available, which was a pleasant surprise. Since I love VS Code, I had to go with Monaco

### Database Choice
For the database, I chose SQLite. I know it might not sound as fancy as MongoDB or PostgreSQL, but for this project, it's perfect. It's simple, portable, and fast

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/wjkba/solve-script.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser
