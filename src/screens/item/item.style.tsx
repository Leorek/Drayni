import styled from 'styled-components/native';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
export const ItemDescriptionViewMore = styled(Icon)`
  color: white;
  margin-top: 0;
  margin-right: 10;
  align-self: center;
`;

export const CarouselContainer = styled(View)`
  padding-left: 10;
`;

export const CarouselTitle = styled(Text)`
  color: white;
  font-size: 20;
  font-weight: bold;
  margin-left: 15px;
  margin-bottom: 10px;
`;

export const ItemDisplayContainer = styled(View)`
  flex: 1;
  flex-direction: row;
  height: 80;
`;

export const ItemDisplayImage = styled(Image)`
  width: 80;
  border-radius: 15;
`;
export const ItemDisplayInfoContainer = styled(View)`
  flex: 1;
  padding-left: 10;
  padding-right: 10;
`;
export const ItemDisplayTitle = styled(Text)`
  color: white;
  font-weight: bold;
  font-size: 16;
`;
export const ItemDisplayDescription = styled(Text)`
  color: white;
  flex-wrap: wrap;
`;
