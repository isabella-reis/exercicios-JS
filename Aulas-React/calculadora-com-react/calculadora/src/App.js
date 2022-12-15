import { Container, Content, Row } from "./styles";
import { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";

const App = () => {
  //Estado p/ armazenar o current number && ele começa em 0
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  //Para manipular o valor dentro do input quando clicarmos nos botões
  const handleAddNumber = (number) => {
    //Vamos pegar o valor que já temos no estado e concatenar o number
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${number}`);
  };

  //Para limpar nossa caixinha
  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  };

  //Para somar
  const handleSumNumbers = () => {
    //Se meu 1º number for = 0, vamos salvar o numero atual no currentNumber
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("+");
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  //Para subtrair
  const handleSubtractNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("-");
    }  else {
      const subtract = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(subtract));
      setOperation("");
    }
  };

  //Para dividir
  const handleDivisonNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("/");
    } else {
      const division = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(division));
      setOperation("");
    }
  };

  //Para multiplicar
  const handleMultiplyNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("*");
    } else {
      const multiply = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multiply));
      setOperation("");
    }
  };

  //Para retonar a igualdade
  const handleEquals = () => {
    if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          handleSumNumbers();
          break;
        case "-":
          handleSubtractNumbers();
          break;
        case "/":
          handleDivisonNumbers();
          break;
        case "*":
          handleMultiplyNumbers();
          break;
        default:
          break;
      }
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="*" onClick={handleMultiplyNumbers} />
          <Button label="0" onClick={() => handleAddNumber("0")} />
          <Button label="/" onClick={handleDivisonNumbers} />
          <Button label="C" onClick={handleOnClear} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="-" onClick={handleSubtractNumbers} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
