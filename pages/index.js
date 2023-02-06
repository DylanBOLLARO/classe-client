import Formulaire from "@/components/Formulaire";
import VisualisationClient from "@/components/VisualisationClient";
import VisualisationNodejs from "@/components/VisualisationNodejs";

const index = () => {
  return (
    <div className="flex flex-col justify-center p-2 gap-2">
      <div className="flex flex-col md:flex-row gap-2">
        <VisualisationClient />
        <VisualisationNodejs />
      </div>
      <Formulaire />
    </div>
  );
};

export default index;
