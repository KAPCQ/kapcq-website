# KAPCQ Website

This repo is a church website that is built with [Gatsby](https://www.gatsbyjs.org/), and [Netlify CMS](https://www.netlifycms.org)

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

## Prerequisites

- Node (I recommend using v8.2.0 or higher)
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)

## Run Locally
```
$ git clone https://github.com/KAPCQ/kapcq-website.git
$ cd kapcq
$ yarn
$ npm run develop
```
To test the CMS locally, you'll need run a production build of the site:
```
$ npm run build
$ npm run serve
```

## How to contribute

### Fork this repository

Fork this repository by clicking on the fork button on the top of this page.
This will create a copy of this repository in your account.

### Clone the repository

Now clone the forked repository to your machine. Go to your GitHub account, open the forked repository, click on the clone button and then click the *copy to clipboard* icon.

Open a terminal and run the following git command:

```
git clone "https://github.com/<your-user-name>/kapcq.git"
```

### Create a branch

Change to the repository directory on your computer (if you are not already there):

```
cd kapcq
```
Now create a branch using the `git checkout` command:
```
git checkout -b <add-your-new-branch-name>
```

### Make necessary changes and commit those changes

Once you make some changes and execute the command `git status` in the project directory, you'll see there are changes.

Add those changes to the branch you just created using the `git add` command:

```
git add <file-name> 
```
or
```
git add .
```
to add all the files you changed.

Now commit those changes using the `git commit` command:
```
git commit -m "<some message about the change>"
```

### Push changes to GitHub

Push your changes using the command `git push`:
```
git push origin <your-branch-name>
```

### Submit your changes for review

If you go to your repository on GitHub, you'll see a  `Compare & pull request` button. Click on that button.

Now submit the pull request.

Soon your PR will be reviewed and merged with the master branch if it doesn't have any issue.