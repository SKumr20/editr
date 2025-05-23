/******* IMP ********/
// USE THE DYNAMIC VERSION ONLY
import { Editor } from "../../components/editor/DynamicEditor";
import { Room } from "app/Room";

const page = () => {
  return (
    <div className="mt-30 mx-10 md:mx-40">
      <Room>
        <Editor />
      </Room>
    </div>
  )
}

export default page