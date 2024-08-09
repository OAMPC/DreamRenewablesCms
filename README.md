# Dream Renewables CMS

## Contents

- [About This Project](#about-this-project)
- [Setup](#setup)
  - [Requirements](#requirements)
    - [Installing project dependencies](#installing-project-dependencies)
- [Usage](#usage)
  - [Running the Application](#running-the-application)
- [Continuous Integration, Development and Deployment](#continuous-integration-development-and-deployment)
  - [CI/CD](#cicd)
- [Further documentation](#further-documentation)
  - [Related Repositories](#related-repositories)

## About This Project

This is the Repo/Code for the [Dream Renewables CMS](https://dream-renewables-strapi-cc05c70b96d6.herokuapp.com/). This application primarily utilises the following technologies:

- [Strapi](https://strapi.io/)
- [Heroku Deploy with Git](https://devcenter.heroku.com/articles/git)

## Setup

### Requirements

This project requires the following pre-requisites:

1. [NodeJs](https://nodejs.org/en)

#### Installing project dependencies

1. Clone the repo to your chosen directory
2. Install dependencies `npm i`
3. Create a .env file in the project root directory: `touch .env`
   - Secrets can be sourced from Heroku or a project admin
4. Build the admin panel with: `npm run build`

## Usage

### Running the application

To run the application you must ensure you've followed the setup steps

- To run the app via Node:
  - Ensure you're in the root directory
  - spin up the application: `npm run develop`

## Continuous Integration, Development and Deployment

### CI/CD

This project uses [Heroku Deploy with Git](https://devcenter.heroku.com/articles/git). In order to deploy merge a branch to main, once merged to main a hook in Heroku will catch and deploy the application.

## Further documentation

In order to build new content you must run the application locally in develop mode. From here you can build out the content via the UI which will automatically create relevant types as well as necessary endpoints to fetch content. Once satisfied and the branch has been merged into main Heroku's attached PostgresDB will update and you will be able to write the new content in the production Strapi view ready for the frontend to pull.

### Related Repositories

| Name                                                                                      | Description                                                   |
| :---------------------------------------------------------------------------------------- | :------------------------------------------------------------ |
| [Dream Renewables Frontend](https://github.com/OAMPC/DreamRenewablesFrontend)             | React code for this web application                           |
| [Dream Renewables Infrastructure](https://github.com/OAMPC/DreamRenewablesInfrastructure) | The Terraform for this web applications required architecture |
