import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load">
        <p
          style={{
            height: "100vh",
            width: "100%",
            fontSize: "10rem",
            color: "#000",
            fontWeight: 800,
            marginTop: 40,
            zIndex: "10000",
          }}
        >
          {progress.toFixed(2)}%
        </p>
      </span>
    </Html>
  );
};

export default Loader;
