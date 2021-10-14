export const data = [
  {
    defect_id: "D-1234-DVA",
    defect_description: "Fault in Digital Voice Announcement",
    functional_location: "TSNSW-RS-D-D104",
    unit_status: "In Service-Operational",
    fault_condition: "Breakdown",
    mode: "Operational",
    equipment: "Car1",
    subsystem: "CASS",
    component: "Air Condition",
    date: "26/09/2020",
    time: "11:04 AM",
    priority: "LOW",
    type: "alarm",
    isAcknowledged: false,
    isIsolated: false,
    is_sn_raised: true,
    sn_status: "closed",
  },
  {
    defect_id: "D-1235-DVA",
    defect_description: "Fault in Digital Voice Announcement",
    functional_location: "TSNSW-RS-D-D104",
    unit_status: "In Service-Maintenance",
    fault_condition: "Breakdown",
    mode: "Stabled",
    equipment: "Car1",
    subsystem: "CASS",
    component: "Air Condition",
    date: "26/09/2020",
    time: "11:04 AM",
    priority: "LOW",
    type: "event",
    isAcknowledged: true,
    isIsolated: false,
    is_sn_raised: true,
    sn_status: "OPEN",
  },
  {
    defect_id: "D-1236-DVA",
    defect_description: "Fault in Digital Voice Announcement",
    functional_location: "TSNSW-RS-D-D104",
    unit_status: "In Service-Operational",
    fault_condition: "Breakdown",
    mode: "Stabled",
    equipment: "Car1",
    subsystem: "CASS",
    component: "Air Condition",
    date: "26/09/2020",
    time: "11:04 AM",
    priority: "HIGH",
    type: "alert",
    isAcknowledged: false,
    isIsolated: false,
    is_sn_raised: true,
    sn_status: "OPEN",
  },
];

export const activeTabData = data.filter(
  (v) => !v.isIsolated && typeof v.isAcknowledged === "boolean"
);
export const acknowledgedTabData = data.filter(
  (v) => v.isAcknowledged && v.isAcknowledged
);
export const unacknowledged = data.filter(
  (v) => !v.isAcknowledged && !v.isAcknowledged
);
export const isIsolated = data.filter((v) => v.isIsolated && v.isIsolated);
