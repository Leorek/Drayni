import styled from 'styled-components/native';
import {View, Image, Text} from 'react-native';

export const MainContainer = styled(View)`
  flex: 1;
  background-color: #2a2845;
`;

export const TopImage = styled(Image)`
  height: 275;
`;

export const GeneralInfoContainer = styled(View)`
  flex-direction: row;
  position: absolute;
  top: 150;
  left: 15;
`;

export const GeneralInfoContainerTitleContainer = styled(View)`
  flex: 1;
  justify-content: center;
  padding-left: 15;
`;
export const ItemTitle = styled(Text)`
  color: white;
  font-size: 24px;
  flex-wrap: wrap;
`;
export const ItemCover = styled(Image)`
  width: 100px;
  height: 125px;
  border-radius: 5;
`;

export const ItemDescriptionContainer = styled(View)`
  padding: 15px;
`;
export const ItemDescriptionTitle = styled(Text)`
  color: white;
  font-size: 20;
  font-weight: bold;
  margin-bottom: 5;
`;
export const ItemDescription = styled(Text)`
  color: white;
`;
export const BackgroundOverlay = styled(View)`
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;
