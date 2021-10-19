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
    path: "/UnitOverview",
  },
  {
    name: "Alarms & Events",
    icon: <AlarmSVG />,
    path: "/AlarmOverview",
    tip: <NavArrow />,
    subNav: [
      {
        name: "Alarm Overview",
        path: "/AlarmOverview",
      },
      {
        name: "Maintenance Log",
        path: "/MaintenanceLog",
      },
      {
        name: "Custom Logic Builder",
        path: "/CustomLogicBuilder",
      },
    ],
  },
  {
    name: "Maintenance Facility",
    icon: <MaintSVG />,
    path: "/MaintenanceFacility",
  },
  {
    name: "Simulator",
    icon: <SimuSVG />,
    path: "/Simulator",
  },
  {
    name: "Process Viewer",
    icon: <PVSVG />,
    path: "/LiveProcessViewer",
    tip: <NavArrow />,
    subNav: [
      {
        name: "Live Process Viewer",
        path: "/LiveProcessViewer",
      },
      {
        name: "Historical Process Viewer",
        path: "/HistoricalProcessViewer",
      },
    ],
  },
  {
    name: "Log Viewer",
    icon: <LVSVG />,
    path: "/LogViewer",
  },
  {
    name: "Reports",
    icon: <ReportsSVG />,
    path: "/test11",
    tip: <NavArrow />,
    subNav: [
      {
        name: "Defect Investigation",
        path: "/DefectInvestigation",
      },
      {
        name: "Diagnostics",
        path: "/Diagnostics",
      },
      
    ],
  },
];
