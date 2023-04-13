import { Helmet } from "react-helmet";

import SearchForm from "../../components/SearchForm/SearchForm";

const Home = ({ handleSetEvents, handleSetSearchedArtist }) => {
  <Helmet>
    <title>RaveFinder Home Page</title>
    <meta name="description" content="RaveFinder Home Page" />
  </Helmet>;
  return (
    <SearchForm
      handleSetEvents={handleSetEvents}
      handleSetSearchedArtist={handleSetSearchedArtist}
    />
  );
};

export default Home;
