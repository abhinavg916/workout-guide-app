# Workout Guide

![cover](https://github.com/abhinavg916/workout-guide-app/blob/main/Workout%20Guide%20Cover.png)

Watch the live production build here i.e. **deployment** - [Live Preview](https://delightful-selkie-3ba4b7.netlify.app/)

**Developed** using Reactjs, Axios, React Router, Material UI and Rapid API

### Features

- **Exercise Search** - Find exercises by muscle group, equipment, or exercise name.
- **Detailed Exercise Information** - Access comprehensive details, including targeted muscles and equipment needed.
- **Exercise Video Demonstrations** - View instructional videos sourced from YouTube for proper exercise execution.

### Steps to Run

- Setup RAPID API
  - Sign into Rapid API then search for "[ExerciseDB](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb)" and "[YouTube Search and Download](https://rapidapi.com/h0p3rwe/api/youtube-search-and-download)". Opt for free plan in both of them.
  - Select Suggested Videos endpoint from left panel then on right panel select Target as `Nodejs` and Client as `Axios` from the dropdowns.
  - Copy the value of `x-rapidapi-key` from the `options` object.
  - Paste the key's value into `.env` local file of this source code and save the file.
- Run the following commands

```
npm i
npm start
```

- NOTE: Please create your own account on Rapid API platform and use your own key in `.env`
- NOTE: Tested on Node version 18.18.0
