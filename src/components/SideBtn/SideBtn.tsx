import { Button } from "../ui/button";

function SideBtn({
  icon,
  text,
  addNew = false,
}: {
  icon: React.ReactNode;
  text: string;
  addNew?: boolean;
}) {
  return (
    <Button
      className={`w-full h-12 rounded-r-full justify-start gap-8 ${
        addNew && "border-y-2 border-r-2 border-dashed border-white mt-1"
      }`}
    >
      {icon}
      {text}
    </Button>
  );
}

export default SideBtn;
