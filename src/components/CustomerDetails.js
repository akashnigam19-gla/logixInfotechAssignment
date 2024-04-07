import React from "react";

export default function CustomerDetails() {
  return (
    <div>
      <div className="customer-details-main-container">
        <div className="customer-details-container-main-heading">
          Customer Details
        </div>

        <div className="custmer-detail-form-main-container">
          <div className="customer-detail-input-main-container">
            <div className="customer-detail-input-label">
              Grahak Name
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

          <div className="customer-detail-input-main-container ledger-type">
            <div className="ledge-type-input-container">
              <div className="customer-detail-input-label">
                Ledge Type
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
                CIF Code
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

          <div className="customer-detail-input-main-container">
            <div className="customer-detail-input-label">Address</div>

            <div
              className="customer-detail-input"
              style={{
                width: "100%",
              }}
            >
              <textarea className="customer-detail-textarea"></textarea>
            </div>
          </div>

          <div
            className="customer-detail-input-main-container"
            style={{
              gap: "50px",
            }}
          >
            <div className="ledge-type-input-container">
              <div
                className="customer-detail-input-label"
                style={{
                  minWidth: "120px",
                }}
              >
                City
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
              <div
                className="customer-detail-input-label"
                style={{
                  minWidth: "auto",
                }}
              >
                State
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
              <div
                className="customer-detail-input-label"
                style={{
                  minWidth: "auto",
                }}
              >
                Pin
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
                  className="customer-detail-input-field pin"
                />
              </div>
            </div>
          </div>

          <div className="customer-detail-input-main-container ledger-type">
            <div className="ledge-type-input-container">
              <div className="customer-detail-input-label">
                GST No.
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
                Country
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
      </div>
    </div>
  );
}
