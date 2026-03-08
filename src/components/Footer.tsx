import { LocateFixedIcon, MessageCircle, Globe, FacebookIcon, TwitterIcon, InstagramIcon} from "lucide-react";

const Footer=()=>{
    return(
        <footer className="bg-[#057857] text-white py-8">
            <div className="container flex flex-col md:flex-row mx-auto px-4 md:justify-between space-y-4 ">
                <div>
                    <div className="flex items-center mb-2">
                       <img src="/bg.jpeg" alt="BetNode Logo" className="h-8 w-auto mr-2 inline-block" />
                       <span className="text-lg font-bold">HumRight</span>
                    </div>
                   <p>Proffesional betting tips and predictions from expert analysts</p>
                </div>
                <div>
                    <h2 className="font-semibold text-[#f49e0b]">Quick Links</h2>
                    <ul className="space-y-2 mt-2">
                        <li><a href="#" className="hover:text-green-400">Home</a></li>
                        <li><a href="#" className="hover:text-green-400">Betting Tips</a></li>
                        <li><a href="#" className="hover:text-green-400">Premium</a></li>
                        <li><a href="#" className="hover:text-green-400">Contact Us</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-semibold text-[#f49e0b]">Contact Info</h2>
                    <ul className="space-y-2 mt-2">
                        <li><a href="#" className="hover:text-green-400">
                            <MessageCircle className="inline-block mr-2 w-4 h-4" />
                            Whatsapp
                            </a></li>
                        <li><a href="#" className="hover:text-green-400 text-sm">
                            <Globe className="inline-block mr-2 w-4 h-4" />
                            https://HumRightBettingtips.com
                            </a></li>
                        <li><a href="#" className="hover:text-green-400 text-sm">
                            <LocateFixedIcon className="inline-block mr-2 w-4 h-4" />
                            Sport city, Nairobi, Kenya
                            </a></li>
                        <li className="flex space-x-4">
                            <FacebookIcon className="inline-block mr-2 w-4 h-4" />
                            <TwitterIcon className="inline-block mr-2 w-4 h-4" />
                            <InstagramIcon className="inline-block mr-2 w-4 h-4" />

                        </li>
                    </ul>
                </div>
                
            </div>
            <div className="mt-5 mb-5 container mx-auto px-4">
                    <div className="w-full h-0.5 bg-[#185848]/80"></div>
                    <p className="text-center text-sm mt-4">&copy; 2024 HumRight Betting Tips. All rights reserved.</p>
                </div>
        </footer>
    );
}

export default Footer;