# MEAL PLANNER APP

This app allows you to keep track of your daily calorie intakes. This app has been built using React, Mobx, TailwindCSS. Backend used is a Node.js API service.

## FUNCTIONAL REQUIREMENTS
1. User must be able to create an account and log in.
2. User should be able to add, edit or delete Meals.
3. If total calorie intake for one day is more than 2000, the meals will turn red, otherwise will remain green.

## WHAT COULD HAVE BEEN BETTER - TIME CRUNCH
1. Architecture could have been planned better with more reusability
2. Test Cases should have been included with proper code coverage.
3. Design could have been better with proper responsiveness.

## FOLDER STRUCTURE
1. SRC folder contains all code
2. COMPONENTS folder houses all Components that are used in a template
3. TEMPLATES folder houses all page level code that integrates components for that module.
4. STYLES folder houses CSS.
5. STORES folder contains MOBX Stores
6. CONSTANTS folder contains all code constants.
7. SERVICE folder has all third party services for the app.
8. Routes.js configuration file is responsible for routes generation.
9. .env file houses environment variables that are used to maintain environment configuration.

## DESIGN
1. This APP follows a very clean UI styling.
2. All meals are grouped by date to ensure user keeps track of their daily intake.
3. Login and Registration has been kept in a single page to help reduce navigation overhead.