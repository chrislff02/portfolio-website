import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section className="projects" id="projects">
      {/* Section Command */}
      <p className="section-command">&gt; OPEN PROJECTS.DIR</p>

      {/* Project Grid */}
      <div className="projects-grid">
        <ProjectCard
          number="01"
          title="ROADRUNNERS.EXE"
          technologies="Kotlin / Android / SQL / Location APIs"
          description="Android application that tracks runs, distance, speed, average speed & stores previous runs."
          moreInfo={{
            overview:
              "RoadRunners is an Android running application that tracks workout information such as distance, current speed, average speed & previous runs. The application combines location tracking with persistent data storage to give users a history of their running activity.",
            challenges: [
              "Learning Kotlin & how to use Android Studio",
              "Working with Android location services/continuously updating the user's location",
              "Calculating distance & speed using location data",
              "Saving completed runs & retrieving them from the database to graph all the running data",
            ],
            learned:
              "Experience in building an Android application while working with real-time location data. I learned Kotlin & Andriod Studio & Android development.",
          }}
          githubUrl="https://github.com/chrislff02/RoadRunners"
        />

        <ProjectCard
          number="02"
          title="PREMIER_LEAGUE_PREDICTOR.PY"
          technologies="Python / Pandas / Machine Learning"
          description="Machine learning project that uses historical football data to predict Premier League match outcomes."
          moreInfo={{
            overview:
              "The Premier League Predictor is a machine learning project that uses historical match data to predict football match outcomes. Previous seasons are used to train the model before evaluating its predictions against unseen match data.",
            challenges: [
              "Organizing historical match data into consistent training & testing datasets",
              "Preventing test-season information from leaking into the training data",
              "Keeping feature columns consistent between training & prediction",
              "Evaluating the model on unseen data rather than data it had already learned from",
            ],
            learned:
              "Helped me better understand machine learning workflow, including preparing data, selecting features, training a model, evaluating predictions & interpreting feature importance. It also showed me how important proper train & test separation is when evaluating a model.",
          }}
          githubUrl="https://github.com/chrislff02/Premier-League-Predictor"
        />

        <ProjectCard
          number="03"
          title="ALGORITHM_VISUALIZER.TSX"
          technologies="React / TypeScript / Vite / CSS"
          description="Interactive web application for visualizing common computer science algorithms step by step."
          moreInfo={{
            overview:
              "The Algorithm Visualizer is an interactive application that demonstrates how common computer science algorithms operate step by step. Users can watch values being compared, moved & sorted while tracking statistics such as comparisons & swaps.",
            challenges: [
              "Managing sorting animations while keeping React state synchronized",
              "Allowing animation speed changes while an algorithm is already running",
              "Creating different visual states for comparisons, pivots, minimum values, merge ranges & sorted elements",
              "Making sure each algorithm correctly updates the visualization without interfering with user controls",
            ],
            learned:
              "Reinforced my understanding of how sorting algorithms work internally rather than only focusing on their final output. It also gave me more experience with asynchronous JavaScript, React state management & turning algorithm operations into visual feedback.",
          }}
          viewProject="https://algorithm-visualizer-one-gamma.vercel.app/"
          githubUrl="https://github.com/chrislff02/algorithm-visualizer"
        />

        <ProjectCard
          number="04"
          title="JOB_APPLICATION_TRACKER.WEB"
          technologies="React / TypeScript / Node.js / Express / PostgreSQL"
          description="Full-stack application for organizing job applications, tracking progress, interviews & application analytics."
          moreInfo={{
            overview:
              "The Job Application Tracker is a full-stack web application designed to help users organize & manage their job search. Users can create, edit & track applications across different stages while also viewing interview details, application history & dashboard analytics.",

            challenges: [
              "Designing a database structure for users, job applications, interviews, statuses & related application data",
              "Making authentication so every user securely accesses their own application information",
              "Connecting the React frontend with the Express backend & PostgreSQL database",
              "Keeping app status changes, dashboard statistics & application data synchronized",
              "Designing the project so features such as filtering, searching, analytics & interview tracking could work together cleanly",
            ],

            learned:
              "Designing & building a complete full-stack application. The database to the user interface, React, TypeScript, Node.js, Express, PostgreSQL, API design, authentication, CRUD operations & organizing larger applications to reusable components & backend routes.",
          }}
          viewProject="https://job-application-tracker-silk-one.vercel.app/login"
          githubUrl="https://github.com/chrislff02/job-application-tracker"
        />

        <ProjectCard
          number="05"
          title="FLAPPY_BIRD.AI"
          technologies="JavaScript / HTML / CSS / NEAT / Neural Networks"
          description="Flappy Bird-style game featuring human gameplay & an AI agent evolved using a custom NEAT implementation."
          moreInfo={{
            overview:
              "Flappy Bird AI combines a playable Flappy Bird-style game with an AI agent trained through a custom implementation of NEAT. Instead of relying on fixed movement rules, neural networks evolve over multiple generations based on their performance.",
            challenges: [
              "Designing a fitness system that appropriately rewards better-performing AI agents",
              "Providing useful game information as inputs to the neural network",
              "Managing multiple AI agents during training",
              "Handling evolutionary concepts such as generations, selection & mutation",
            ],
            learned:
              "Practical experience with neural networks & evolutionary algorithms. It helped me understand how an AI agent can improve through selection & mutation instead of relying entirely on explicitly programmed decisions.",
          }}
          viewProject="https://flappy-bird-ai-seven.vercel.app/"
          githubUrl="https://github.com/chrislff02/flappy-bird-ai"
        />

        <ProjectCard
          number="06"
          title="PERSONAL-FINANCE-DASHBOARD.APP"
          technologies="TypeScript / Python / CSS / JavaScript / HTML"
          description="Full-stack finance dashboard for tracking transactions, spending & financial trends."
          moreInfo={{
            overview:
              "The Personal Finance Dashboard is a full-stack application for recording transactions & analyzing personal spending. Users can organize their financial activity & view information that helps identify spending patterns & financial trends.",
            challenges: [
              "Connecting the frontend & backend portions of the application",
              "Designing how transaction data should be stored & retrieved",
              "Keeping financial calculations synchronized when transactions are added/changed",
              "Turning transaction data into useful summaries & visual information",
            ],
            learned:
              "More experience building an application across both the frontend & backend. I learned more about designing APIs, handling application data, connecting different technologies together & presenting raw data in a useful way.",
          }}
          viewProject="https://personal-finance-dashboard-iota-six.vercel.app/"
          githubUrl="https://github.com/chrislff02/personal-finance-dashboard"
        />
      </div>
    </section>
  );
}

export default Projects;
