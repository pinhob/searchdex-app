import React from "react";
import styled from "styled-components/native";

export default function ErrorDetailsCard() {
  return (
    <Wrapper>
      <Name>Erro 404</Name>
      <ErrorImage 
        source={require("../../assets/images/crying_pikachu.webp")} 
        style={{ width: 270, height: 200 }} 
        resizeMode="contain"
      />
      <AbilitiesWrapper>
        <AbilitiesTitle>Habilidades</AbilitiesTitle>
        <Ability>Erro de Servidor</Ability>
        <Ability>Erro da PokeAPI</Ability>
      </AbilitiesWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.View`
  align-items: center;
  margin-top: 20px;
  min-width: 300px;
  background-color: #FABC05;
  border-radius: 12px;
  padding: 20px 15px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
`;

const Name = styled.Text`
  font-size: 28px;
  font-weight: bold;
  width: 100%;
  text-align: center;
  background-color: #FDE49B;
  padding: ${(props: { theme: { spacing: { sm: any; }; }; }) => props.theme.spacing.sm}px 0;
  border-radius: ${(props: { theme: { borderRadius: { md: any; }; }; }) => props.theme.borderRadius.md}px;
  margin-bottom: 15px;
  text-transform: capitalize;
`;

const ErrorImage = styled.Image`
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
  background-color: #4385F5;
  border-radius: ${(props: { theme: { borderRadius: { lg: any; }; }; }) => props.theme.borderRadius.lg}px;
`;

const AbilitiesTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  align-self: flex-start;
  margin-left: 10px;
`;

const AbilitiesWrapper = styled.View`
  width: 100%;
  background-color: #FDE49B;
  padding: ${(props: { theme: { spacing: { md: any; }; }; }) => props.theme.spacing.md}px 0;
  border-radius: ${(props: { theme: { borderRadius: { md: any; }; }; }) => props.theme.borderRadius.md}px;
`;

const Ability = styled.Text`
  font-size: 16px;
  margin-left: 10px;
  margin-bottom: 5px;
`;