import React from "react";
import Button from "@mui/material/Button";

export default function DataTable() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 4</th>
            <th>Column 5</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Row 1</td>
            <td>Row 1</td>
            <td>Row 1</td>
            <td>Row 1</td>
            <td>Row 1</td>
          </tr>
          <tr>
            <td>Row 2</td>
            <td>Row 2</td>
            <td>Row 2</td>
            <td>Row 2</td>
            <td>Row 2</td>
          </tr>
          <tr>
            <td>Row 3</td>
            <td>Row 3</td>
            <td>Row 3</td>
            <td>Row 3</td>
            <td>Row 3</td>
          </tr>
          <tr>
            <td>Row 4</td>
            <td>Row 4</td>
            <td>Row 4</td>
            <td>Row 4</td>
            <td>Row 4</td>
          </tr>
          <tr>
            <td>Row 5</td>
            <td>Row 5</td>
            <td>Row 5</td>
            <td>Row 5</td>
            <td>Row 5</td>
          </tr>
          <tr>
            <td>Row 6</td>
            <td>Row 6</td>
            <td>Row 6</td>
            <td>Row 6</td>
            <td>Row 6</td>
          </tr>
        </tbody>
      </table>

      <div className="customer-details-main-container">
        <div className="customer-details-container-main-heading">
          Mobile Application Configuration
        </div>

        <div className="custmer-detail-form-main-container">
          <div className="customer-detail-input-main-container ledger-type">
            <div className="ledge-type-input-container">
              <div className="customer-detail-input-label">Company Code</div>

              <div className="customer-detail-input">
                <input
                  type="text"
                  placeholder="Enter Grahak Name"
                  className="customer-detail-input-field"
                />
              </div>
            </div>
            <div className="ledge-type-input-container">
              <div className="customer-detail-input-label">Database</div>

              <div className="customer-detail-input">
                <input
                  type="text"
                  placeholder="Enter Grahak Name"
                  className="customer-detail-input-field"
                />
              </div>
            </div>
          </div>

          <div className="ledge-type-input-container">
            <div className="customer-detail-input-label">Number Of Users</div>

            <div className="">
              <input
                type="text"
                placeholder="Enter Grahak Name"
                className="customer-detail-input-field"
              />
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "20px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            style={{ backgroundColor: "#f5f5f5", color: "#000" }}
          >
            Update
          </Button>
        </div>
      </div>

      <div className="customer-details-main-container">
        <div className="customer-details-container-main-heading">
          Renewal Details
        </div>

        <div className="custmer-detail-form-main-container">
          <div className="customer-detail-input-main-container ledger-type">
            <div className="ledge-type-input-container">
              <div className="customer-detail-input-label">Date Of Captcha</div>

              <div className="customer-detail-input">
                <input
                  type="text"
                  placeholder="Enter Grahak Name"
                  className="customer-detail-input-field"
                />
              </div>
            </div>
            <div className="ledge-type-input-container">
              <div className="customer-detail-input-label">Message</div>

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
              <div className="customer-detail-input-label">No. of Users</div>

              <div className="customer-detail-input">
                <input
                  type="text"
                  placeholder="Enter Grahak Name"
                  className="customer-detail-input-field"
                />
              </div>
            </div>
            <div className="ledge-type-input-container">
              <div className="customer-detail-input-label">License Key</div>

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
              <div className="customer-detail-input-label">No. of Com</div>

              <div className="customer-detail-input">
                <input
                  type="text"
                  placeholder="Enter Grahak Name"
                  className="customer-detail-input-field"
                />
              </div>
            </div>
            <div className="ledge-type-input-container">
              <div className="customer-detail-input-label">Sysoro Path</div>

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
      </div>
    </div>
  );
}
