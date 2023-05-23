import { useSelector } from "react-redux";

export const Countries = () => {
  const countries = useSelector((state) => state.countries);

  return (
    <>
      <Container>
        {countries?.map((country) => (
          <CardCountry
            key={country.name}
            {...country} />
        ))}
      </Container>
    </>
  )
}