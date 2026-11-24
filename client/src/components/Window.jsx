import { VscChromeMinimize } from "react-icons/vsc";
import { VscChromeMaximize } from "react-icons/vsc";
import { CgClose } from "react-icons/cg";

function Window({ children }) {
  return (
    <div className="w-full h-83.75 flex justify-center items-center">
      <div className="w-full h-full flex flex-col bg-window border-window-border border-2 rounded-md">
        <div className="h-8.75 flex justify-between p-2">
          <p className="text-sm">Ahriri</p>
          <div className="flex gap-2">
            <VscChromeMinimize />
            <VscChromeMaximize />
            <CgClose />
          </div>
        </div>
        <div className="p-3 pt-0 w-full h-73.75 flex justify-center">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Window
