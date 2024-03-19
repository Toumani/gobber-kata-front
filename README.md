# GOBBER Kata Shopping

This is a challenge to showcase my front end development techniques in a recruitment process.

It's a simple e-commerce application built with ReactJS and was done initially with time constraint.
I might come back and add more features in the future.

## Preview

Preview at https://gobber-kata-front.vercel.app/

## Running locally

```shell
npm install
npm run dev
```

## Implementation

Used tools are
- Vite
- ReactJS + TypeScript
- TailwindCSS
- NextUI
- SWR

### State Management

Since the application currently have very little amount of features, the state management is done globally with the build-in ReactJS hook `useContext`.

Component-level state is managed using `useState`

### Data  fetching

Data fetching is done with [SWR](https://swr.vercel.app/), a simple data revalidation library.

### UX

The app was developed with a mobile-first approach.
Thus, the user experience is optimized for mobile usage while desktop usage is still supported.