const DashboardPage = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3">
        Testing Parallel Routing and Intersecting Routes
      </h2>
      <p>The agent and weapons blocks are parallel routes</p>
      <p>
        Issues with parallel routing since the doc mentioned that we could have
        independent loading for each slots but loading for the first folder
        seems to take the loading of root, But seems to work with using a
        workaround of using route groups
      </p>
      <h2 className="font-semibold my-3">
        {' '}
        Click on a weapon to initiate a intersecting route
      </h2>
      <p>
        Spent my time wasting finding what the issue with the code was cause i
        just used the example code, but it was just the matter of deleting the
        .next folder and restarting the server
      </p>
    </div>
  );
};

export default DashboardPage;
