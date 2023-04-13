import SearchForm from "../../components/SearchForm/SearchForm";

const Home = ({ handleSetEvents, handleSetSearchedArtist }) => {
  return (
    <SearchForm
      handleSetEvents={handleSetEvents}
      handleSetSearchedArtist={handleSetSearchedArtist}
    />
  );
};

export default Home;
