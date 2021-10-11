import {
  HomeSVG,
  UOSVG,
  AlarmSVG,
  MaintSVG,
  NavArrow,
  SimuSVG,
  PVSVG,
  LVSVG,
  ReportsSVG,
} from "./leftNav/";

export const navData = [
  {
    name: "Home",
    icon: <HomeSVG />,
    path: "/",
  },
  {
    name: "Unit Overview",
    icon: <UOSVG />,
    path: "/otherPage",
  },
  {
    name: "Alarms & Events",
    icon: <AlarmSVG />,
    path: "/test2",
    tip: <NavArrow />,
    subNav: [
      {
        name: "Alarm Overview",
        path: "/test3",
      },
      {
        name: "Service Notifications",
        path: "/test17",
      },
      {
        name: "Custom Logic Builder",
        path: "/test18",
      },
    ],
  },
  {
    name: "Maintenance Facility",
    icon: <MaintSVG />,
    path: "/test5",
  },
  {
    name: "Simulator",
    icon: <SimuSVG />,
    path: "/test6",
  },
  {
    name: "Process Viewer",
    icon: <PVSVG />,
    path: "/test7",
    tip: <NavArrow />,
    subNav: [
      {
        name: "Live Process Viewer",
        path: "/test8",
      },
      {
        name: "Historical Process Viewer",
        path: "/test9",
      },
    ],
  },
  {
    name: "Log Viewer",
    icon: <LVSVG />,
    path: "/test10",
  },
  {
    name: "Reports",
    icon: <ReportsSVG />,
    path: "/test11",
    tip: <NavArrow />,
    subNav: [
      {
        name: "Defect Investigation",
        path: "/test12",
      },
      {
        name: "Condition Reports",
        path: "/conditionReports",
      },
      {
        name: "Status Reports",
        path: "/test15",
      },
      {
        name: "Customer Notification",
        path: "/test16",
      },
    ],
  },
];
