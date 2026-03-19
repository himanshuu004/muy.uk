# Git Push Guide - Step by Step

## 📚 Understanding the Process

### Basic Git Workflow:
```
1. Make Changes (edit files)
2. Stage Changes (git add)
3. Commit Changes (git commit)
4. Push Changes (git push)
```

---

## 🎯 Step-by-Step Process

### Step 1: Check Current Status
```bash
git status
```
**What it does:** Shows you what files have been changed, deleted, or added
**What to look for:**
- `modified:` - Files you've edited
- `deleted:` - Files that were removed
- `Untracked files:` - New files not yet added to git

---

### Step 2: Stage Your Changes (Add files to commit)
```bash
# Option A: Add specific files
git add path/to/file.jsx

# Option B: Add all changes (recommended for most cases)
git add .

# Option C: Add all including deletions
git add -A
```
**What it does:** Tells Git "I want to include these changes in my next commit"
**Think of it like:** Putting items in a shopping cart before checkout

---

### Step 3: Commit Your Changes
```bash
git commit -m "Your descriptive message here"
```
**What it does:** Creates a snapshot of your changes with a message
**Good commit messages:**
- ✅ "Fix: Update OurBeneficiary component for mobile"
- ✅ "Add: Performance optimizations and lazy loading"
- ✅ "Update: Navigation order in Header component"
- ❌ "changes" (too vague)
- ❌ "fix" (not descriptive)

---

### Step 4: Switch to Main Branch
```bash
git checkout main
```
**What it does:** Moves you from `dev` to `main` branch
**Note:** Make sure your changes are committed before switching!

---

### Step 5: Pull Latest Changes (Optional but recommended)
```bash
git pull origin main
```
**What it does:** Gets the latest changes from remote main branch
**Why:** Prevents conflicts if someone else pushed changes

---

### Step 6: Merge Dev into Main
```bash
git merge dev
```
**What it does:** Takes all commits from `dev` and adds them to `main`
**Result:** Your main branch now has all the changes from dev

---

### Step 7: Push to Remote Main
```bash
git push origin main
```
**What it does:** Uploads your local main branch to GitHub
**Result:** Your changes are now on GitHub!

---

## 🔄 Quick Reference

### Complete Workflow (One Command at a Time):
```bash
# 1. Check what changed
git status

# 2. Stage all changes
git add .

# 3. Commit with message
git commit -m "Your message"

# 4. Switch to main
git checkout main

# 5. Merge dev
git merge dev

# 6. Push to GitHub
git push origin main
```

---

## ⚠️ Common Issues & Solutions

### Issue: "Changes not staged for commit"
**Solution:** Run `git add .` first

### Issue: "Your branch is behind 'origin/main'"
**Solution:** Run `git pull origin main` before pushing

### Issue: "Merge conflicts"
**Solution:** Git will show you which files have conflicts. Open them, resolve conflicts, then:
```bash
git add .
git commit -m "Resolve merge conflicts"
```

### Issue: "Permission denied"
**Solution:** Check your GitHub credentials or SSH keys

---

## 📝 Best Practices

1. **Commit Often:** Small, logical commits are better than huge ones
2. **Write Good Messages:** Describe WHAT and WHY, not just what
3. **Pull Before Push:** Always pull before pushing to avoid conflicts
4. **Test Before Push:** Make sure your code works before pushing to main
5. **Use Branches:** Keep `dev` for development, `main` for production-ready code

---

## 🎓 Understanding Branches

```
dev branch    → Your working branch (where you make changes)
     ↓
main branch   → Production branch (stable, ready code)
     ↓
GitHub        → Remote repository (cloud storage)
```

**Flow:** `dev` → `main` → `GitHub`
