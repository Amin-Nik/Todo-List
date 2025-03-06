import { TagIcon } from "@heroicons/react/24/solid";
import SideBtn from "../SideBtn/SideBtn";
import NewLabelDialog from "../NewLabelDialog/NewLabelDialog";

function LabelSection({
  labelData,
  filterByLabelEvent,
}: {
  labelData: string[] | null | undefined;
  filterByLabelEvent: (label: string) => void;
}) {
  return (
    <section>
      <NewLabelDialog
        triggerChild={
          <SideBtn
            icon={<TagIcon className="w-7! h-7! inline-block ml-4" />}
            text="Add New Label"
            addNew={true}
          />
        }
      />
      {labelData?.map((label, index) => (
        <SideBtn
          clickHandler={() => filterByLabelEvent(label)}
          key={index}
          icon={<TagIcon className="w-7! h-7! inline-block ml-4" />}
          text={label}
        />
      ))}
    </section>
  );
}

export default LabelSection;
