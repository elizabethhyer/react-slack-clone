import MessageIcon from "@material-ui/icons/Message";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import PeopleIcon from "@material-ui/icons/People";
import AppsIcon from "@material-ui/icons/Apps";

export const sidebarItems = [
  {
    icon: <MessageIcon />,
    text: "Thread",
  },
  {
    icon: <InboxIcon />,
    text: "All DMs",
  },
  {
    icon: <DraftsIcon />,
    text: "Mentions and Reactions",
  },
  {
    icon: <BookmarkIcon />,
    text: "Saved Items",
  },
  {
    icon: <PeopleIcon />,
    text: "People and Groups",
  },
  {
    icon: <AppsIcon />,
    text: "More",
  },
];

export const channels = [
  {
    name: "channel 1",
  },
  {
    name: "channel 2",
  },
];
