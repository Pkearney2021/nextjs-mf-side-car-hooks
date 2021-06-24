# Next.js with Module Federation

## Getting Started

1. run `yarn` to install from this directory, a `postinstall` script will perform the install in each next directory
2. run `yarn start` and browse to `http://localhost:3000` and `http://localhost:3001`

## Context

We have two next.js applications

- `next1` - port 3000
- `next2` - port 3001

The "main" application that is federating code (the host) is next1, visiting http://localhost:3000 should show you a nav bar with some text "Next1"

## Challenges

- Next1 exposes a component `nav` which is comsumed by next2
- If you comment out the `useEffect` inside `nav` on line 12 the next2 app loads fine.
- There is an issue with using a federated module that has hooks.
- Please !?