import { FaResearchgate } from "react-icons/fa6";
import { MdOutlineAspectRatio } from "react-icons/md";
import { RiCustomerService2Fill, RiMarkPenFill } from "react-icons/ri";

const projectTypes = [
  {
    title: "Daniels Apartement",
    color: "rgb(94 145 151 / 67%)",
    icon: <FaResearchgate fill="red" className="icon" />,
    TeamMembers:[
      {
          "name": "simon Jorge",
          "profile": "https://images.unsplash.com/photo-1562788869-4ed32648eb72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
          "jobCatagory": "project manager",
          "progress": "80"
        },
        {
          "name": "Tmarcus Brown",
          "profile": "https://images.unsplash.com/photo-1495603889488-42d1d66e5523?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fGJsYWNrJTIwbWFsZXN8ZW58MHx8MHx8fDA%3D",
          "jobCatagory": "UX Designer",
          "progress": "40"
        },
        {
          "name": "Fabio Lucas",
          "profile": "https://images.unsplash.com/photo-1631306006348-f9ed42b1e19a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fHdvcmslMjBwcm9mZXNpb25hbHN8ZW58MHx8MHx8fDA%3D",
          "jobCatagory": "Technical support specialist",
          "progress": "70"
        },
        {
          "name": "Christina Ryoji",
          "profile": "https://images.unsplash.com/photo-1573496527892-904f897eb744?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
          "jobCatagory": "Sales engineer.",
          "progress": "25"
        },
    ]
  },
  {
    title: "Software Developement",
    color: "rgb(205 137 95 / 57%)",
    icon: <RiCustomerService2Fill fill="black" />,
    TeamMembers:[
      {
      "name": "Fabio Lucas",
      "profile": "https://images.unsplash.com/photo-1631306006348-f9ed42b1e19a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fHdvcmslMjBwcm9mZXNpb25hbHN8ZW58MHx8MHx8fDA%3D",
      "jobCatagory": "Technical support specialist",
      "progress": "70"
    },
    {
      "name": "Christina Ryoji",
      "profile": "https://images.unsplash.com/photo-1573496527892-904f897eb744?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      "jobCatagory": "Sales engineer.",
      "progress": "25"
    },
    {
      "name": "Ashely jhonson",
      "profile": "https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      "jobCatagory": "Database administrator",
      "progress": "50"
    },
    {
      "name": "Tmarcus Brown",
      "profile": "https://images.unsplash.com/photo-1495603889488-42d1d66e5523?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fGJsYWNrJTIwbWFsZXN8ZW58MHx8MHx8fDA%3D",
      "jobCatagory": "UX Designer",
      "progress": "40"
    },
    ]
  },
  {
    title: "Construction",
    color: "rgb(205 177 95 / 77%)",
    icon: <MdOutlineAspectRatio fill="green" />,
    TeamMembers:[ {
      "name": "Christina Ryoji",
      "profile": "https://images.unsplash.com/photo-1573496527892-904f897eb744?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      "jobCatagory": "Sales engineer.",
      "progress": "25"
    },
    {
      "name": "Ashely jhonson",
      "profile": "https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      "jobCatagory": "Database administrator",
      "progress": "50"
    }]
  
  },
  {
    title: "Abel Apartemnt",
    color: "yellow",
    icon: <FaResearchgate />,
    TeamMembers:[ {
      "name": "Ashely jhonson",
      "profile": "https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      "jobCatagory": "Database administrator",
      "progress": "50"
    },
    {
      "name": "Tmarcus Brown",
      "profile": "https://images.unsplash.com/photo-1495603889488-42d1d66e5523?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fGJsYWNrJTIwbWFsZXN8ZW58MHx8MHx8fDA%3D",
      "jobCatagory": "UX Designer",
      "progress": "40"
    },
    {
      "name": "Fabio Lucas",
      "profile": "https://images.unsplash.com/photo-1631306006348-f9ed42b1e19a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fHdvcmslMjBwcm9mZXNpb25hbHN8ZW58MHx8MHx8fDA%3D",
      "jobCatagory": "Technical support specialist",
      "progress": "70"
    },
  ]
  },
];
export default projectTypes
