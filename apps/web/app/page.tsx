import React from 'react';

const RootPage = async () => {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await delay(2000);
  return (
    <div>
      Issues with parallel routing since the doc mentioned that we could have
      independent loading for each slots but loading for the first folder seems
      to take the loading of root, But seems to work with using a workaround of
      using route groups
    </div>
  );
};

export default RootPage;
