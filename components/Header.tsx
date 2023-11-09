import Content from "./rightContent";
import Input from "./ui/Input";

interface HeaderProps {
    
}
 
const Header: React.FC<HeaderProps> = () => {
    return (  
        <header className="mt-5 h-16 rounded-xl bg-primary flex justify-between items-center px-6 sticky top-4 shadow-xl">
            <div className="w-[152px] text-white">Logo</div>
            {/* <Input className="w-80" placeholder="Search" icon /> */}
            <Content />
        </header>
    );
}
 
export default Header;