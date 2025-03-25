import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView, Text, View } from "react-native";
import { FiberCanvas } from "./components/FiberCanvas";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import useControls from "./components/OrbitControl";

// The two lines below are needed by three.js
import "fast-text-encoding";
window.parent = window;

const Box = () => {
  useFrame(({ scene }) => {
    const box = scene.getObjectByName('box')
    if (box) {
      box.rotation.x += 0.01
      box.rotation.y += 0.01
    }
  });

  return (
    <mesh name='box'>
      <boxGeometry args={[1, 1, 1]} />
      <meshPhysicalMaterial color='blue' />
    </mesh>
  )
}

const Scene = () => {
  const { camera } = useThree();
  useEffect(() => {
    camera.position.set(0, 5, 5);
  }, [camera]);
  return (
    <>
      <ambientLight intensity={Math.PI / 2} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Box />
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default function App() {
  const [OrbitControls, events] = useControls();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Text style={{ color: 'green' }}>Do you see the rotating blue box?</Text>
        <View style={{ flex: 1 }} {...events}>
          <FiberCanvas style={{ flex: 1 }}>
            <OrbitControls />
            <Scene />
          </FiberCanvas>
        </View>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}