import { EditorHome } from "../editor/DynamicHomeEditor.jsx"
const HomeEditor = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-10 p-8 md:p-18 mt-10">
        {/* Header and title div */}
        <div className="flex flex-col gap-10"> 
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-left text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            Back To Basics.
          </span>
          <p className="text-2xl opacity-60 font-light tracking-tighter">
            Editr will allow you to quickly get your thoughts on your machine, with full markdown, image support, and more! 
          </p>
        </div>
        {/* Editor Div */}
        <div className="p-4 border-2 w-full max-w-xl rounded-xl h-[600px]">
          <EditorHome />
        </div>
    </div>
  )
}
export default HomeEditor;