import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="150"
        visible={true}
        position="fixed"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      />
    </>
  );
};

export default Loader;
