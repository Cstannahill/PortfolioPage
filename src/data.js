import Analytics from "./assets/img/Analytic.gif";
import Events from "./assets/img/Events.gif";
import Friends from "./assets/img/Friends.gif";
import Jobs from "./assets/img/Jobs.gif";
import Menu from "./assets/img/Menu.gif";
import TechCo from "./assets/img/TechCo.gif";

export const skills = ["CSS3"];
export const projects = [
  {
    title: "Analytics Component",
    subtitle: "SQL, Dotnet, ReactJs",
    description:
      "Returning various analytics from SQL stored procedure through dotnet RESTful API to display on view made in ReactJs.",
    image: Analytics,
    link: "https://github.com/Cstannahill/Analytics",
  },
  {
    title: "Events Component",
    subtitle: "SQL, Dotnet, ReactJs, GoogleMaps API",
    description:
      "Returning events from SQL stored procedure through dotnet RESTful API to as well as utilizing google maps API to display upcoming events in ReactJs.",
    image: Events,
    link: "https://github.com/Cstannahill/Events",
  },
  {
    title: "Menu",
    subtitle: "SQL, Dotnet, ReactJs",
    description:
      "Menu component for ordering and modifying an order item, designed mobile first. Returns available menus for an organization given the time of day/year, inserts orders into cart, as well as adding modification information to DB.",
    image: Menu,
    link: "https://github.com/Cstannahill/Menu",
  },
  {
    title: "Sample Friends Component",
    subtitle: "SQL, Dotnet, ReactJs",
    description:
      "A simple component to allow you to add a friend and display a paginated view of them. Joins with a skills table to add skills to person.",
    image: Friends,
    link: "https://github.com/Cstannahill/FriendsPage",
  },
  {
    title: "Sample Jobs Component",
    subtitle: "SQL, Dotnet, ReactJs",
    description:
      "A simple component to allow you to add a job with skill requirements and display a paginated view. Shows more detailed information on view more modal.",
    image: Jobs,
    link: "https://github.com/Cstannahill/JobsPage",
  },
  {
    title: "Sample Company Component",
    subtitle: "SQL, Dotnet, ReactJs",
    description:
      "A simple component to allow you to add a company and display a paginated view. Joined with jobs to show the associated jobs that are shown from that company.",
    image: TechCo,
    link: "https://github.com/Cstannahill/Companies",
  },
];
