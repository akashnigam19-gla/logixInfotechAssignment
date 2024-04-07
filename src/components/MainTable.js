import React from "react";
import "../assets/css/Table.css";
import CloseIcon from "@mui/icons-material/Close";
import CustomerDetails from "./CustomerDetails";
import Button from "@mui/material/Button";
import ContactDetail from "./ContactDetail";
import InstallationDetails from "./InstallationDetails";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import DataTable from "./DataTable";

export default function MainTable() {
  return (
    <div>
      <div className="table-main-container">
        <p className="table-main-heading">
          GRAHAK MASTER (Addition){" "}
          <CloseIcon className="table-main-close-icon" />
        </p>

        <div className="table-content-container">
          <div className="table-left-container">
            <CustomerDetails />
            <ContactDetail />
            <InstallationDetails />
          </div>
          <div className="table-right-container">
            <FormControl className="radio-btn-container">
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="allCompany"
                  control={<Radio />}
                  label="All Company"
                />
                <FormControlLabel
                  value="active"
                  control={<Radio />}
                  label="Active"
                />
                <FormControlLabel
                  value="terminated"
                  control={<Radio />}
                  label="Terminated"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
            <DataTable />
          </div>
        </div>
      </div>
      <div className="footer-container customer-details-container-main-heading">
        <Button
          variant="contained"
          style={{
            backgroundColor: "#f5f5f5",
            color: "#000",
            textTransform: "none",
            marginRight: "10px",
          }}
        >
          Cancel
        </Button>

        <Button
          disabled
          variant="contained"
          style={{
            backgroundColor: "#f5f5f5",
            color: "#000",
            textTransform: "none",
            marginRight: "10px",
          }}
        >
          Delete
        </Button>
        <Button
          disabled
          variant="contained"
          style={{
            backgroundColor: "#f5f5f5",
            color: "#000",
            textTransform: "none",
            marginRight: "10px",
          }}
        >
          Exit
        </Button>
      </div>
    </div>
  );
}
