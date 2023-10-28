import React, { useState } from "react";
import "./sidebar.css";
import Search from "../../assets/search.png";
import Inbox from "../../assets/inbox.png";
import Today from "../../assets/day.png";
import Week from "../../assets/week.png";
import Ham from "../../assets/hamburger.png";
import Add from "../../assets/plus.png";

function Sidebar() {
  const tasks = [
    { icon: Inbox, name: "Inbox" },
    { icon: Today, name: "Today" },
    { icon: Week, name: "This week" }
  ];
  
  const lists = [
    { icon: Add, name: "Add New List" }
  ];
  
  const [val, setVal] = useState("");

  const filteredTasks = tasks.filter(task => task.name.toLowerCase().includes(val.toLowerCase())).map(task => (
    <div key={task.name}>
      <img src={task.icon} alt={task.name} />{task.name}
    </div>
  ));
  const filteredLists = lists.filter(list => list.name.toLowerCase().includes(val.toLowerCase())).map(list => (
    <div key={list.name}>
      <img src={list.icon} alt={list.name} />{list.name}
    </div>
  ));

  return (
    <div className="sidebar-container">
      <div className="side">
        <div className="menu">
          <h1>Menu</h1>
          <div className="hamburger"><img src={Ham} alt='Hamburger icon'/></div>
        </div>
        <div className="search">
          <img src={Search} alt='Search icon'/>
          <input type="text" value={val} onChange={e => setVal(e.target.value)} placeholder="Search" />
        </div>
          <div className="search-results">
            {val.length > 0 ? (filteredTasks.length > 0 ? (filteredTasks) : "No matching tasks") : "Empty task"}
            {val.length > 0 ? (filteredLists.length > 0 ? (filteredLists) : "No matching lists") : "Empty list"}
          </div>
        <div className="tasks">
          <h2>TASKS</h2>
          <ul>
            <li><img src={Inbox} alt='Inbox icon'/>Inbox</li>
            <li><img src={Today} alt='Today icon'/>Today</li>
            <li><img src={Week} alt='Week icon'/>This week</li>
          </ul>
        </div>
        <div className="lists">
          <h2>LISTS</h2>
          <ul>
            <li><img src={Add} alt='Add icon'/>Add New List</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
  
export default Sidebar;