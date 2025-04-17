import ToggleDarkmode from "../ui/ToggleDarkmode"

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex p-3 md:p-4 mt-6 mx-10 md:mx-20 lg:mx:50 xl:mx-80 bg-accent rounded-lg">
        Navbar
        <ToggleDarkmode />
    </div>
  )
}

export default Navbar