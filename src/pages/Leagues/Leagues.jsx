import { useParams } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ACTION_FETCH_API } from "../../store/actions";
// import Container from "./styles";
import CardLeagues from "../../components/Leagues/CardLeague";
import { Container } from "../../styles/styles.global";
import Title from "../../components/Title/Title";

const Leagues = () => {
  const dispatch = useDispatch()
  const leagues = useSelector((state) => state.leagues);

  const { country } = useParams();

  const fetchLeagues = useCallback(async () => {
    dispatch(ACTION_FETCH_API('leaguesOfCountry', country, '', '', ''));
  }, [country, dispatch]);

  useEffect(() => {
    fetchLeagues();
  }, [fetchLeagues]);

  return (
    <>
      <Title title="Selecione a liga e/ou a copa para visualizar os times" />
      <Container>
        {leagues?.map((league) => {
          return <CardLeagues
            key={league.league.id}
            {...league} />
        })}
      </Container>
    </>
  )
}

export default Leagues;