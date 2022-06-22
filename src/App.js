import React from "react";
import Layout from "./components/layout";
import NoFound from "./components/no-search";
import Profile from "./components/profile";
import Repositories from "./components/repositories";
import useGithub from "./hooks/githubHooks";

function App() {
  const { githubState } = useGithub();
  
  return (
    <Layout>
      { githubState.hasUser ? ( 
      <>
        { githubState.loading  ? (
          <p>Loading</p>
        ) : (
        <>
          <Profile />     
          <Repositories />
        </> 
        ) }
      </>
      ) : (
      <NoFound />
      ) }
    </Layout>
  );
};

export default App;

