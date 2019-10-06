import React, {useState, useEffect, useRef} from 'react';
import {Dimensions, StatusBar, PixelRatio, View} from 'react-native';
import {useNavigationParam, useIsFocused} from 'react-navigation-hooks';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation';

const episodeUri =
  'https://srv09.erai-ddl3.info/1999/Fall/One%20Piece/901%20~%201000/%5BErai-raws%5D%20One%20Piece%20-%20905%20%5B720p%5D%5BMultiple%20Subtitle%5D.mkv';

export const DisplayScreen = props => {
  const player = useRef(null);
  const [wHeight, setHeight] = useState(Dimensions.get('window').height);
  const [wWidth, setWidth] = useState(Dimensions.get('window').width);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      Orientation.lockToLandscape();
      StatusBar.setHidden(true);
      setTimeout(() => {
        const {height, width} = Dimensions.get('window');
        setHeight(height);
        setWidth(width);
      }, 100);
    } else {
      Orientation.lockToPortrait();
      StatusBar.setHidden(false);
    }
  }, [isFocused]);

  return (
    <View
      style={{
        flex: 1,
        height: wHeight,
        width: wWidth,
        backgroundColor: 'black',
      }}>
      <Video
        ref={player}
        source={{uri: episodeUri}} // Can be a URL or a local file.
        playInBackground={false}
        resizeMode={'cover'}
        style={{flex: 1}}
      />
    </View>
  );
};
