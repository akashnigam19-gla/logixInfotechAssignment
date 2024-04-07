import React from "react";
import Button from "@mui/material/Button";

export default function InstallationDetails() {
  return (
    <>
      <div
        className="customer-details-main-container"
        style={{
          paddingTop: "10px",
        }}
      >
        <div className="customer-detail-input-main-container ledger-type">
          <div className="ledge-type-input-container">
            <div className="customer-detail-input-label">
              Date of Installation
              <sup
                style={{
                  color: "red",
                }}
              >
                *
              </sup>
            </div>

            <div className="customer-detail-input">
              <input
                type="text"
                placeholder="Enter Grahak Name"
                className="customer-detail-input-field"
              />
            </div>
          </div>
          <div className="ledge-type-input-container">
            <div className="customer-detail-input-label">
              AMC Period Form
              <sup
                style={{
                  color: "red",
                }}
              >
                *
              </sup>
            </div>

            <div className="customer-detail-input">
              <input
                type="text"
                placeholder="Enter Grahak Name"
                className="customer-detail-input-field"
              />
            </div>
          </div>
        </div>

        <div className="customer-detail-input-main-container ledger-type">
          <div className="ledge-type-input-container">
            <div className="customer-detail-input-label">
              Price Of Software
              <sup
                style={{
                  color: "red",
                }}
              >
                *
              </sup>
            </div>

            <div className="customer-detail-input">
              <input
                type="text"
                placeholder="Enter Grahak Name"
                className="customer-detail-input-field"
              />
            </div>
          </div>
          <div className="ledge-type-input-container">
            <div className="customer-detail-input-label">
              AMC Period To
              <sup
                style={{
                  color: "red",
                }}
              >
                *
              </sup>
            </div>

            <div className="customer-detail-input">
              <input
                type="text"
                placeholder="Enter Grahak Name"
                className="customer-detail-input-field"
              />
            </div>
          </div>
        </div>

        <div className="customer-detail-input-main-container ledger-type">
          <div className="ledge-type-input-container">
            <div className="customer-detail-input-label">
              Date Of Termination
              <sup
                style={{
                  color: "red",
                }}
              >
                *
              </sup>
            </div>

            <div className="customer-detail-input">
              <input
                type="text"
                placeholder="Enter Grahak Name"
                className="customer-detail-input-field"
              />
            </div>
          </div>
          <div className="ledge-type-input-container">
            <div className="customer-detail-input-label">
              Period Of AMC
              <sup
                style={{
                  color: "red",
                }}
              >
                *
              </sup>
            </div>

            <div className="customer-detail-input">
              <input
                type="text"
                placeholder="Enter Grahak Name"
                className="customer-detail-input-field"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
