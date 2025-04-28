import { TrophySpin } from "react-loading-indicators";

const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <TrophySpin 
        color={["#B2cd52", "#B27fcd", "#cd82cd", "#cd882"]} 
        text="loading..." 
        textColor="#bb12a"
      />
    </div>
  );
};

export default Loading;