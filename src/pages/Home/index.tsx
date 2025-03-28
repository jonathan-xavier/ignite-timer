import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, Separator } from "./styles";

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
            <label htmlFor="task">Vou trabalhar em</label>
            <input type="text" id="task" />

            <label htmlFor="">durante</label>
            <input type="number" id="minutesAmount" />

            <span>minutos</span>
        </FormContainer>
        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <button type="submit">
            <Play/>
            Começar
        </button>
      </form>
    </HomeContainer>
  );
};

export { Home };
