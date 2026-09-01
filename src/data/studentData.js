const studentData = {
  student: {
    name: "Sameer Alam",
    initials: "SA",
    course: "BBA",
    year: "2nd Year",
    studentId: "PSIT-BBA-2026",
    institution: "PSIT",
  },

  device: {
    battery: 87,
    connection: "Connected",
    network: "Wi-Fi",
  },

  attendance: {
    overall: 86,
  },

  classes: [
    {
      id: 1,
      subject: "Marketing Management",
      teacher: "Faculty",
      time: "09:00 AM",
      endTime: "10:00 AM",
      room: "Room 201",
    },
    {
      id: 2,
      subject: "Financial Management",
      teacher: "Faculty",
      time: "10:00 AM",
      endTime: "11:00 AM",
      room: "Room 204",
    },
    {
      id: 3,
      subject: "Human Resource Management",
      teacher: "Faculty",
      time: "11:15 AM",
      endTime: "12:15 PM",
      room: "Room 105",
    },
    {
      id: 4,
      subject: "Business Analytics",
      teacher: "Faculty",
      time: "01:00 PM",
      endTime: "02:00 PM",
      room: "Lab 2",
    },
  ],

  notifications: [
    {
      id: 1,
      type: "urgent",
      title: "Important Campus Notice",
      message:
        "Students are requested to check the latest campus announcement.",
      time: "10 min ago",
    },
    {
      id: 2,
      type: "academic",
      title: "Class Schedule Updated",
      message:
        "Today's class schedule has been updated.",
      time: "30 min ago",
    },
    {
      id: 3,
      type: "general",
      title: "Campus Activity",
      message:
        "A new student activity has been announced.",
      time: "1 hr ago",
    },
  ],
};

export default studentData;