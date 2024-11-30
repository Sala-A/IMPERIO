export default function Error() {
  return (
    <div className="errorPage">
      <img id="img-error" src="/IMPERIO/src/public/5203299-removebg-preview.png" alt="" />
      <p className="errorMessage">
        Oops! The page you are looking for does not exist.
      </p>
      <a href="/" className="homeLink">
        <span className="text-error">Go back to Homespan</span>
      </a>
    </div>
  );
}
