import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { faFileContract } from "@fortawesome/free-solid-svg-icons";

const SingleAdCompanyInfo = ({
  applyId,
  title,
  subtitle,
  setApplyView,
  adButton,
  ad
}) => {
  return (
    <Fragment>
      <div className="company-brand">
        <img src="https://re-allians.se/wp-content/uploads/2019/03/SKV_RGB_st-444x321.png" />
      </div>
      <div className="company-container__info">
        <div className="company-container__subinfo">
          <span>Company</span>
          <span>{ad.company}</span>
        </div>
        <div className="company-container__subinfo">
          <span>Location</span>
          <span>{ad.location}</span>
        </div>
        <div className="company-container__subinfo">
          <span>Category</span>
          <span>{ad.category}</span>
        </div>
        <div className="company-container__subinfo">
          <span>Last apply date</span>
          <span>{ad.applyLastDate}</span>
        </div>
        <div className="company-container__subinfo">
          <span>Employment time</span>
          <span>{ad.employment_time}</span>
        </div>
        <div className="company-container__subinfo centersubinfo">
          <h4>Contact Info</h4>
        </div>
        <div className="company-container__subinfo">
          <span>Contact Name</span>
          <span>{ad.contact ? ad.contact.name : "Loading.."}</span>
        </div>
        <div className="company-container__subinfo">
          <span>Contact Email</span>
          <span>{ad.contact ? ad.contact.email : "Loading..."}</span>
        </div>
        <div className="company-container__subinfo">
          <span>Contact Phone</span>
          <span>{ad.contact ? ad.contact.phone : "Loading..."}</span>
        </div>

        <div className="apply-container">
          {adButton === "ad" ? (
            <button
              className="apply-button"
              onClick={() =>
                setApplyView({
                  ad: "apply",
                  openApply: "open-apply"
                })
              }
            >
              Apply Now
            </button>
          ) : (
            <button
              className="apply-button"
              onClick={() =>
                setApplyView({
                  ad: "ad"
                })
              }
            >
              Go Back
            </button>
          )}
        </div>
      </div>
    </Fragment>
  );
};

SingleAdCompanyInfo.propTypes = {};

export default SingleAdCompanyInfo;