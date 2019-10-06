import styled from 'styled-components/native';
import {View, Text, Image} from 'react-native';
import Button from 'react-native-button';

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
  margin-left: 15px;
  margin-bottom: 10px;
`;

export const CarouselContainer = styled(View)`
  margin: 15px;
  margin-left: 0px;
  position: absolute;
  bottom: 0;
`;

export const ItemDisplayContainer = styled(View)`
  padding: 5px;
`;

export const ItemDisplayImage = styled(Image)`
  width: 115;
  height: 160;
  border-radius: 15;
`;

export const ItemDisplayImageAlt = styled(Image)`
  width: 145;
  height: 130;
  border-radius: 15;
`;

export const BackgroundImage = styled(Image)`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

export const BackgroundOverlay = styled(View)`
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

export const FeaturedItemContainer = styled(View)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 65%;
  align-items: center;
  justify-content: center;
`;

export const FeaturedItemTitle = styled(Text)`
  color: white;
  font-size: 40;
`;

export const FeaturedItemButton = styled(Button)`
  color: white;
  border-color: white;
  border-width: 1px;
  padding: 4px;
  margin-top: 10;
  border-radius: 5;
`;
