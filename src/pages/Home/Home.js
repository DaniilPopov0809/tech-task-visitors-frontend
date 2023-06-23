import { Link } from "react-router-dom";

const Home = () => {
  return (
    <h1>
      Welcome! Please, <Link to="/login">Log In</Link> as an administrator to continue working.
      {/* Please <Link to="/tweets">login</Link> in as an administrator to continue working. */}
      {/* This is a simple app for viewing user cards with tweets.
       Click <LinkTweets to="/tweets">Tweets</LinkTweets> to view application. */}
    </h1>
  );
};

export default Home;
