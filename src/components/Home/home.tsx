const Homepage = () => {
  return (
    <>
      <div>
        <img src="" alt="image1" />
        <div>
          <p>Teste seus conhecimentos sobre as tecnologias que você gosta</p>
          <input
            onChange={(event) => event.target.value}
            type="text"
            placeholder="Pesquise uma tecnologia"
          />
          <button type="submit">Buscar</button>
        </div>
        <img src="" alt="image2" />
      </div>
      <ul>
        <li></li>
      </ul>
      <div>
        <p>Teste seus conhecimentos sobre as tecnologias que você gosta</p>
      </div>
    </>
  );
};

export default Homepage;
