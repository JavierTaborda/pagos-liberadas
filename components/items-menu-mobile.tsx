import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import { Menu, MenuSquare } from "lucide-react";

const ItemsMenuMobile = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Menu className="cursor-pointer" />
      </PopoverTrigger>

      <PopoverContent className="w-56">
        <div className="flex flex-col gap-2">
          <p>Pagos</p>
          <p>Documentos</p>
          <p>Administrar</p>
        </div>
      </PopoverContent>
    </Popover>

   
  );
};

export default ItemsMenuMobile;
