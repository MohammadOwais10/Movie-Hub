import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <>
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.8"
          visible={true}
          height={150}
          width={150}
        />
      </div>
    </>
  );
};

export default Loader;
