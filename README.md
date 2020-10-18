# Front-End 

## Day 1 Installation

* Clone the repo (without forking)
* Run `npm install` in the root directory of the project to install dependecies.
* Create a new branch for each feature you're working on: git checkout -b `<branch-named-after-feature>`.
* Make meaningful/regular commits. 


## Git flow for start/end of each day: 

### *START of each workday (after Day 1)*

* Open project in VS Code. Your current branch does not matter.

```bash
git pull --verbose #will update all local branches from global repo
```

* Next, checkout a new feature branch and you're ready for the workday ahead. 

### *END of each workday (including day 1)*

* Begin by pushing your working branch to github:

```bash
git add . 
git commit -m "This is a meaningful comment."
git push -u origin <branch-name>
```

* Next, checkout the development branch. This branch will always be named `<development>`:

```bash
git checkout development

#was the branch not found? run:
git fetch --all --verbose #downloads all branches (and their contents) from online repo
git checkout development
```

* Now, while still on the `<development>` branch we're going to pull in your feature branch:

```bash
git branch #run to ensure you're on <development> branch
git merge <branch-named-after-feature> #merging your feature into development
```
* Finally you must push the updated `<development>` branch on your machine to the online repo for everyone to access.

```bash
git status

## if "Your branch is behind 'origin/<some-branch-name>' by x commits, and can be fast-forwarded.":   
git pull --verbose ## equivalent to running git fetch & git merge

## if only "nothing to commit, working tree clean":
git push -u origin development

#This is where merge conflicts will happen. Reach out for help.
```

## Extra Git Reference
#### | Entering DANGER ZONE |
#### Merging `<development>` into `<main>`

* Only one person will complete the following to wrap up each day:

```bash
git status 

## if "Your branch is behind 'origin/<main>' by x commits, and can be fast-forwarded.":   
git pull --verbose ## equivalent to running git fetch & git merge

##if "nothing to commit, working tree clean":
git push -u origin main

##if "changes not staged for commit":
git add .
git commit -m "meaningful comment."
git status #double check you staged changes
git push -u origin main
```

