import styled from 'styled-components/native';
import {View, Text, Image} from 'react-native';

export const MainContainer = styled(View)`
  flex: 1;
  background-color: #2a2845;
  padding: 2.5px;
  padding-top: 25px;
`;

export const Title = styled(Text)`
  color: white;
  font-size: 26;
  font-weight: bold;
  margin-top: 30;
  margin-left: 20;
`;

export const CarouselTitle = styled(Text)`
  color: white;
  font-size: 20;
  font-weight: bold;
  margin-left: 5px;
  margin-bottom: 10px;
`;

export const CarouselContainer = styled(View)`
  margin: 15px;
`;

export const ItemDisplayContainer = styled(View)`
  padding: 5px;
`;

export const ItemDisplayImage = styled(Image)`
  width: 115;
  height: 185;
  border-radius: 15;
`;

export const BigCarouselTitle = styled(Text)`
  color: white;
  font-size: 20;
  font-weight: bold;
  margin-left: 5px;
  margin-bottom: 10px;
`;
export const BigCarouselContainer = styled(View)`
  margin: 15px;
  margin-bottom: 10px;
`;

export const BigItemDisplayContainer = styled(View)`
  padding: 5px;
`;

export const BigItemDisplayImage = styled(Image)`
  width: 178;
  height: 285;
  border-radius: 15;
`;
