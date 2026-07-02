# Git Setup

## Target Remote

```text
git@github.com:Daooooooooooooooo/NarureExplorer.git
```

Use the remote exactly as written above unless the GitHub repository name is
later corrected.

## Preparation Notes

- The project is ready to be committed as a static frontend MVP.
- The uploaded reference image is currently kept in the folder so it can be
  pushed as design context.
- `.gitignore` excludes common editor, operating system, dependency, build, log,
  and local environment files.
- No API keys or cloud credentials are stored in the project files.

## Commands To Run When Git Is Available

From the project root:

```powershell
git init
git branch -M main
git remote add origin git@github.com:Daooooooooooooooo/NarureExplorer.git
git add .
git commit -m "Initial Nature Explorer MVP"
git push -u origin main
```

If `origin` already exists, use:

```powershell
git remote set-url origin git@github.com:Daooooooooooooooo/NarureExplorer.git
```
