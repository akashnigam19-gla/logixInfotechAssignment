import React from "react";

export default function ContactDetail() {
  return (
    <div>
      <div className="customer-details-main-container">
        <div className="customer-details-container-main-heading">
          Contact Details
        </div>

        <div className="custmer-detail-form-main-container">
          <div className="customer-detail-input-main-container ledger-type">
            <div className="ledge-type-input-container">
              <div className="customer-detail-input-label">
                Name of The MD
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
                Mobile
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
            <div className="customer-detail-input-label">
              Email of The MD
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
                Contact Person
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
                Designation
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
            <div className="customer-detail-input-label">
              Contact Mobile
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

          <div className="customer-detail-input-main-container">
            <div className="customer-detail-input-label">
              Contact Email
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

          <div className="customer-detail-input-main-container">
            <div className="customer-detail-input-label">
              Website
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

      <div
        className="customer-details-main-container"
        style={{
          paddingRight: "40px",
          paddingTop: "5px",
        }}
      >
        <div className="custmer-detail-form-main-container">
          <div className="customer-detail-input-main-container">
            <div className="customer-detail-input-label">
              Company To Be Registered
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

          <div className="customer-detail-input-main-container">
            <div className="customer-detail-input-label">
              Mobile To Be Registered
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

          <div className="customer-detail-input-main-container">
            <div className="customer-detail-input-label">
              Email To Be Registered
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

          <div className="customer-detail-input-main-container">
            <div className="customer-detail-input-label">
              HDD Sri To Be Registered
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
  );
}
