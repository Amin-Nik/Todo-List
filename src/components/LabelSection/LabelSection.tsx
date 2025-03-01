import { TagIcon } from "@heroicons/react/24/solid";
import SideBtn from "../SideBtn/SideBtn";
import NewLabelDialog from "../NewLabelDialog/NewLabelDialog";

function LabelSection({ fakeLabelData }: { fakeLabelData: string[] }) {
  return (
    <section className="mt-1">
      {fakeLabelData.map((label, index) => (
        <SideBtn
          key={index}
          icon={<TagIcon className="w-7! h-7! inline-block ml-4" />}
          text={label}
        />
      ))}
      <NewLabelDialog
        triggerChild={
          <SideBtn
            icon={<TagIcon className="w-7! h-7! inline-block ml-4" />}
            text="Add New Label"
            addNew={true}
          />
        }
      />
    </section>
  );
}

export default LabelSection;
