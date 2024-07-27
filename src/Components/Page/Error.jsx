export default function Error() {
  return (
    <div className="errorPage">
      <h1 className="errorCode">404</h1>
      <p className="errorMessage">
        Oops! The page you are looking for does not exist.
      </p>
      <a href="/" className="homeLink">
        Go back to Home
      </a>
    </div>
  );
}
