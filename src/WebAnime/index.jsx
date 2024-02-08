import { useEffect, useState } from "react";
import BasicCard from "./card";
import NavScroll from "./navbar";
import axios from "axios";
import Loading from "./loading";

const WebAnime = () => {
  const [animeData, setAnimeData] = useState([]);
  const [resSearch, setResSearch] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.jikan.moe/v4/anime");
        setAnimeData(response.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoad(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = async (searchInput) => {
    setLoad(true);

    try {
      const response = await axios.get(
        `https://api.jikan.moe/v4/anime?q=${searchInput}`
      );
      setResSearch(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoad(false);
    }
  };

  return (
    <>
      {load ? (
        <Loading />
      ) : (
        <>
          <NavScroll onSearch={handleSearch} />
          {resSearch == "" && <BasicCard data={animeData} />}
          <BasicCard data={resSearch} />
        </>
      )}
    </>
  );
};

export default WebAnime;
