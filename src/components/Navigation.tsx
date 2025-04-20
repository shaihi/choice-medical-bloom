
import { Button } from "./ui/button";

const Navigation = () => {
  return (
    <nav className="w-full py-4 px-6 bg-white/80 backdrop-blur-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-semibold text-gray-800">Choice Medical</div>
        <div className="hidden md:flex gap-8">
          <a href="#home" className="text-gray-600 hover:text-gray-900">Home</a>
          <a href="#technology" className="text-gray-600 hover:text-gray-900">Technology</a>
          <a href="#team" className="text-gray-600 hover:text-gray-900">Team</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
        </div>
        <Button variant="ghost" className="md:hidden">Menu</Button>
      </div>
    </nav>
  );
};

export default Navigation;
