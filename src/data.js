import { STATUS } from "./constant";

export default treeData = [
  // Root 1: Work Projects
  {
    id: "root1",
    label: "Work Projects",
    status: STATUS.UNCHECKED,
    children: [
      {
        id: "projectX",
        label: "Project X",
        status: STATUS.UNCHECKED,
        children: [
          {
            id: "ux",
            label: "UX Design",
            status: STATUS.UNCHECKED,
            children: [
              {
                id: "wireframes",
                label: "Wireframes.sketch",
                status: STATUS.UNCHECKED,
              },
              {
                id: "prototype",
                label: "Prototype.fig",
                status: STATUS.UNCHECKED,
              },
            ],
          },
          {
            id: "dev",
            label: "Development",
            status: STATUS.UNCHECKED,
            children: [
              {
                id: "frontend",
                label: "Frontend",
                status: STATUS.UNCHECKED,
              },
              {
                id: "backend",
                label: "Backend",
                status: STATUS.UNCHECKED,
              },
            ],
          },
        ],
      },
      {
        id: "projectY",
        label: "Project Y",
        status: STATUS.UNCHECKED,
        children: [
          {
            id: "research",
            label: "Research",
            status: STATUS.UNCHECKED,
          },
        ],
      },
    ],
  },

  // Root 2: Personal
  {
    id: "root2",
    label: "Personal",
    status: STATUS.UNCHECKED,
    children: [
      {
        id: "finance",
        label: "Finance",
        status: STATUS.UNCHECKED,
        children: [
          {
            id: "tax2023",
            label: "Tax 2023",
            status: STATUS.UNCHECKED,
          },
          {
            id: "investments",
            label: "Investments",
            status: STATUS.UNCHECKED,
          },
        ],
      },
      {
        id: "travel",
        label: "Travel Plans",
        status: STATUS.UNCHECKED,
        children: [
          {
            id: "europe",
            label: "Europe Trip",
            status: STATUS.UNCHECKED,
            children: [
              {
                id: "flights",
                label: "Flight Bookings",
                status: STATUS.UNCHECKED,
              },
              {
                id: "hotels",
                label: "Hotel Reservations",
                status: STATUS.UNCHECKED,
              },
            ],
          },
        ],
      },
    ],
  },

  // Root 3: Archived (No Children)
  {
    id: "root3",
    label: "Archived",
    status: STATUS.UNCHECKED,
    children: [],
  },
];
