## Development Steps

- [Adding changes](#adding-changes)
- [Commit and push]('#commit-and-push)

### Adding Changes

Generally, when adding a new feature to the app, the steps to do perform the tasks can be summarized as follow:

1. Understand the requirements and separate responbilities: what needs to go in Redux and what needs to go in React
2. Try to split the problem in smaller problems. The smaller the problem, the easier to solve. Keep a reasonable size for a problem to be solved
3. Figure out the Types of the data you'll need. Write types and interfaces in the types.ts
4. Imagine the Redux structure of the data and create getters and setters for it
5. If async operations are required, creates the saga in combination with Redux actions
6. Build the necessary user interface consuming the Redux data structure
7. Split the user interface into reusable components whenever possible
8. Write unit tests

At this point you should iterate over the last steps and do the following:

1. Refine the behaviour each time
2. Understand what logic is reusable and goes in a helper
3. Refine the types: it's not trivial to figure out exactly what are the exact types your module will need at the beginning

**Note**: it is strongly suggested to commit and push frequently.

### Commit and push

It's a good practice to commit and push your changes frequently. 

Pre-commit and pre-push git hooks have been setup to help identify and catch issues **locally** ahead of time; changes breaking tests won't be allowed to be pushed to the remote git repo.

Additionally, a proper CI is setup using github actions.



