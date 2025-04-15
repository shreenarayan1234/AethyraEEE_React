import { FaHome } from "react-icons/fa";
import { MdHomeRepairService } from "react-icons/md";
import { MdInfoOutline } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";
import { BsCalendarEventFill } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";

export const MenuItems = [
    {
      title : "Home",
      icon : <FaHome />,
      path: "/"
    },
    {
      title : "Our Services",
      icon : <MdHomeRepairService />,
      path: "/services"
    },
    {
      title : "About Us",
      icon : <MdInfoOutline />,
      path: "/about"
    },
    {
      title : "Past Events",
      icon : <BsClockHistory />,
      path: "/pastevents"
    },
    {
      title : "Upcomming Events", 
      icon:<BsCalendarEventFill />,
      path: "/upcomming"
    },
    {
        title : "Contact Us", 
        icon:<IoMdContact />,
        path: "/contact"
      },
  ]
