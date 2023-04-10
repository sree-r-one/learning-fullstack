import { format } from "date-fns";
import SelectColumnFilter from "./SelectColumnFilter";

export const COLUMNS = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "First Name",
    accessor: "first_name",
  },
  {
    Header: "Last Name",
    accessor: "last_name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "DOB",
    accessor: "date_of_birth",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
  },
  {
    Header: "Age",
    accessor: "age",
  },
  {
    Header: "Country",
    accessor: "country",
    Filter: SelectColumnFilter, // new
    filter: "includes", // new
  },
  {
    Header: "Phone",
    accessor: "phone",
  },
];
