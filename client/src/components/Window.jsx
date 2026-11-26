import { VscChromeMinimize } from "react-icons/vsc";
import { VscChromeMaximize } from "react-icons/vsc";
import { VscChromeClose } from "react-icons/vsc";

function Window({ children, fluid }) {
  const classes = `w-full ${fluid ? "h-fit" : "h-83.75"} flex justify-center items-center`

  return (
    <div className={classes}>
      <div className="w-full h-full flex flex-col bg-window border-window-border border-2 rounded-md">
        <div className="h-8.75 flex justify-between p-2">
          <p className="text-sm">Ahriri</p>
          <div className="flex gap-2">
            <VscChromeMinimize />
            <VscChromeMaximize />
            <VscChromeClose />
          </div>
        </div>
        {fluid ? (
          <div className="p-3 pt-0 w-full h-full flex justify-center">
            <div className="w-full h-full bg-purple-50 rounded-sm border-2 border-window-border flex justify-center">
              {children}
            </div>
          </div>
        ) : (
          <div className="p-3 pt-0 w-full h-75 flex justify-center">
            <div className="w-full h-full bg-purple-50 rounded-sm border-2 border-window-border flex justify-center">
              {children}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Window
