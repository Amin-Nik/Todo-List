import { TagIcon } from "@heroicons/react/24/solid";
import SideBtn from "../SideBtn/SideBtn";
import NewLabelDialog from "../NewLabelDialog/NewLabelDialog";
import { Button } from "../ui/button";

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
          <Button className="w-full h-12 rounded-r-full justify-start gap-8 border-y-2 border-r-2 border-dashed border-white my-1">
            <TagIcon className="w-7! h-7! inline-block ml-4" />
            Add New Label
          </Button>
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
