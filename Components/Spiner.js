import React, { useRef, useEffect } from 'react';
import { Animated, Text, View } from 'react-native';

const FadeInView = (props) => {
  const rotation = useRef(new Animated.Value(`${}deg`)).current  // Initial value for opacity: 0
  

  useEffect(() => {
    Animated.timing(
      rotation,
      {
        toValue:"1000deg",
        duration: 10000,
      }
    ).start();
  }, [rotation])

  return (
    <Animated.View                 // Special animatable View
    style={[{opacity: 1}, {
      transform: [{ rotate: rotation }]
    }]}
    >
      {props.children}
    </Animated.View>
  );
}

// You can then use your `FadeInView` in place of a `View` in your components:
export default () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
        <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
      </FadeInView>
    </View>
  )
}